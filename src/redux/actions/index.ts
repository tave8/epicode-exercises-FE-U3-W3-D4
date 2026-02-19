import { isCompanyInFavourites } from "../../assets/js/helpers"

//***** CONSTANTS
export const ADD_COMPANY_TO_FAVOURITE_COMPANIES = "ADD_COMPANY_TO_FAVOURITE_COMPANIES"
export const REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES = "REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES"

//***** ACTIONS
export const addCompanyToFavouriteCompaniesAction = (dispatch) => {
  return ({ favouriteCompanies, company }) => {
    // check again that the company is not in favourites.
    if (isCompanyInFavourites({ favouriteCompanies })(company)) {
      return
    }
    dispatch({
      type: ADD_COMPANY_TO_FAVOURITE_COMPANIES,
      payload: company,
    })
  }
}

export const removeCompanyFromFavouriteCompaniesAction = (dispatch) => {
  return ({ company }) => {
    dispatch({
      type: REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES,
      payload: company,
    })
  }
}
