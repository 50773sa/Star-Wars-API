import React from 'react'
import { useEffect, useState } from 'react'
import AllPeopleList from '../components/AllPeopleList'
import Pagination from '../components/Pagination'
import StarWarsAPI from "../services/StarWarsAPI"

import '../App.css'

function AllPeoplePage() {
    const [people, setPeople] = useState([])
    const [currentPage, setCurrentPage] = useState(1)   
    const [peoplePerPage] = useState(9) 
    const [loading, setLoading] = useState(false)

 	const getPeople = async () => {
		// get people from StarWarsAPI
		const data = await StarWarsAPI.getAllPeople()
		// update people state
		setPeople(data)
 	}

    // get people from api when component i mounted 
    useEffect(() => {
        getPeople(currentPage)
    }, [currentPage]) 

     // number of cards per page
     const indexOfLastPerson = currentPage * peoplePerPage
     const indexOfFirstPerson = indexOfLastPerson - peoplePerPage
     const peopleOnDisplay = people.slice(indexOfFirstPerson, indexOfLastPerson)

     const paginate = pageNumber => setCurrentPage(pageNumber)
 
    console.log('PEOPLE', peopleOnDisplay)
    console.log(currentPage)
	 
    return (
        
        <div className='allPeople'>
            <AllPeopleList people={peopleOnDisplay}/>
            <Pagination peoplePerPage={peoplePerPage} people={people.length} paginate={paginate} />

        </div>
    )
}

export default AllPeoplePage