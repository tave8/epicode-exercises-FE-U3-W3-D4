import { configureStore } from "@reduxjs/toolkit"
import favouriteCompaniesReducer from "../reducers/favouriteCompaniesReducer.ts"

const store = configureStore({
    reducer: {
        favouriteCompanies: favouriteCompaniesReducer
    }
})


export default store 