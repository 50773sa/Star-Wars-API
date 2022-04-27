import React from 'react'
import { Container } from "react-bootstrap"
import { ListGroup, Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import StarWarsAPI from "../services/StarWarsAPI"
import { getIdFromUrl } from '../helpers'

import index from '../helpers'

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
                                    <a href='{character}' key={id} value={film} to={`/people/${character.id}`} >
                                        <ListGroup.Item>Character {id} </ListGroup.Item>    
                                    </a> 
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