import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { getIdFromUrl } from '../helpers'
import { Container } from "react-bootstrap"
import { Button, Card, ListGroup} from "react-bootstrap"

// styles
import '../App.css'


function SingleFilm({ film }) {
    const navigate = useNavigate()

   console.log('FILM CHARACTER', film.characters)


    return (
        <>
            <Container>
             
                <Card style={{ width: '50rem'}}>
                    <ListGroup variant="flush">
                        <Card.Header> {film.title}</Card.Header>

                        <ListGroup.Item>Attributes</ListGroup.Item>
                        <ListGroup.Item><strong>Episode </strong>{film.episode_id}</ListGroup.Item>
                        <ListGroup.Item><strong>Director </strong>{film.director}</ListGroup.Item>
                        <ListGroup.Item><strong>Producer </strong>{film.producer}</ListGroup.Item>
                        <ListGroup.Item><strong>Release date </strong>{film.release_date}</ListGroup.Item>

                        <ListGroup.Item>Links:</ListGroup.Item>    
                        <ListGroup.Item><strong>Characters</strong></ListGroup.Item> 

                        {/* Links to characters */}
                        {film .characters && 
                            film.characters.map((character, id) => {
                                return (
                                    <ListGroup.Item key={id} value={film} as={Link} to={`/people/${id}`}>Character {`${getIdFromUrl(film)}`} ≫</ListGroup.Item>    
                                    )
                        })} 
                          
                    </ListGroup>
                  
                    <div className="m-3">
                        <Button variant="warning" size="sm" onClick={() => navigate(-1)}>≪ Back</Button>   
                    </div>   
                </Card>    
            </Container>
        </>
    )
}

export default SingleFilm