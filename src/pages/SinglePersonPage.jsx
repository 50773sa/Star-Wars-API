import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarWarsAPI from "../services/StarWarsAPI"
import SinglePerson from '../components/SinglePerson'

function SinglePersonPage() {
    const [person, setPerson] = useState([])
    const { id } = useParams()

    const getPerson = async (id) => {
		// get person from StarWarsAPI
		const data = await StarWarsAPI.getSinglePerson(id)
		// update person state
        console.log(data.id)
		setPerson(data)
 	}
     console.log('PERSON', person)

    // get person from api when component i mounted 
    useEffect(() => {
        getPerson(id)
    }, [id])  

    return (
        <div className='singlePerson'>
            {person && (
                <SinglePerson person={person}/>
            )}
        </div>
    )
}

export default SinglePersonPage