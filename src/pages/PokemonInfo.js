/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { useParams, useHistory } from 'react-router-dom'
import iconbug from '../images/icon/bug.svg'
import icondark from '../images/icon/dark.svg'
import icondragon from '../images/icon/dragon.svg'
import iconelectric from '../images/icon/electric.svg'
import iconfairy from '../images/icon/fairy.svg'
import iconfighting from '../images/icon/fighting.svg'
import iconfire from '../images/icon/fire.svg'
import iconflying from '../images/icon/flying.svg'
import iconghost from '../images/icon/ghost.svg'
import icongrass from '../images/icon/grass.svg'
import iconground from '../images/icon/ground.svg'
import iconice from '../images/icon/ice.svg'
import iconnormal from '../images/icon/normal.svg'
import iconpoison from '../images/icon/poison.svg'
import iconpsychic from '../images/icon/psychic.svg'
import iconrock from '../images/icon/rock.svg'
import iconsteel from '../images/icon/steel.svg'
import iconwater from '../images/icon/water.svg'

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
  const history = useHistory()
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
    console.log()
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

  const SearchPokemon = (text) => {
    console.log(text)
    // history.push({ path: `/PokemonInfo/${text}` })
    // history.replace(`/PokemonInfo/${text}`)
  }
  return (
    <div className='font-body text-gray-700'>
      <Nav />
      {Load
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
                    ({ type }, index) =>
                      (
                        <div key={`${type.name + index}`} className={`icon ${type.name} inline-block mx-2`}>
                          <img src={iconbug} className={`${type.name !== 'bug' && 'hidden'}`} alt='' />
                          <img src={icondark} className={`${type.name !== 'dark' && 'hidden'}`} alt='' />
                          <img src={icondragon} className={`${type.name !== 'dragon' && 'hidden'}`} alt='' />
                          <img src={iconelectric} className={`${type.name !== 'electric' && 'hidden'}`} alt='' />
                          <img src={iconfairy} className={`${type.name !== 'fairy' && 'hidden'}`} alt='' />
                          <img src={iconfighting} className={`${type.name !== 'fighting' && 'hidden'}`} alt='' />
                          <img src={iconfire} className={`${type.name !== 'fire' && 'hidden'}`} alt='' />
                          <img src={iconflying} className={`${type.name !== 'flying' && 'hidden'}`} alt='' />
                          <img src={iconghost} className={`${type.name !== 'ghost' && 'hidden'}`} alt='' />
                          <img src={icongrass} className={`${type.name !== 'grass' && 'hidden'}`} alt='' />
                          <img src={iconground} className={`${type.name !== 'ground' && 'hidden'}`} alt='' />
                          <img src={iconice} className={`${type.name !== 'ice' && 'hidden'}`} alt='' />
                          <img src={iconnormal} className={`${type.name !== 'normal' && 'hidden'}`} alt='' />
                          <img src={iconpoison} className={`${type.name !== 'poison' && 'hidden'}`} alt='' />
                          <img src={iconpsychic} className={`${type.name !== 'psychic' && 'hidden'}`} alt='' />
                          <img src={iconrock} className={`${type.name !== 'rock' && 'hidden'}`} alt='' />
                          <img src={iconsteel} className={`${type.name !== 'steel' && 'hidden'}`} alt='' />
                          <img src={iconwater} className={`${type.name !== 'water' && 'hidden'}`} alt='' />
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className='grid grid-cols-3 gap-2 px-4 mt-4'>
                <div className='flex flex-col gap-4 border-2 rounded-lg border-gray-200 border-opacity-50 p-8 col-span-3 md:col-span-1'>
                  <h1 className='text-xl font-bold'>Estadisticas</h1>
                  {dataPokemon.stats.map(data => (
                    <div key={data.stat.name}>
                      <div className='bg-white rounded-lg w-72 shadow block p-4 m-auto'>
                        {data.stat.name}
                        <div className='w-full h-4 bg-gray-400 rounded-full mt-3'>
                          <div className='h-full text-center text-xs text-white bg-red-500 rounded-full w-2/4 w-'>
                            {data.base_stat}%
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex flex-col gap-5 border-2 rounded-lg border-gray-200 border-opacity-50 p-2 col-span-3 md:col-span-2'>
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
                    <div className='text-sm text-center border-b-2 border-red-500 col-span-1 grid justify-center pb-6'>
                      <div className='flex flex-row justify-items-stretch'>
                        {
                          dataPokemon.evoChain.map(({ id, name, min_level: minlevel }, index) => (
                            <div key={`${index}`} className='card'>
                              <span className=' font-semibold text-base text-center'>#{id}</span>
                              <div className='flex items-center'>
                                {
                                (typeof minlevel === 'undefined' || typeof minlevel === typeof null) ? '' : <span className='font-semibold text-base p-1'> {`Nivel ${minlevel} =>`} </span>
                                }
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt='' width='100px' />
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
