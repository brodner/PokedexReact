import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Cardspokemon = ({ id, name, sprites, types }) => {
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
  return (
    <Link
      key={id} to={`/PokemonInfo/${id}`}
      className={`rounded-xl px-5 pb-1 ${backgroundColorTypePokemon[types[0].type.name]} cursor-pointer grid grid-cols-1 items-end hover:shadow-lg`}
    >
      <div className='flex justify-center col-span-1'>
        {
                    id > 472
                      ? <img
                          src={sprites.other['official-artwork'].front_default}
                          alt={name}
                          className=' object-center'
                        />
                      : <img src={`https://img.pokemondb.net/sprites/go/normal/${name}.png`} alt='' className=' object-end mt-3' />
                }
      </div>

      <div className='justify-self-center self-end text-center pb-3 mt-1 col-span-1'>
        <span className='block font-bold text-4xl left-2 text-center text-white'>#{id}</span>
        <h1 className=' text-3xl font-bold capitalize'>{name}</h1>
        <div className='flex flex-wrap gap-1 col-span-1'>
          {
                        types.map(({ type }, index) => <span key={`type${index}`} className='block p-1 px-2 shadow-inner rounded-full bg-white font-extrabold capitalize mt-2 text-'>{type.name}</span>)
                    }
        </div>
      </div>
    </Link>
  )
}

Cardspokemon.propTypes = {
  data: PropTypes.array
}

export default Cardspokemon
