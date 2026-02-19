import { configureStore } from "@reduxjs/toolkit"
import favouriteCompaniesReducer from "../reducers/favouriteCompaniesReducer.ts"
import companiesSearchReducer from "../reducers/companiesSearchReducer.ts"

const store = configureStore({
    reducer: {
        favouriteCompanies: favouriteCompaniesReducer,
        companiesSearch: companiesSearchReducer
    }
})


export default store 