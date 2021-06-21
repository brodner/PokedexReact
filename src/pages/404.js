import React from 'react'
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div class="flex items-center justify-center h-screen bg-indigo-200">

            <div class="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 grid grid-cols-1">
                <div>
                    <h1 className="text-9xl text-yellow-300 font-semibold text-center">404</h1>
                    <p className="text-2xl text-white font-semibold text-center">Un snorlax salvaje ha bloqueado tu camino</p>
                </div>
                <Link to="/" className="text-center bg-yellow-300 mt-5 px-5 py-3 text-sm shadow-sm font-medium tracking-wider border text-yellow-600 rounded-full hover:shadow-lg hover:bg-yellow-400">Regresar</Link>
            </div>

        </div>
    )
}

export default Error404