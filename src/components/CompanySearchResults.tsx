import { useEffect, useState } from "react"
import { Container, Row, Col, Badge } from "react-bootstrap"
import Job from "./Job"
import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()

  const favouriteCompanies = useSelector((state) => state.favouriteCompanies)

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company="

  useEffect(() => {
    getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company)
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Link to="/" className="me-2">
            Home
          </Link>
          <span>
            <Link to="/favourite-companies">Favourite Companies</Link>
            {favouriteCompanies.list.length > 0 ? <Badge bg="success">{favouriteCompanies.list.length}</Badge> : ""}
          </span>
        </Col>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} company={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
