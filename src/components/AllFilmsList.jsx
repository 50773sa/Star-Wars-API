import { Container } from "react-bootstrap"
import { ListGroup, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../App.css'

function AllFilmsList({ films }) {

    return (
        <>
            <h2>Films</h2>

            <Container className="cardsContainer">
                {films && films.results.map((film, id) => {
                    return (
                        <Card style={{ width: '18rem' }} key={id} value={film}>
                            <ListGroup variant="flush">
                                <Card.Header>{film.title}</Card.Header>
                                <ListGroup.Item><strong>Episode </strong>{film.episode_id}</ListGroup.Item>
                                <ListGroup.Item><strong>Released </strong>{film.release_date}</ListGroup.Item>
                                <ListGroup.Item>{film.characters.length}<strong> Characters</strong></ListGroup.Item>

                                <div className="m-3">
                                    <Button 
                                        variant="dark" 
                                        size="sm" 
                                        as={Link} 
                                        to={`/films/${id+1}`}
                                        >
                                        Read More
                                    </Button>   
                                </div>
                            </ListGroup>
                        </Card> 
                    )
                })}
            </Container> 
        </>
    )
}

export default AllFilmsList