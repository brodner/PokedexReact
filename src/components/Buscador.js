import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
const Buscador = () => {
    const [text, setText] = useState("")
    const history = useHistory()
    const textSearchPokemon = e => {
        setText(e.target.value)
        console.log(e.target.value);
    }
    const SearchPokemon = e => {
        e.preventDefault()
        history.push({path: `/PokemonInfo/${text}`})
        history.replace(`/PokemonInfo/${text}`)
    }
    return (
        <form onSubmit={SearchPokemon}>
            <div className=" bg-white flex justify-center p-3 shadow-sm border border-gray-200 rounded-full">
                <button className="outline-none focus:outline-none ">
                    <svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                <input type="search" name="" id="" placeholder="Buscar Pokemon, Id, Nombre " x-model="q" className="w-full pl-4 text-sm text-gray-800 outline-none focus:outline-none bg-transparent"
                    onChange={textSearchPokemon}
                    value={text}/>
            </div>
        </form>
    )
}

export default Buscador
