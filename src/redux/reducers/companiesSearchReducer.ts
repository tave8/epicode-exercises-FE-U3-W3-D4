import type { ReduxAction as ReduxActionType } from "../../types"
import { SEARCH_COMPANIES, SET_COMPANIES_SEARCH_IS_ERROR, SET_COMPANIES_SEARCH_IS_LOADING, SET_COMPANIES_SEARCH_QUERY } from "../actions"

const initialState = {
  list: [],
  query: "",
  isLoading: false,
  isError: false,
}

const mainReducer = (currState = initialState, action: ReduxActionType) => {
  switch (action.type) {
    case SET_COMPANIES_SEARCH_QUERY:
      return {
        ...currState,
        query: action.payload,
      }
    case SET_COMPANIES_SEARCH_IS_LOADING:
      return {
        ...currState,
        isLoading: action.payload,
      }
    case SET_COMPANIES_SEARCH_IS_ERROR:
      return {
        ...currState,
        isError: action.payload,
      }
    case SEARCH_COMPANIES:
      return {
        ...currState,
        list: action.payload,
      }

    default:
      return currState
  }
}

export default mainReducer
