import AddCompany from "./Add"
import RemoveCompany from "./Remove"

import { isCompanyInFavourites } from "../../assets/js/helpers.ts"

import type { FavouriteCompanies, FavouriteCompany } from "../../types/index.ts"

type showOptionsType = {
  add: boolean
  remove: boolean
  dependsIfCompanyInFavourites: boolean
}

type ActionsCompProps = {
  company: FavouriteCompany
  favouriteCompanies: FavouriteCompanies
  showOptions: showOptionsType
}

const defaultShowOptions: showOptionsType = {
  add: true,
  remove: true,
  dependsIfCompanyInFavourites: false,
}

/**
 * props: {
 *    company: obj
 *    favouriteCompanies: <as defined in redux store>
 *    showOptions: {
 *      add: bool, default: true
 *      remove: bool, default: true
 *    }
 * }
 */

const ActionsComp = ({ company, favouriteCompanies, showOptions = defaultShowOptions }: ActionsCompProps) => {
  const finalShowOptions = { ...defaultShowOptions, ...showOptions }
  return (
    <>
      {/* show "add to favourites" and/or "remove from favourites" as you want */}
      {!finalShowOptions.dependsIfCompanyInFavourites && (
        <>
          {/* ADD */}
          {finalShowOptions.add && <AddCompany company={company} favouriteCompanies={favouriteCompanies} />}

          {/* REMOVE */}
          {finalShowOptions.remove && <RemoveCompany company={company} favouriteCompanies={favouriteCompanies} />}
        </>
      )}

      {/* if the company is in favourites: show "add to favourite", else show "remove from favourites" */}
      {finalShowOptions.dependsIfCompanyInFavourites && (
        <>
          {isCompanyInFavourites({ favouriteCompanies })(company) && <RemoveCompany company={company} favouriteCompanies={favouriteCompanies} />}
          {!isCompanyInFavourites({ favouriteCompanies })(company) && <AddCompany company={company} favouriteCompanies={favouriteCompanies} />}
        </>
      )}
    </>
  )
}

export default ActionsComp
