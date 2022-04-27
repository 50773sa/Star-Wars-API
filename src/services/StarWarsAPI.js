/**
 * Services for communication with server
 */

import axios from "axios"
const BASE_URL = 'https://swapi.dev/api'


/**
 *  Get Films
 */

const getAllFilms = async () => {
    const res = await axios.get(`${BASE_URL}/films`)
    return res.data.results
}

/**
 * Get a single film
 */

 const getSingleFilm = async (id) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`)
    return res.data   
} 

/**
 *  Get People
 */

 const getAllPeople = async () => {
    const res = await axios.get(`${BASE_URL}/people`)
    return res.data.results
}

/**
 * Get a single person
 */

 const getSinglePerson = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data
}



export default {
    getAllFilms,
    getSingleFilm,
    getAllPeople,
    getSinglePerson,

}