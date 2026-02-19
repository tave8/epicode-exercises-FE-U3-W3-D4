// import { combineReducers, configureStore } from "@reduxjs/toolkit"
// import favouriteCompaniesReducer from "../reducers/favouriteCompaniesReducer.ts"
// import companiesSearchReducer from "../reducers/companiesSearchReducer.ts"
// // import localStorage from "redux-persist/lib/storage"

// // const persistConfig = {
// //   storage: localStorage,
// //   key: "root",
// // }

// const bigReducer = combineReducers({
//   favouriteCompanies: favouriteCompaniesReducer,
//   companiesSearch: companiesSearchReducer,
// })

// const store = configureStore({
//   reducer: bigReducer,
// })

// export default store


// WITH REDUX PERSIST - NOT COMPLETED
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import favouriteCompaniesReducer from "../reducers/favouriteCompaniesReducer.ts"
import companiesSearchReducer from "../reducers/companiesSearchReducer.ts"
import localStorage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

const persistConfig = {
  storage: localStorage,
  key: "root",
  whitelist: ["favouriteCompanies"]
}

const bigReducer = combineReducers({
  favouriteCompanies: favouriteCompaniesReducer,
  companiesSearch: companiesSearchReducer,
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
        serializableCheck: false
    })
  }
})

const persistedStore = persistStore(store)

export { store, persistedStore }