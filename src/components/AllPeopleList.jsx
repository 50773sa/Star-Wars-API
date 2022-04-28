import { Container } from "react-bootstrap"
import { ListGroup, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Pagination from "./Pagination"

import '../App.css'

function AllPeopleList({ people }) {
    const navigate = useNavigate()
        
    return (
        <>
            <h2>People</h2>

            <Container>
                {people.map((person, id) => {
                    return (
                        <Card style={{ width: '18rem' }} key={id} value={person} className="row-3 col-3" >
                            <ListGroup variant="flush">
                                <Card.Header>{person.name}</Card.Header>
                                <ListGroup.Item><strong>Gender </strong>{person.gender}</ListGroup.Item>
                                <ListGroup.Item><strong>Born </strong>{person.birth_year}</ListGroup.Item>
                                <ListGroup.Item><strong>In </strong>{person.films.length} films</ListGroup.Item>

                                <div className="m-3">
                                    <Button variant="dark" size="sm" as={Link} to={`/people/${id+1}`}>Read More</Button>   
                                </div>
                            </ListGroup>                            
                        </Card> 
                    )
                })}
            </Container> 

            {/* <div className="d-flex justify-content-between align-items-center mt-4">
                        <div className="col-3">
                            <Button variant="warning" size="sm" onClick={() => navigate(-1)} disabled={!people.length}>Previos Page</Button>   
                         </div>

                        <div>
                            <p>Page {1}/{1}</p>
                        </div>

                        <div className="col-3">
                            <Button variant="warning" size="sm" onClick={() => navigate(+1)} disabled={!people.length} >Next Page</Button>   
                        </div>
                    </div> */}
        </>
    )
}

export default AllPeopleList