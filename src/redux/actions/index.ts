import { isCompanyInFavourites } from "../../assets/js/helpers"

//***** ACTIONS: CONSTANTS
// FAVOURITE COMPANIES
export const ADD_COMPANY_TO_FAVOURITE_COMPANIES = "ADD_COMPANY_TO_FAVOURITE_COMPANIES"
export const REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES = "REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES"
// SEARCH COMPANIES/JOBS
export const SET_COMPANIES_SEARCH_QUERY = "SET_COMPANIES_SEARCH_QUERY"
export const SET_COMPANIES_SEARCH_IS_LOADING = "SET_COMPANIES_SEARCH_IS_LOADING"
export const SET_COMPANIES_SEARCH_IS_ERROR = "SET_COMPANIES_SEARCH_IS_ERROR"
export const SEARCH_COMPANIES = "SEARCH_COMPANIES"

//***** ACTIONS: FUNCTIONS

// come adattare questo pattern usando il getState

// FAVOURITE COMPANIES
export const addCompanyToFavouriteCompaniesAction = (company) => {
  return (dispatch, getState) => {
    const favouriteCompanies = getState().favouriteCompanies
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

export const removeCompanyFromFavouriteCompaniesAction = (company) => {
  return (dispatch, getState) => {
    dispatch({
      type: REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES,
      payload: company,
    })
  }
}

// SEARCH COMPANIES/JOBS
export const setSearchCompaniesQueryAction = (query) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_COMPANIES_SEARCH_QUERY,
      payload: query,
    })
  }
}

export const setCompaniesSearchIsLoadingAction = (dispatch) => {
  return (isLoading) => {
    dispatch({
      type: SET_COMPANIES_SEARCH_IS_LOADING,
      payload: isLoading,
    })
  }
}

export const setCompaniesSearchIsErrorAction = (dispatch) => {
  return (isError) => {
    dispatch({
      type: SET_COMPANIES_SEARCH_IS_ERROR,
      payload: isError,
    })
  }
}

export const searchCompaniesAction = () => {
  return async (dispatch, getState) => {
    const searchQuery = getState().companiesSearch.query
    if (searchQuery.trim() == "") {
      alert("Search cannot be empty.")
      return
    }
    dispatch({
      type: SET_COMPANIES_SEARCH_IS_LOADING,
      payload: true,
    })
    dispatch({
      type: SET_COMPANIES_SEARCH_IS_ERROR,
      payload: false,
    })

    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="
    try {
      const response = await fetch(baseEndpoint + searchQuery + "&limit=20")
      if (response.ok) {
        const { data: companies } = await response.json()
        dispatch({
          type: SEARCH_COMPANIES,
          payload: companies,
        })
        dispatch({
          type: SET_COMPANIES_SEARCH_IS_LOADING,
          payload: false,
        })
        dispatch({
          type: SET_COMPANIES_SEARCH_IS_ERROR,
          payload: false,
        })
      } else {
        dispatch({
          type: SET_COMPANIES_SEARCH_IS_LOADING,
          payload: false,
        })
        dispatch({
          type: SET_COMPANIES_SEARCH_IS_ERROR,
          payload: true,
        })
        alert("Error fetching results")
      }
    } catch (error) {
      dispatch({
        type: SET_COMPANIES_SEARCH_IS_LOADING,
        payload: false,
      })
      dispatch({
        type: SET_COMPANIES_SEARCH_IS_ERROR,
        payload: true,
      })
      console.log(error)
    }
  }
}
