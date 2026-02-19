import { configureStore } from "@reduxjs/toolkit"
import favouriteCompaniesReducer from "../reducers/favouriteCompaniesReducer.ts"
import companiesSearchResultReducer from "../reducers/companiesSearchResultReducer.ts"
// import type { FavouriteCompanies as FavouriteCompaniesType } from "../../types/index.ts"

// type ReducerType = {
//    favouriteCompanies: FavouriteCompanies 
// }

// type StoreType = {
//     reducer: ReducerType
// }

const store = configureStore({
    reducer: {
        favouriteCompanies: favouriteCompaniesReducer,
        companiesSearchResult: companiesSearchResultReducer
    }
})


export default store 