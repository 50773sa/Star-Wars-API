import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarWarsAPI from "../services/StarWarsAPI"
import SinglePerson from '../components/SinglePerson'

function SinglePersonPage() {
    const [person, setPerson] = useState([])
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isError, setIsError] = useState(false)

    const getPerson = async (id) => {
        setIsLoading(true)

        try {
            // get person from StarWarsAPI
            const data = await StarWarsAPI.getSinglePerson(id)

            // fake slow api
            await new Promise(r => setTimeout(r, 1500))

            // update person state
            setPerson(data)

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
     console.log('PERSON', person)

    // get person from api when component i mounted 
    useEffect(() => {
        getPerson(id)
    }, [id])
    
    return (
        <div>
            {isLoading && (<p>Loading...</p>)}
			{isError && (<p><strong>ERROR!</strong> Sorry, an error has occured: {error.message}</p>)}

            {person && !isLoading && (
                <SinglePerson person={person}/>
            )}
        </div>
    )
}

export default SinglePersonPage