import { isCompanyInFavourites } from "../../assets/js/helpers"

//***** ACTIONS: CONSTANTS
// FAVOURITE COMPANIES
export const ADD_COMPANY_TO_FAVOURITE_COMPANIES = "ADD_COMPANY_TO_FAVOURITE_COMPANIES"
export const REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES = "REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES"
// SEARCH COMPANIES/JOBS
export const SET_COMPANIES_SEARCH_QUERY = "SET_COMPANIES_SEARCH_QUERY"
export const SEARCH_COMPANIES = "SEARCH_COMPANIES"

//***** ACTIONS: FUNCTIONS

// FAVOURITE COMPANIES
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

// SEARCH COMPANIES/JOBS
export const setSearchCompaniesQueryAction = (dispatch) => {
  return (query) => {
    dispatch({
      type: SET_COMPANIES_SEARCH_QUERY,
      payload: query,
    })
  }
}

export const searchCompaniesAction = (dispatch) => {
  return async (searchQuery) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="
    try {
      const response = await fetch(baseEndpoint + searchQuery + "&limit=20")
      if (response.ok) {
        const { data: companies } = await response.json()
        dispatch({
          type: SEARCH_COMPANIES,
          payload: companies,
        })
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
