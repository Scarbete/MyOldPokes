import { requester } from '../requester'
import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2'

export const fetchPoke = async ({ limit, offset }) => {
    try {
        const { data } = await requester.get(`/pokemon?limit=${limit}&offset=${offset}`)
        return data
    }
    catch (error) {console.log(error)}
}

export const getPokemonId = async ( id ) => {
    try {
        const { data } = await requester.get(`/pokemon/${id}`)
        return data
    }
    catch (error) {console.log(error)}
}

export const fetchPokemonsByNumber = async ( number ) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/pokemon/${number}`)
        return data
    }
    catch (error) {console.log(error)}
}