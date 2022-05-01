import { useEffect, useState } from 'react'
import AllFilmsList from '../components/AllFilmsList'
import LoadingSpinner from '../components/LoadingSpinner'
import StarWarsAPI from "../services/StarWarsAPI"
import { Button, Container } from 'react-bootstrap'



function AllFilmsPage() {
  	const [films, setFilms] = useState([])
	const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isError, setIsError] = useState(false)
	const [page, setPage] = useState(1)   
    const totalPage = 1


    // get films from api when component i mounted 
    useEffect(() => {
        const getFilms = async () => {
            setIsLoading(true)

            try {
                // get films from StarWarsAPI
                const data = await StarWarsAPI.getAllFilms(page)

                // fake slow api
                await new Promise(r => setTimeout(r, 1500))

                // update films state
                setFilms(data)

            } catch (err) {
                setIsError(false)
                setError(err)

            } finally {
                setIsLoading(false)
            }	
 	    }

        getFilms(page)

    }, [page]) 
console.log(page)

	return (
		<div className='allFilms'>
			{isLoading && (<LoadingSpinner />)}
			{isError && (<p><strong>ERROR!</strong> Sorry, an error has occured: {error.message}</p>)}

            {films && films.results && !isLoading && (
            	<AllFilmsList films={films}/>
			)}  
			
			{page && (
                <Container className="pageBtns">
                        <Button
                            variant="dark"
                            onClick={() => setPage(value => value -1)}
                            disabled={!films.previous}
                            page={page}
                        >
                            Previous
                        </Button>

                        <div className='pageNumber'>
                            <p>{page} / {totalPage}</p>
                        </div>
       
                        <Button
                            variant="dark"
                            onClick={() => setPage(value => value +1)}
                            disabled={!films.next}
                            page={page}
                        >
                            Next
                        </Button>
                </Container>
            )}
		</div>
	)
}

export default AllFilmsPage