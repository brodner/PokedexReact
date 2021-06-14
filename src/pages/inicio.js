import React from 'react'
import {Link} from "react-router-dom";

const inicio = () => {
    return (
        <div className="text-gray-600 sm:container sm:mx-auto font-body">
            <nav className="text-right">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold uppercase p-4 border-gray-200">
                        <Link to="/" className="text-red-500 text-xl font-bold">Pokedex</Link>
                    </h1>
                </div>
            </nav>

            <div>
                
            </div>

            <div className="mt-4 grid grid-cols-2  md:grid-cols-3 gap-5 p-5 py-10 shadow-xl rounded-lg">
                <div className="overflow-hidden rounded-xl shadow-xl">
                    <Link to="/pokedex" className="bg-emerald-300 px-10 object-cover block py-7 sm:py-10 bg-bgpokebol bg-contain  bg-no-repeat bg-right-bottom">
                        <span className="text-gray-50 text-7x1 font-bold">Pokedex</span>
                    </Link>
                </div>
                <div className="overflow-hidden rounded-xl shadow-xl">
                    <Link to="/regiones" className=" bg-indigo-400 px-10 object-cover block py-7 sm:py-10 bg-bgpokebol bg-contain  bg-no-repeat bg-right-bottom">
                        <span className="text-gray-50 text-7x1 font-bold">Regiones</span>
                    </Link>
                </div>
                <div className="overflow-hidden rounded-xl shadow-xl">
                    <Link to="/items" className=" bg-red-400 px-10 object-cover block py-7 sm:py-10 bg-bgpokebol bg-contain  bg-no-repeat bg-right-bottom">
                        <span className="text-gray-50 text-7x1 font-bold">Items</span>
                    </Link>
                </div>
            </div>
            <div className="mt-8 p-5">
                <h2 className="text-3xl font-bold text-gray-600">Noticias Pokemon</h2>
                <div className="card hover:shadow-lg mt-5">
                    {/* <img src={''} alt="" className="w-full h-32 sm:h-48 object-cover" /> */}
                    <div className="m-4">
                        <span className="font-bold">5 Bean chilli stew</span>
                        <span className="block text-gray-500 text-sm">Recipe by Brodner</span>
                    </div>
                    <div className="badge-card flex justify-between">
                        <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>25 mins</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default inicio