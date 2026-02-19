import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { HeartFill as HeartFillIcon, Plus as PlusIcon } from "react-bootstrap-icons"

import type { FavouriteCompany as FavouriteCompanyType, FavouriteCompanies as FavouriteCompaniesType } from "../../types/index"

import { isCompanyInFavourites } from "../../assets/js/helpers.ts"

type AddCompProps = {
  company: FavouriteCompanyType
  favouriteCompanies: FavouriteCompaniesType
}

const AddComp = ({ company, favouriteCompanies }: AddCompProps) => {
  const dispatch = useDispatch()

  return (
    <Button
      variant="success"
      onClick={() => {
        // check again that the company is not in favourites.
        // prevents discrepancy between UI and source of truth
        if (isCompanyInFavourites({ favouriteCompanies })(company)) {
          return
        }
        dispatch({
          type: "ADD_COMPANY_TO_FAVOURITE_COMPANIES",
          payload: company,
        })
      }}
    >
      <PlusIcon size={20} />
      <HeartFillIcon />
    </Button>
  )
}

export default AddComp
