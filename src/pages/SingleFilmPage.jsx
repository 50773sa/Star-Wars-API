import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleFilm from '../components/SingleFilm'
import LoadingSpinner from '../components/LoadingSpinner'
import StarWarsAPI from "../services/StarWarsAPI"


function SingleFilmPage() {
    const [film, setFilm] = useState([])
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isError, setIsError] = useState(false)

    const getFilm = async (id) => {
        setIsLoading(true)

        try {
            // get film from StarWarsAPI
            const data = await StarWarsAPI.getSingleFilm(id)

            // fake slow api
            await new Promise(r => setTimeout(r, 1500))

            // update film state
            setFilm(data)

            // reset any previos error
            setIsError(false)
            setError(null)

        } catch (err) {
            setIsError(false)
            setError(err)

        } finally {
            setIsLoading(false)
        } 
 	}

    // get film from api when component is mounted 
    useEffect(() => {
        getFilm(id)
    }, [id])  

  
    return (
        <div className='singleFilm'>

            {isLoading && (<LoadingSpinner />)}
			{isError && (<p><strong>ERROR!</strong> Sorry, an error has occured: {error.message}</p>)}

            {film && !isLoading && (
                <SingleFilm film={film} />
            )}
        </div>
    )
}

export default SingleFilmPage