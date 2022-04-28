import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Card, ListGroup, Button } from "react-bootstrap"
import { getIdFromUrl} from "../helpers"

// styles
import '../App.css'


function SinglePerson({ person }) {
    const navigate = useNavigate()

    return (
        <>
            <Container>
                {/* show info about character */}
                <Card style={{ width: '50rem'}}  >
                    <ListGroup variant="flush">
                        <Card.Header>{person.name}</Card.Header>
                        <ListGroup.Item>Attributes</ListGroup.Item>     
                        <ListGroup.Item><strong>Gender </strong>{person.gender}</ListGroup.Item>
                        <ListGroup.Item><strong>Birth Year </strong>{person.birth_year}</ListGroup.Item>
                        <ListGroup.Item><strong>Height </strong>{person.height}</ListGroup.Item>
                        <ListGroup.Item><strong>Mass </strong>{person.mass}</ListGroup.Item>
                        <ListGroup.Item><strong>Hair Color </strong>{person.hair_color}</ListGroup.Item>
                        <ListGroup.Item><strong>Skin Color </strong>{person.skin_color}</ListGroup.Item>
                        <ListGroup.Item><strong>Eye Color </strong>{person.eye_color}</ListGroup.Item>     
                                       
                        <ListGroup.Item><strong>Films </strong></ListGroup.Item>

                            {/* Links to films */}
                            {person.films && (
                                person.films.map((person, id) => {
                                    return (
                                        <ListGroup.Item 
                                            key={id} 
                                            value={person} 
                                            as={Link} 
                                            to={`/films/${id+1}`}
                                            > Films {`${getIdFromUrl(person)}`} ≫
                                        </ListGroup.Item>    
                                    )
                                })
                            )} 
                        </ListGroup>

                    <div className="m-3">
                        <Button variant="warning" size="sm" onClick={() => navigate(-1)}>≪ Back</Button>   
                    </div>
                </Card>  

            </Container>
        </>
    )
}

export default SinglePerson