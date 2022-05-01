import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Button, Card, Container, ListGroup} from "react-bootstrap"
import { getIdFromUrl } from '../helpers'



function SingleFilm({ film }) {
    const navigate = useNavigate()


    return (
        <>
            <Container className="cardsContainer">
             
                <Card style={{ width: '50vw' }}>
                    <Card variant="flush">
                        <Card.Header> {film.title}</Card.Header>

                        <Card.Body>Attributes:</Card.Body>
                        <Card.Body><strong>Episode </strong>{film.episode_id}</Card.Body>
                        <Card.Body><strong>Director </strong>{film.director}</Card.Body>
                        <Card.Body><strong>Producer </strong>{film.producer}</Card.Body>
                        <Card.Body><strong>Release date </strong>{film.release_date}</Card.Body>

                        <ListGroup.Item><strong>Characters:</strong>
                            {/* Links to characters */}
                            {film.characters && (
                                film.characters.map((character, id) => {
                                    return (
                                            <ListGroup.Item 
                                                key={id} 
                                                value={character} 
                                                as={Link} 
                                                to={`/people/${id+1}`}
                                            > 
                                                Character {`${getIdFromUrl(character)}`} ≫
                                            </ListGroup.Item>    
                                    )
                                })
                            )} 
                        </ListGroup.Item> 
                    </Card>
                  
                    <div className="m-3">
                        <Button variant="dark" onClick={() => navigate(-1)}>≪ Back</Button>   
                    </div>   

                </Card>    
            </Container>
        </>
    )
}

export default SingleFilm