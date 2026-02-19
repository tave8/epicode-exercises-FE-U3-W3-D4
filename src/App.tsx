import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MainSearch from "./components/MainSearch"
import CompanySearchResults from "./components/CompanySearchResults"
import FavouriteCompanies from "./components/FavouriteCompanies"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// redux stuff
import { Provider } from "react-redux"
import store from "./redux/store/index.ts"


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/favourite-companies" element={<FavouriteCompanies />} />
          <Route path="/:company" element={<CompanySearchResults />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
