import React from 'react'
import { useEffect, useState } from 'react'
import AllPeopleList from '../components/AllPeopleList'
import StarWarsAPI from "../services/StarWarsAPI"


function AllPeoplePage() {
    const [people, setPeople] = useState([])
    const [currentPage, setCurrentPage] = useState(1)   
    const [peoplePerPage, setPeoplePerPage] = useState(9) 
    const [loading, setLoading] = useState(false)

 	const getPeople = async () => {
		// get people from StarWarsAPI
		const data = await StarWarsAPI.getAllPeople()
		// update people state
		setPeople(data)
 	}

    // get people from api when component i mounted 
    useEffect(() => {
        // setLoading(true)
        getPeople()
        // setLoading(false)
    }, []) 

    // number of people per page
    const indexOfLastPerson = currentPage * peoplePerPage
    const indexOfFirstPerson = indexOfLastPerson - peoplePerPage
    const peoplePage = people.slice(indexOfFirstPerson, indexOfLastPerson)
    
    console.log('PEOPLE', peoplePage)
	 
    return (
        <div className='allPeople'>
            <AllPeopleList people={peoplePage}/>
        </div>
    )
}

export default AllPeoplePage