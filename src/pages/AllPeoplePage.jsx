import { useEffect, useState } from 'react'
import AllPeopleList from '../components/AllPeopleList'
import LoadingSpinner from '../components/LoadingSpinner'
import StarWarsAPI from "../services/StarWarsAPI"
import { Button, Container } from 'react-bootstrap'



function AllPeoplePage() {
    const [people, setPeople] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isError, setIsError] = useState(false)
    const [page, setPage] = useState(1)   
    const totalPage = 9


    // get people from api when component i mounted 
    useEffect(() => {
        const getPeople = async () => {
            setIsLoading(true)

            try {
                // get people from StarWarsAPI
                const data = await StarWarsAPI.getAllPeople(page)

                // fake slow api
                await new Promise(r => setTimeout(r, 1500))

                // update people state
                setPeople(data)

            } catch (err) {
                setIsError(false)
                setError(err)

            } finally {
                setIsLoading(false)
            }	
        }

        getPeople(page)
        
    }, [page]) 

 
    return (
        
        <div className='allPeople'>
            {isLoading && (<LoadingSpinner />)}
			{isError && (<p><strong>ERROR!</strong> Sorry, an error has occured: {error.message}</p>)}

            {people && people.results && !isLoading && (
                <AllPeopleList people={people}/>
            )}  

            {page && (
                <Container className="pageBtns">
                        <Button
                            variant="dark"
                            onClick={() => setPage(value => value -1)}
                            disabled={!people.previous}
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
                            disabled={!people.next}
                            page={page}
                        >
                            Next
                        </Button>
                </Container>
            )}
        </div>  
    )
}

export default AllPeoplePage