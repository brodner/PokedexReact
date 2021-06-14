import React from 'react'
import Buscador from '../components/Buscador'

const Pokedex = () => {
    return (
        <div className="grid grid-cols-12 font-body text-gray-600">
            <nav className="text-right  col-span-12 md:flex md:flex-row shadow-lg mb-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold uppercase p-4">
                        <a href="/" className="text-emerald-500 sm:text-red-500"> Pokedex</a>
                    </h1>
                    <div className="px-4 cursor-pointer md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </div>
                </div>
                <ul className="text-sm hidden md:mt-0 md:flex md:flex-row md:items-center">
                    <li className="py-1 md:justify-between">
                        <a href="/#" className="px-4 flex justify-start">
                            <span>Home</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </a>
                    </li>
                    <li className="py-1">
                        <a href="/#" className="px-4 flex justify-start">
                            <span>Regiones</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </a>
                    </li>
                    <li className="py-1">
                        <a href="/#" className="px-4 flex justify-start">
                            <span>Items</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </a>
                    </li>
                </ul>
            </nav>
            <main className="col-span-12 px-4">
                <Buscador />
                <div className="mt-10 sm:mt-20">
                    <div className="bg-gray-40 pb-8 grid grid-cols-2 md:grid-cols-6 gap-5">
                        <div className="rounded-xl px-5 pb-1 bg-yellow-200 relative">
                            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"} alt="Pikachu"
                                className=" object-cover z-20 relative " />
                            <span className="block absolute font-bold text-7xl left-2 text-white top-16 mt-9">#025</span>
                            <div className="justify-self-center text-center pb-3 mt-1">
                                <h1 className=" text-4xl font-bold">Pikachu</h1>
                                <div className="flex flex-wrap gap-1">
                                <span className="block p-1 px-2 shadow-inner rounded-full">Electric</span>
                                <span className="block p-1">Electric</span>
                                <span className="block p-1">Electric</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl px-5 pb-1 bg-yellow-200">
                            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"} alt="Pikachu"
                                className=" object-cover z-20 relative " />
                            <span className="block absolute font-bold text-7xl left-2 text-white top-16 mt-9">#025</span>
                            <div className="justify-self-center text-center pb-3 mt-1">
                                <h1 className=" text-4xl font-bold">Pikachu</h1>
                                <span className="block">Electric</span>
                            </div>
                        </div>
                        <div className="rounded-xl px-5 pb-1 bg-yellow-200">
                            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"} alt="Pikachu"
                                className=" object-cover z-20 relative " />
                            <span className="block absolute font-bold text-7xl left-2 text-white top-16 mt-9">#025</span>
                            <div className="justify-self-center text-center pb-3 mt-1">
                                <h1 className=" text-4xl font-bold">Pikachu</h1>
                                <span className="block">Electric</span>
                            </div>
                        </div>
                        <div className="rounded-xl px-5 pb-1 bg-yellow-200">
                            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"} alt="Pikachu"
                                className=" object-cover z-20 relative " />
                            <span className="block absolute font-bold text-7xl left-2 text-white top-16 mt-9">#025</span>
                            <div className="justify-self-center text-center pb-3 mt-1">
                                <h1 className=" text-4xl font-bold">Pikachu</h1>
                                <span className="block">Electric</span>
                            </div>
                        </div>
                        <div className="rounded-xl px-5 pb-1 bg-yellow-200">
                            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"} alt="Pikachu"
                                className=" object-cover z-20 relative " />
                            <span className="block absolute font-bold text-7xl left-2 text-white top-16 mt-9">#025</span>
                            <div className="justify-self-center text-center pb-3 mt-1">
                                <h1 className=" text-4xl font-bold">Pikachu</h1>
                                <span className="block">Electric</span>
                            </div>
                        </div>
                        <div className="rounded-xl px-5 pb-1 bg-yellow-200">
                            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"} alt="Pikachu"
                                className=" object-cover z-20 relative " />
                            <span className="block absolute font-bold text-7xl left-2 text-white top-16 mt-9">#025</span>
                            <div className="justify-self-center text-center pb-3 mt-1">
                                <h1 className=" text-4xl font-bold">Pikachu</h1>
                                <span className="block">Electric</span>
                            </div>
                        </div>
                        <div className="rounded-xl px-5 pb-1 bg-yellow-200">
                            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"} alt="Pikachu"
                                className=" object-cover z-20 relative " />
                            <span className="block absolute font-bold text-7xl left-2 text-white top-16 mt-9">#025</span>
                            <div className="justify-self-center text-center pb-3 mt-1">
                                <h1 className=" text-4xl font-bold">Pikachu</h1>
                                <span className="block">Electric</span>
                            </div>
                        </div>
                        <div className="rounded-xl px-5 pb-1 bg-yellow-200">
                            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"} alt="Pikachu"
                                className=" object-cover z-20 relative " />
                            <span className="block absolute font-bold text-7xl left-2 text-white top-16 mt-9">#025</span>
                            <div className="justify-self-center text-center pb-3 mt-1">
                                <h1 className=" text-4xl font-bold">Pikachu</h1>
                                <span className="block">Electric</span>
                            </div>
                        </div>
                        <div className="rounded-xl px-5 pb-1 bg-yellow-200">
                            <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"} alt="Pikachu"
                                className=" object-cover z-20 relative " />
                            <span className="block absolute font-bold text-7xl left-2 text-white top-16 mt-9">#025</span>
                            <div className="justify-self-center text-center pb-3 mt-1">
                                <h1 className=" text-4xl font-bold">Pikachu</h1>
                                <span className="block">Electric</span>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Pokedex
