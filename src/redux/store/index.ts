import { configureStore } from "@reduxjs/toolkit"
import favouriteCompaniesReducer from "../reducers/favouriteCompaniesReducer.ts"
import companiesSearchResultReducer from "../reducers/companiesSearchResultReducer.ts"

const store = configureStore({
    reducer: {
        favouriteCompanies: favouriteCompaniesReducer,
        companiesSearchResult: companiesSearchResultReducer
    }
})


export default store 