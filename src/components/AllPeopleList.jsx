import { ListGroup, Card,Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


function AllPeopleList({ people }) {
        
    return (
        <>
            <h2>People</h2>

            <Container className="cardsContainer" > 
                {people && people.results.map((person, id) => {
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
            
        </>
    )
}

export default AllPeopleList