import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import IconTypePokemon from '../components/IconTypePokemon'
import imgloadPokemon from '../images/loading.gif'

const backgroundColorTypePokemon = {
  ghost: 'bg-violet-400',
  dark: 'bg-gray-500',
  electric: 'bg-yellow-200',
  normal: 'bg-yellow-50',
  fire: 'bg-red-200',
  psychic: 'bg-violet-200',
  flying: 'bg-blue-100',
  steel: 'bg-gray-400',
  poison: 'bg-indigo-200',
  dragon: 'bg-pink-400',
  water: 'bg-blue-200',
  ice: 'bg-blue-300',
  rock: 'bg-gray-300',
  fighting: 'bg-red-400',
  grass: 'bg-emerald-300',
  bug: 'bg-emerald-200',
  ground: 'bg-yellow-500',
  fairy: 'bg-pink-200'
}
const PokemonInfo = props => {
  const { pokemon } = useParams()
  const [dataPokemon, setDataPokemon] = useState({})
  const [Load, setLoad] = useState(true)
  const [param] = useState(pokemon)
  const loadPokemonFromServer = async pokemon => {
    try {
      const textToLowercase = pokemon.toLowerCase()
      const basciPokemonInfo = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${textToLowercase}`
      )
      const basicPokemonInfoToJson = await basciPokemonInfo.json()
      const pokemonSpeciesinfo = await fetch(basicPokemonInfoToJson.species.url)
      const pokemonSpeciesinfoToJson = await pokemonSpeciesinfo.json()
      const pokemonEvolutions = await fetch(pokemonSpeciesinfoToJson.evolution_chain.url)
      const pokemonEvolutionsToJson = await pokemonEvolutions.json()
      const descriptionGames = await pokemonSpeciesinfoToJson.flavor_text_entries.filter(({ language: { name: lang } }) => lang === 'es')
      const nameJap = await pokemonSpeciesinfoToJson.names.filter(({ language: { name: lang } }) => lang === 'ja')
      const genus = await pokemonSpeciesinfoToJson.genera.filter(({ language: { name } }) => name === 'es')
      const { id, name, sprites, stats, types: [{ type: { name: type1 } }], types } = basicPokemonInfoToJson
      // eslint-disable-next-line camelcase
      const { flavor_text_entries } = pokemonSpeciesinfoToJson
      const { chain } = pokemonEvolutionsToJson
      const evoChain = await Evolutions(chain)
      console.log({ pokemonSpeciesinfoToJson, nameJap, chain, evoChain, genus })
      setDataPokemon({ id, name, nameJap, sprites, stats, type1, types, flavor_text_entries, evoChain, descriptionGames, genus })
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadPokemonFromServer(param)
    return () => {}
  }, [param])

  const Evolutions = (chain) => {
    const evoChain = []
    const evoData = chain
    const stractIdToUrl = (url) => {
      const urlToArray = url.split('/')
      return urlToArray[6]
    }
    evoChain.push({
      species_name: evoData.species.name,
      min_level: !evoData ? 1 : evoData.min_level,
      item: !evoData ? null : evoData.item,
      id: parseInt(stractIdToUrl(evoData.species.url))
    })
    evoData.evolves_to.map(({ evolution_details: [{ min_level: minLevel }], species, evolution_details: [{ trigger }], evolution_details: [{ item }], evolves_to: evolvesTo }) => {
      evolvesTo.map(({ evolution_details: [{ min_level: minLevel }], species, evolution_details: [{ trigger }], evolution_details: [{ item }] }) => (
        evoChain.push({
          species_name: species.name,
          min_level: minLevel,
          trigger_name: trigger.name,
          item: item,
          id: parseInt(stractIdToUrl(species.url))
        })
      ))
      return evoChain.push({
        species_name: species.name,
        min_level: minLevel,
        trigger_name: trigger.name,
        item: item,
        id: parseInt(stractIdToUrl(species.url))
      })
    })
    return evoChain.sort((x, y) => x.id - y.id)
  }
  return (
    <div className='font-body text-gray-700'>
      <Nav />
      {Load
        ? (
          <div className='px-4'>
            <div className='h-min w-min border-2 border-gray-200 rounded-lg animate-pulse'>
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
          )
        : (
          <div
            className={`grid 
                 grid-cols-1 
                 md:mx-15 
                 pt-4 
                 shadow-inner 
                 ${backgroundColorTypePokemon[dataPokemon.type1]}`}
          >
            <div className='col-span-1 flex flex-col items-center'>
              <span className='text-5xl sm:text-7xl text-gray-600 font-extrabold text-center'>{dataPokemon.nameJap[0].name}</span>
              {dataPokemon.id > 472
                ? (
                  <img
                    src={
                  dataPokemon.sprites.other[
                    'official-artwork'
                  ].front_default
                }
                    alt={dataPokemon.name}
                    className=' object-cover w-max z-20'
                    style={{ with: '236px' }}
                  />
                  )
                : (
                  <img
                    src={`https://img.pokemondb.net/sprites/go/normal/${dataPokemon.name}.png`}
                    alt=''
                    className=' object-center mt-3 w-max z-20'
                    style={{ with: '236px' }}
                  />
                  )}
            </div>
            <div className='bg-white col-span-1 md:mx-16 border shadow-lg rounded-3xl pt-5'>
              <h1 className='font-bold text-4xl px-5 py-3 text-center uppercase '>
                {dataPokemon.name}
              </h1>
              <div className='grid justify-items-center'>
                <div key={`${dataPokemon.type1}index`} className='flex-row justify-items-center'>
                  {dataPokemon.types.map(
                    ({ type }, index) => {
                      return (
                        <IconTypePokemon key={`${type.name + index}`} typepokemon={type.name} />
                      )
                    }
                  )}
                </div>
              </div>
              <div className='flex flex-col justify-between md:grid md:grid-cols-3 gap-2 px-4 mt-4 order-1'>
                <div className='border-2 rounded-lg border-gray-200 border-opacity-50 p-8 order-2 md:order-1 md:col-span-1'>
                  <h1 className='text-xl font-bold'>Estadisticas Basicas</h1>
                  <div className='flex flex-wrap gap-3'>
                    {dataPokemon.stats.map(data => (
                      <div key={data.stat.name} className='bg-white rounded-lg shadow block p-2 flex-grow'>
                        {data.stat.name}: {data.base_stat}
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-5 order-1 md:order-2 md:col-span-2'>
                  <div className='border-2 rounded-lg border-gray-200 border-opacity-50 p-8'>
                    <div className='text-sm'>
                      <div className='grid items-center'>
                        <h1 className='text-xl font-bold'>{dataPokemon.genus[0].genus}</h1>
                        <span className='block'>
                          Numero de Pokedex: {dataPokemon.id}
                        </span>
                        <p className='text-sm text-gray-700 py-2'>
                          {
                  dataPokemon.descriptionGames[0].flavor_text
               }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='border-2 rounded-lg border-gray-200 border-opacity-50 p-8'>
                    <h1 className='text-xl font-bold col-span-1 mb-4'>Evoluciones</h1>
                    <div className='text-sm text-cente col-span-1 grid justify-center pb-6'>
                      <div className='grid grid-cols-2 gap-4'>
                        {
                          dataPokemon.evoChain.map(({ id, species_name: name, min_level: minlevel }, index) => (
                            <div key={`${index}`} className='first:col-span-2 grid items-strench'>
                              <div className='flex flex-col items-center'>
                                {
                                (typeof minlevel === 'undefined' || typeof minlevel === typeof null) ? '' : <span className='font-semibold text-base p-1 flex justify-center gap-1'> {`Nivel ${minlevel} `} <svg className='w-4 h-4 inline-block' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' /></svg></span>
                                }
                                <img className='flex-grow' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt='' width='100px' />
                                <span className='font-semibold text-base text-center capitalize'>{name} #{id}</span>
                                {index === 0 && <svg className='w-6 h-6 animate-bounce' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 13l-7 7-7-7m14-8l-7 7-7-7' /></svg>}
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
    </div>
  )
}

export default PokemonInfo
