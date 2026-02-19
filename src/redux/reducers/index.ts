import type { MyReduxAppState as MyReduxAppStateType, ReduxAction as ReduxActionType } from "../../types/index"

const initialState: MyReduxAppStateType = {
  favouriteCompanies: {
    list: [],
  },
}

//

// dispatch -> action creator -> reducer
// request -> middleware -> endpoint function

const mainReducer = (currState: MyReduxAppStateType = initialState, action: ReduxActionType): MyReduxAppStateType => {
  switch (action.type) {
    case "ADD_COMPANY_TO_FAVOURITE_COMPANIES":
      return {
        ...currState,
        favouriteCompanies: {
          ...currState.favouriteCompanies,
          list: [...currState.favouriteCompanies.list, action.payload],
        },
      }
    case "REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES":
      return {
        ...currState,
        favouriteCompanies: {
          ...currState.favouriteCompanies,
          list: currState.favouriteCompanies.list.filter((company) => company._id != action.payload!._id),
        },
      }
    default:
      return currState
  }
}

export default mainReducer
