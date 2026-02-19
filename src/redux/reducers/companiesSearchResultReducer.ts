import type { ReduxAction as ReduxActionType } from "../../types"
import { SEARCH_COMPANIES } from "../actions"

const initialState = {
  list: [],
}

const mainReducer = (currState = initialState, action: ReduxActionType) => {
  switch (action.type) {
    case SEARCH_COMPANIES:
      return {
        ...currState,
        list: action.payload
      }
    default:
      return currState
  }
}

export default mainReducer
