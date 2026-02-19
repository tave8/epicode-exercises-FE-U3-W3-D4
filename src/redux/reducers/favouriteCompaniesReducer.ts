import type { FavouriteCompanies as FavouriteCompaniesType, ReduxAction as ReduxActionType } from "../../types"
import { ADD_COMPANY_TO_FAVOURITE_COMPANIES, REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES } from "../actions"

const initialState: FavouriteCompaniesType = {
  list: [],
}

const mainReducer = (currState: FavouriteCompaniesType = initialState, action: ReduxActionType): FavouriteCompaniesType => {
  switch (action.type) {
    case ADD_COMPANY_TO_FAVOURITE_COMPANIES:
      return {
        ...currState,
        list: [...currState.list, action.payload],
      }
    case REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES:
      return {
        ...currState,
        list: currState.list.filter((company) => company._id != action.payload!._id),
      }
    default:
      return currState
  }
}

export default mainReducer
