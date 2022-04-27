import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarWarsAPI from "../services/StarWarsAPI"
import SingleFilm from '../components/SingleFilm'


function SingleFilmPage() {
    const [film, setFilm] = useState([])
    const { id } = useParams()

    const getFilm = async (id) => {
		// get film from StarWarsAPI
		const data = await StarWarsAPI.getSingleFilm(id)
		// update film state
		setFilm(data)
 	}
    // console.log('FILM', film)

    // get film from api when component i mounted 
    useEffect(() => {
        getFilm(id)
    }, [id])  

  
  return (
    <div className='singleFilm'>
        {film && (
              <SingleFilm film={film} />
        )}
    </div>
  )
}

export default SingleFilmPage