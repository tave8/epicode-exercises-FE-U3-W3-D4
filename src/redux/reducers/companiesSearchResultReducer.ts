import type { ReduxAction as ReduxActionType } from "../../types"

const initialState = {}

const mainReducer = (currState = initialState, action: ReduxActionType) => {
  switch (action.type) {
    default:
      return currState
  }
}

export default mainReducer
