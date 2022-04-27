import React from 'react'
import { useEffect, useState } from 'react'
import AllFilmsList from '../components/AllFilmsList'
import { useNavigate } from "react-router-dom"
import StarWarsAPI from "../services/StarWarsAPI"


import { Button } from 'react-bootstrap'
import '../App.css'



function AllFilmsPage() {
  	const [films, setFilms] = useState([])
	const [page, setPage] = useState('')

	const navigate = useNavigate()


 	const getFilms = async () => {
		// get films from StarWarsAPI
		const data = await StarWarsAPI.getAllFilms()
		// update films state
		setFilms(data)
 	}

    // get films from api when component i mounted 
    useEffect(() => {
        getFilms()
    }, []) 


	return (
		<div className='allFilms'>
            <AllFilmsList films={films}/>
			
			<div className="d-flex justify-content-between align-items-center mt-3">
				<div className="col-3">
					<Button variant="warning" size="sm" onClick={() => navigate(-1)}>Previos Page</Button>   
				</div>

				<div>
					<p>Page {1}/{1}</p>
				</div>

				<div className="col-3">
					<Button variant="warning" size="sm" onClick={() => navigate(+1)}>Next Page</Button>   
				</div>
            </div>
		</div>
	)
}

export default AllFilmsPage