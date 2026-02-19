import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { HeartFill as HeartFillIcon, Dash as DashIcon } from "react-bootstrap-icons"
import { removeCompanyFromFavouriteCompaniesAction } from "../../redux/actions"

const RemoveComp = ({ company }) => {
  const dispatch = useDispatch()

  return (
    <Button
      onClick={() => {
        dispatch(removeCompanyFromFavouriteCompaniesAction(company))
      }}
      variant="danger"
    >
      <DashIcon size={20} />
      <HeartFillIcon />
    </Button>
  )
}

export default RemoveComp
