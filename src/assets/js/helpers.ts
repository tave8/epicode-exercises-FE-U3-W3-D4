/**
 * Checks if a company exists:
 * usage:
 *  isCompanyInFavourites({ favouriteCompanies })(company)
 *
 * favouriteCompanies must be the same "slice" of the redux store, so:
 *  reduxStore: {
 *      favouriteCompanies: {
 *          ...
 *      }
 *  }
 *
 */
export const isCompanyInFavourites = ({ favouriteCompanies }) => {
  return (targetCompany) => {
    return favouriteCompanies.list.some((company) => company._id == targetCompany._id)
  }
}


