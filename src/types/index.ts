export interface FavouriteCompany {
  _id: string
  url: string
  title: string
  company_name: string
  category: string
  job_type: string
  publication_date: string
  candidate_required_location: string
  description: string
}

export interface FavouriteCompanies {
  list: FavouriteCompany[]
}

export type MyReduxActions = "ADD_COMPANY_TO_FAVOURITE_COMPANIES" | "REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES"

export type MyReduxPayload = FavouriteCompany


export interface ReduxAction {
  type: MyReduxActions
  payload: MyReduxPayload
}

export interface MyReduxAppState {
  favouriteCompanies: FavouriteCompanies
}
