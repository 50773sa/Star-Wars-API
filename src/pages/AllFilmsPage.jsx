import { useEffect, useState } from 'react'
import AllFilmsList from '../components/AllFilmsList'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import StarWarsAPI from "../services/StarWarsAPI"



import { Button } from 'react-bootstrap'
import '../App.css'



function AllFilmsPage() {
  	const [films, setFilms] = useState([])
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isError, setIsError] = useState(false)

 	const getFilms = async () => {
		setIsLoading(true)

		try {
			// get films from StarWarsAPI
			const data = await StarWarsAPI.getAllFilms()

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

    // get films from api when component i mounted 
    useEffect(() => {
        getFilms()
    }, []) 


	return (
		<div className='allFilms'>
			{isLoading && (<LoadingSpinner />)}
			{isError && (<p><strong>ERROR!</strong> Sorry, an error has occured: {error.message}</p>)}

            
            {films && !isLoading && (
            	<AllFilmsList films={films}/>
			)}  
			{/* <div className="nav-buttons-wrapper">
				<div className="nav-button">
					<Button variant="light" size="sm" onClick={() => navigate(-1)}>Previos Page</Button>   
				</div>

				<div className="nav-button">
					<Button variant="light" size="sm" onClick={() => navigate(+1)}>Next Page</Button>   
				</div>
            </div> */}
		</div>
	)
}

export default AllFilmsPage