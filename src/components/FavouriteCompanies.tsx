import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

// redux stuff
import { useSelector } from "react-redux"

import FavouriteCompanyActions from "./favourite-companies/Actions"

const FavouriteCompanies = () => {
  const favouriteCompanies = useSelector((state) => state.favouriteCompanies)

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Link to="/">Home</Link>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h2>Favourite Companies</h2>
        </Col>
      </Row>
      <Row className="mt-3 gap-3">
        {/* exist favourite companies */}
        {favouriteCompanies.list.length > 0 &&
          favouriteCompanies.list.map((company, i) => {
            return (
              <Row key={`${company._id}-${i}`} className="border p-2">
                <Col xs={12}>
                  <p>
                    <Link to={`/${company.company_name}`}>
                      {company.company_name} - {company.title}
                    </Link>
                  </p>
                </Col>
                <Col xs={12}>
                  <FavouriteCompanyActions company={company} favouriteCompanies={favouriteCompanies} showOptions={{ add: false }} />
                </Col>
              </Row>
            )
          })}

        {/* no favourite companies */}
        {favouriteCompanies.list.length == 0 && <p>No favourite companies yet</p>}
      </Row>
    </Container>
  )
}

export default FavouriteCompanies
