import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "../reducers/index.ts"

const store = configureStore({
    reducer: mainReducer
})


export default store 