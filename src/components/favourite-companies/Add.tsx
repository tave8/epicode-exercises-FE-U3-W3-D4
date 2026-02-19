import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { HeartFill as HeartFillIcon, Plus as PlusIcon } from "react-bootstrap-icons"

import type { FavouriteCompany as FavouriteCompanyType, FavouriteCompanies as FavouriteCompaniesType } from "../../types/index"

import { addCompanyToFavouriteCompaniesAction } from "../../redux/actions/index.ts"

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
        dispatch(addCompanyToFavouriteCompaniesAction(company))
      }}
    >
      <PlusIcon size={20} />
      <HeartFillIcon />
    </Button>
  )
}

export default AddComp
