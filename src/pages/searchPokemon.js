import React, { useState, useEffect } from 'react'
import Buscador from '../components/Buscador'
import Cardspokemon from '../components/cardsPokemon'
import Nav from './Nav'
import { useParams } from 'react-router-dom'

const SearchPokemon = () => {
  const { pokemon } = useParams()
  const [dataPokemon, setDataPokemon] = useState([])
  const [Load, setLoad] = useState(true)
  const [param] = useState(pokemon)

  const loadPokemonFromServer = async (pokemon) => {
    try {
      const serverConsult = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const requestToJson = await serverConsult.json()
      setDataPokemon(dataPokemon.concat(requestToJson))
      setLoad(false)
      console.log(dataPokemon)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadPokemonFromServer(param)
    return () => {
    }
  }, [param])

  return (
    <>
      <div className='grid grid-cols-12 font-body text-gray-600'>
        <Nav />
        <main className='col-span-12 px-4 md:px-2 shadow-inner pt-5'>
          <Buscador />
          <div className='mt-10 sm:mt-15 bg-gray-40 pb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-strench'>

            {
                            Load
                              ? (
                                <div className='p-4 md:w-1/3'>
                                  <div className='h-min w-min border-2 border-gray-200 rounded-lg overflow-hidden'>
                                    <div className='lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center' />
                                    <div className='p-6'>
                                      <h2 className='bg-gray-400 animate-pulse h-4 w-1/4 mb-2'> </h2>
                                      <h1 className='w-1/2 mb-4 h-6 animate-pulse bg-gray-500'> </h1>
                                      <p className='leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400' />
                                      <p className='leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400' />
                                      <p className='leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400' />
                                      <div className='flex items-center flex-wrap '>
                                        <p className='bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0' />
                                        <span className='bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1' />

                                      </div>
                                    </div>
                                  </div>
                                </div>
                                )
                              : (dataPokemon.map(({ id, name, sprites, types }) => (<Cardspokemon key={id} id={id} name={name} sprites={sprites} types={types} />)))
                        }

            {/* <button className="btn btn-pokemon" onClick={changeLimit}>Obtener otro pokemon</button> */}
          </div>
        </main>
      </div>
    </>
  )
}

export default SearchPokemon
