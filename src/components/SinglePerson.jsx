import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Container, ListGroup } from "react-bootstrap"
import { getIdFromUrl} from "../helpers"



function SinglePerson({ person }) {
    const navigate = useNavigate()

    return (
        <>
            <Container className="cardsContainer">
                {/* show info about character */}
                <Card style={{ width: '50rem'}}  >
                    <Card variant="flush">
                        <Card.Header>{person.name}</Card.Header>
                        <Card.Body>Attributes:</Card.Body>     
                        <Card.Body><strong>Gender </strong>{person.gender}</Card.Body>
                        <Card.Body><strong>Birth Year </strong>{person.birth_year}</Card.Body>
                        <Card.Body><strong>Height </strong>{person.height}</Card.Body>
                        <Card.Body><strong>Mass </strong>{person.mass}</Card.Body>
                        <Card.Body><strong>Hair Color </strong>{person.hair_color}</Card.Body>
                        <Card.Body><strong>Skin Color </strong>{person.skin_color}</Card.Body>
                        <Card.Body><strong>Eye Color </strong>{person.eye_color}</Card.Body>     
                                       
                        <Card.Body><strong>Films: </strong>
                            {/* Links to films */}
                            {person.films && (
                                person.films.map((person, id) => {
                                    return (
                                        <ListGroup.Item 
                                            key={id} 
                                            value={person} 
                                            as={Link} 
                                            to={`/films/${id+1}`}
                                        > 
                                            Films {`${getIdFromUrl(person)}`} ≫
                                        </ListGroup.Item>    
                                    )
                                })
                            )} 
                        </Card.Body>
                    </Card>

                    <div className="m-3">
                        <Button variant="dark" onClick={() => navigate(-1)}>≪ Back</Button>   
                    </div>
                </Card>  

            </Container>
        </>
    )
}

export default SinglePerson