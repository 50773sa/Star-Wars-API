import { useEffect, useState } from 'react'
import AllPeopleList from '../components/AllPeopleList'
import LoadingSpinner from '../components/LoadingSpinner'
import Pagination from '../components/Pagination'
import StarWarsAPI from "../services/StarWarsAPI"

import '../App.css'

function AllPeoplePage() {
    const [people, setPeople] = useState([])
    const [currentPage, setCurrentPage] = useState(1)   
    const [peoplePerPage] = useState(9) 
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isError, setIsError] = useState(false)

 	const getPeople = async () => {
        setIsLoading(true)

        try {
            // get people from StarWarsAPI
            const data = await StarWarsAPI.getAllPeople()

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

    // get people from api when component i mounted 
    useEffect(() => {
        getPeople()
    }, []) 

     // number of cards per page
     const indexOfLastPerson = currentPage * peoplePerPage
     const indexOfFirstPerson = indexOfLastPerson - peoplePerPage
     const peopleOnDisplay = people.slice(indexOfFirstPerson, indexOfLastPerson)

     const paginate = pageNumber => setCurrentPage(pageNumber)
 
    console.log('PEOPLE', peopleOnDisplay)
    console.log(currentPage)
	 
    return (
        
        <div className='allPeople'>
            {isLoading && (<LoadingSpinner />)}
			{isError && (<p><strong>ERROR!</strong> Sorry, an error has occured: {error.message}</p>)}

            
            {people && !isLoading && (
                <div>
                    <AllPeopleList people={peopleOnDisplay}/>
                    <Pagination peoplePerPage={peoplePerPage} people={people.length} paginate={paginate} />
                </div>
            )}  
        </div>
    )
}

export default AllPeoplePage