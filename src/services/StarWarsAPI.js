/**
 * Services for communication with server
 */

import axios from "axios"
const BASE_URL = 'https://swapi.dev/api'


/**
 *  Get Films
 */

const getAllFilms = async (page) => {
    const res = await axios.get(`${BASE_URL}/films/?page=${page}`)
    return res.data
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

 const getAllPeople = async (page) => {
    const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
    return res.data
} 

/**
 * Get a single person
 */

 const getSinglePerson = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data
}


// eslint-disable-next-line 
export default {
    getAllFilms,
    getSingleFilm,
    getAllPeople,
    getSinglePerson,
}