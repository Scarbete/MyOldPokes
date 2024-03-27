import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const PokemonCard = ({ pokemon }) => {
    const [ pokemonInfo, setPokemonInfo ] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(pokemon.url)
                .then(res => res.json())
                .then(data => setPokemonInfo(data))
        }, 1000)
    }, [])

    if (!pokemonInfo) return <div className='loading'></div>

    return (
        <Link to={`/PokeInfo/${pokemon?.name}`}>
            <div className='pokemonCard'>
                <div className='pokemonName'>{pokemon?.name}</div>
                <img src={pokemonInfo?.sprites?.other?.dream_world?.front_default} alt={pokemon?.name}/>
                {/*<img src={pokemonInfo?.sprites?.other?.home?.front_default} alt={pokemon?.name}/>*/}
            </div>
        </Link>
    )
}