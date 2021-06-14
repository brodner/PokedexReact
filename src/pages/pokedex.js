import React from 'react'
import Buscador from '../components/Buscador'
import Nav from './Nav'

const Pokedex = () => {
    return (
        <div className="grid grid-cols-12 font-body text-gray-600">
            <Nav></Nav>
            <main className="col-span-12 px-4 shadow-inner pt-5">
                <Buscador />
                <div className="mt-10 sm:mt-15">
                    <div className="bg-gray-40 pb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                        <div className="rounded-xl px-5 pb-1 bg-yellow-200 relative">
                            <div className="">
                                <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"} alt="Pikachu"
                                    className=" object-center" />
                            </div>
                            <span className="block font-bold text-4xl left-2 text-center text-white">#025</span>
                            <div className="justify-self-center text-center pb-3 mt-1">
                                <h1 className=" text-4xl font-bold">Pikachu</h1>
                                <div className="flex flex-wrap gap-1">
                                    <span className="block p-1 px-2 shadow-inner rounded-full">Electric</span>
                                    <span className="block p-1 px-2">Electric</span>
                                    <span className="block p-1 px-2">Electric</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default Pokedex
