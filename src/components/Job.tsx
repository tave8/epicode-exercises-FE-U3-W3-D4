import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

// redux stuff
import { useSelector } from "react-redux"

import FavouriteCompanyActions from "./favourite-companies/Actions"

const Job = ({ company }) => {
  const favouriteCompanies = useSelector((state) => state.favouriteCompanies)

  return (
    <>
      <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
        <Col xs={3}>
          <Link to={`/${company.company_name}`}>{company.company_name}</Link>
        </Col>
        <Col xs={9}>
          <a href={company.url} target="_blank" rel="noreferrer">
            {company.title}
          </a>
        </Col>
      </Row>
      <Row className="mx-0 p-1" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
        <Col className="mt">
          <FavouriteCompanyActions company={company} favouriteCompanies={favouriteCompanies} showOptions={{ dependsIfCompanyInFavourites: true }} />
        </Col>
      </Row>
    </>
  )
}

export default Job
