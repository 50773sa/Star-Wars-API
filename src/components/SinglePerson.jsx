import React, { useEffect } from 'react'
import { Container } from "react-bootstrap"
import { ListGroup, Card, Button } from "react-bootstrap"
import { getIdFromUrl} from "../helpers"
import { Link, NavLink, useNavigate } from 'react-router-dom'


import '../App.css'

function SinglePerson({ person, id }) {
    const navigate = useNavigate()
  

    return (
        <>
            <Container>
        
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
                                       
                        <ListGroup.Item>Links</ListGroup.Item>
                        <ListGroup.Item><strong>Films </strong>{person.films}</ListGroup.Item>
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