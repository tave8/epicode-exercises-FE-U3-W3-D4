import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import Job from "./Job"
import { useDispatch, useSelector } from "react-redux"
import { searchCompaniesAction } from "../redux/actions"

const MainSearch = () => {
  const [query, setQuery] = useState("")

  const dispatch = useDispatch()

  const companiesSearchResult = useSelector((state) => state.companiesSearchResult)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    searchCompaniesAction(dispatch)({ searchQuery: query })
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
          {companiesSearchResult.list.map((jobData) => (
            <Job key={jobData._id} company={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
