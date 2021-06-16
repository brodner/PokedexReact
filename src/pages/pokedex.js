import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Buscador from '../components/Buscador'
import Nav from './Nav'

const Pokedex = () => {
    const [listPokemon, setListPokemon] = useState([])
    const [dataPokemon, setDataPokemon] = useState([])
    const [Load, setLoad] = useState(true)
    const [limit, setlimit] = useState(12)

    const changeLimit = () => {
        setlimit(limit + 1)
    }
    const huntDataPokemon = async (url) => {
        const result = await fetch(url)
        const json = await result.json()
        console.log(json);
    }
    useEffect(() => {
        const result = async () => {
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
            const json = await result.json()
            setListPokemon(json.results)
            setLoad(false)
        };
        result()
    }, [limit])
    return (
        <div className="grid grid-cols-12 font-body text-gray-600">
            <Nav></Nav>
            <main className="col-span-12 px-4 shadow-inner pt-5">
                <Buscador/>
                <div className="mt-10 sm:mt-15">

                    <div className="bg-gray-40 pb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                        {
                        Load ? (
                            <h2>cargando datos...</h2>
                        ) : listPokemon.map((pokemon, index) => {
                            return (
                                <div key={index}
                                    className="rounded-xl px-5 pb-1 bg-yellow-200 relative max-w-md">
                                    <div className="">
                                        <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"}
                                            alt="Pikachu"
                                            className=" object-center"/>
                                    </div>
                                    <span className="block font-bold text-4xl left-2 text-center text-white">#025</span>
                                    <div className="justify-self-center text-center pb-3 mt-1">
                                        <h1 className=" text-3xl font-bold">
                                            {
                                            pokemon.name
                                        }</h1>
                                        <div className="flex flex-wrap gap-1">
                                            <span className="block p-1 px-2 shadow-inner rounded-full">Electric</span>
                                            <span className="block p-1 px-2">Electric</span>
                                            <span className="block p-1 px-2">Electric</span>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    } </div>
                    <button className="btn btn-pokemon"
                        onClick={changeLimit}>traer pokemones</button>
                </div>

            </main>
        </div>

    )
}

export default Pokedex
