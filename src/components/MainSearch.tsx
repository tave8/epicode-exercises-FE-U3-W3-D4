import { Container, Row, Col, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import Job from "./Job"
import { useDispatch, useSelector } from "react-redux"
import { searchCompaniesAction, setSearchCompaniesQueryAction } from "../redux/actions"
import { useState } from "react"

const MainSearch = () => {
  const companiesSearch = useSelector((state) => state.companiesSearch)

  const [query, setQuery] = useState(companiesSearch.query)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    const query = event.target.value
    setQuery(query)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchCompaniesQueryAction(dispatch)(query)
    searchCompaniesAction(dispatch)(query)
  }

  return (
    <Container>
      <Row className="g-2">
        <Col xs={12} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={12}>
          <Link to="/favourite-companies">Favourite Companies</Link>
        </Col>
        <Col xs={12} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={12} className="mx-auto mb-5">
          {companiesSearch.list.map((jobData) => (
            <Job key={jobData._id} company={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
