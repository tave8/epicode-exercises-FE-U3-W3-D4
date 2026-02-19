import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"
import { HeartFill  as HeartFillIcon, Dash as DashIcon } from "react-bootstrap-icons"

const RemoveComp = ({ company }) => {
  const dispatch = useDispatch()

  return (
    <Button
      onClick={() => {
        dispatch({
          type: "REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES",
          payload: company,
        })
      }}
      variant="danger"
    >
      <DashIcon size={20} />
      <HeartFillIcon />
    </Button>
  )
}

export default RemoveComp
