import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MainSearch from "./components/MainSearch"
import CompanySearchResults from "./components/CompanySearchResults"
import FavouriteCompanies from "./components/FavouriteCompanies"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// redux stuff
import { Provider } from "react-redux"
import { store, persistedStore } from "./redux/store/index.ts"
import { PersistGate } from "redux-persist/integration/react"

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainSearch />} />
            <Route path="/favourite-companies" element={<FavouriteCompanies />} />
            <Route path="/:company" element={<CompanySearchResults />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
