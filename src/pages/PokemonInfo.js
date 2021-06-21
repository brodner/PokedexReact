import React, {useState, useEffect} from 'react';
import Nav from './Nav'
import {useParams} from "react-router-dom";

const backgroundColorTypePokemon = {
    ghost: "bg-violet-400",
    dark: "bg-gray-500",
    electric: "bg-yellow-200",
    normal: "bg-yellow-50",
    fire: "bg-red-200",
    psychic: "bg-violet-200",
    flying: "bg-blue-100",
    steel: "bg-gray-400",
    poison: "bg-indigo-200",
    dragon: "bg-pink-400",
    water: "bg-blue-200",
    ice: "bg-blue-300",
    rock: "bg-gray-300",
    fighting: "bg-red-400",
    grass: "bg-emerald-300",
    bug: "bg-emerald-200",
    ground: "bg-yellow-500",
    fairy: "bg-pink-200"
}
const PokemonInfo = (props) => {
    const {pokemon} = useParams();
    const [dataPokemon, setDataPokemon] = useState({})
    const [Load, setLoad] = useState(true)
    const [param, setParam] = useState(pokemon)

    const loadPokemonFromServer = async (pokemon) => {
        try {
            const basciPokemonInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            const basciPokemonInfoToJson = await basciPokemonInfo.json()
            const pokemonSpeciesinfo = await fetch(basciPokemonInfoToJson.species.url)
            const pokemonSpeciesinfoToJson = await pokemonSpeciesinfo.json()
            setDataPokemon({basciPokemonInfoToJson,pokemonSpeciesinfoToJson})
            setLoad(false)
            console.log(dataPokemon);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        loadPokemonFromServer(param)
        return() => {}
    }, [param])

    return (
        <div className='font-body text-gray-700'>
            <Nav></Nav>
            {
                
            }
            {
            Load ? (
                <div className="p-4 md:w-1/3">
                    <div className="h-min w-min border-2 border-gray-200 rounded-lg overflow-hidden">
                        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                        <div className="p-6">
                            <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"> </h2>
                            <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"> </h1>
                            <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                            <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                            <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                            <div className="flex items-center flex-wrap ">
                                <p className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></p>
                                <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>

                            </div>
                        </div>
                    </div>
                </div>
             ) : (
                <div className={
                    `grid grid-cols-1 md:mx-15 pt-4 shadow-inner ${
                        backgroundColorTypePokemon[dataPokemon.basciPokemonInfoToJson.types[0].type.name]
                    } `
                }>
                    <div className="col-span-1 flex flex-col items-center">
                        {
                        dataPokemon.basciPokemonInfoToJson.id > 472 ? <img src={
                                dataPokemon.basciPokemonInfoToJson.sprites.other["official-artwork"].front_default
                            }
                            alt={
                                dataPokemon.basciPokemonInfoToJson.name
                            }
                            className=" object-cover w-max"/> : <img src={
                                `https://img.pokemondb.net/sprites/go/normal/${
                                    dataPokemon.basciPokemonInfoToJson.name
                                }.png`
                            }
                            alt=""
                            className=" object-center mt-3 w-max"/>
                        }
                     </div>
                    <div className="bg-white col-span-1 md:mx-16 border shadow-lg rounded-3xl pt-5">
                        <h1 className='font-bold text-4xl px-5 py-3 text-center uppercase '>
                            {
                            dataPokemon.basciPokemonInfoToJson.name
                        }</h1>
                        <div className="flex flex-wrap gap-1 col-span-1 justify-center">
                            {
                            dataPokemon.basciPokemonInfoToJson.types.map(({
                                type
                            }, index) => <span key={
                                    `type${index}`
                                }
                                className={
                                    `block p-1 px-2 shadow-inner rounded-full bg-white font-extrabold capitalize mt-2 ${
                                        backgroundColorTypePokemon[type.name]
                                    }`
                            }>
                                {
                                type.name
                            }</span>)
                        } </div>
                        <div className="grid grid-cols-3 gap-2 px-4 mt-4">
                            <div className="flex flex-col gap-4 border-2 rounded-lg border-gray-200 border-opacity-50 p-8 col-span-3 md:col-span-1">
                                <h1 className="text-center text-sm">Estadisticas</h1>
                                {
                                dataPokemon.basciPokemonInfoToJson.stats.map((data) => (
                                    <div>
                                        <div className="bg-white rounded-lg w-72 shadow block p-4 m-auto">
                                            {
                                            data.stat.name
                                        }
                                            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                                                <div className="h-full text-center text-xs text-white bg-red-500 rounded-full w-2/4 w-">
                                                    {
                                                    data.base_stat
                                                }%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            } </div>
                            <div className="flex flex-wrap gap-40 px-8 justify-center border-2 rounded-lg border-gray-200 border-opacity-50 p-8  col-span-3 md:col-span-1">
                                <div className="text-sm text-center border-b-2 border-red-500">
                                    <span className='block'>No.</span>
                                    <span className='block'>
                                        {
                                        dataPokemon.basciPokemonInfoToJson.id
                                    }</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 px-8 justify-center border-2 rounded-lg border-gray-200 border-opacity-50 p-8  col-span-3 md:col-span-1">
                                <h1 className="text-center text-sm col-span-1">Evoluciones</h1>
                                <div className="text-sm text-center border-b-2 border-red-500 col-span-1">
                                    <span className='block'>No.</span>
                                    <span className='block'>
                                        {
                                        dataPokemon.basciPokemonInfoToJson.id
                                    }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }</div>
    )
}

export default PokemonInfo