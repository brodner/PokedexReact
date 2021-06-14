import React from 'react'
import Nav from './Nav'

const PokemonInfo = () => {
    return (
        <div className='font-body text-gray-700'>
            <Nav></Nav>
            <div className="grid md:grid-cols-2 px-4 pt-4 shadow-inner">
                <div className="col-span-1 flex flex-col">
                    <h1 className='font-bold text-4xl px-5 py-3 rounded-lg bg-white text-center uppercase md:mb-6 shadow-md'>Charizard</h1>
                    <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'} alt="" className='object-cover relative z-10 sm:top-5' />
                </div>
                <div className="col-span-1 mx-16 border shadow-lg rounded-xl pt-5 relative -top-28 sm:top-0">
                    <div className="flex flex-wrap gap-40 px-8 justify-center">
                        <div className="text-4xl text-center">
                            <span className='block'>No.</span>
                            <span className='block'>006</span>
                        </div>
                        <div className="text-4xl text-center">
                            <span className='block'>LEVEL</span>
                            <span className='block'>006</span>
                        </div>
                        <div className="text-4xl text-center">
                            <span className='block'>TYPE</span>
                            <span className='block'>006</span>
                        </div>
                        <div className="text-4xl text-center">
                            <span className='block'>No.</span>
                            <span className='block'>006</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonInfo
