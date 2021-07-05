import React, { useState, useEffect } from 'react'
import Buscador from '../components/Buscador'
import Cardspokemon from '../components/cardsPokemon'
import Nav from './Nav'
import imgloadPokemon from '../images/loading.gif'

const Pokedex = () => {
  const [dataPokemon, setDataPokemon] = useState([])
  const [Load, setLoad] = useState(true)
  const [limit, setlimit] = useState([...Array(12).keys()])

  const changeLimit = () => {
    setDataPokemon([])
    setlimit([...limit, limit.length])
  }

  const loadPokemonFromServer = async () => {
    const ConsultdataServer = limit.map(async (id) => {
      const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}`)
      const requestToJson = await request.json()
      return requestToJson
    })
    const data = await Promise.all(ConsultdataServer)
    setDataPokemon(dataPokemon.concat(data))
    setLoad(false)
  }

  useEffect(() => {
    setLoad(true)
    loadPokemonFromServer()
    return () => {
      setLoad(false)
    }
  }, [limit])
  if (!dataPokemon) return false
  return (
    <div className='grid grid-cols-12 font-body text-gray-600'>
      <Nav />
      <main className='col-span-12 px-4 md:px-2 shadow-inner pt-5'>
        <Buscador />
        <div className='mt-10 sm:mt-15 bg-gray-40 pb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-strench'>

          {
            Load
              ? (
                <div className='col-span-12 flex justify-center h-auto items-center'>
                  <div className='px-4'>
                    <div className='h-min w-min border-2 border-gray-200 rounded-lg overflow-hidden animate-pulse'>
                      <img src={imgloadPokemon} alt='' className='leading-relaxed lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center' />
                      <div className='px-6'>
                        <span className='leading-relaxed block font-bold text-4xl left-2 text-center text-gray '>#000</span>
                        <h1 className='leading-relaxed w-full mb-4 h-6  bg-gray-500'> </h1>
                        <div className='flex justify-center'>
                          <p className='leading-relaxed mb-3 mx-auto inline-block p-5 bg-gray-400 rounded-full' />
                          <p className='leading-relaxed mb-3 p-5 inline-block  bg-gray-400 rounded-full' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )
              : (dataPokemon.map(({ id, name, sprites, types }) => (<Cardspokemon key={id} id={id} name={name} sprites={sprites} types={types} />)))
            }
        </div>
        <button className='btn btn-pokemon' onClick={changeLimit}>Obtener otro pokemon</button>
      </main>
    </div>
  )
}

export default Pokedex
