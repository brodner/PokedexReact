import React from 'react'

const Buscador = () => {
    return (
        <div>
            <div className=" bg-white flex justify-center p-3 shadow-sm border border-gray-200 rounded-full">
                <button className="outline-none focus:outline-none ">
                    <svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
                <input type="search" name="" id="" placeholder="Buscar Pokemon, Id, Nombre " x-model="q"
                    className="w-full pl-4 text-sm text-gray-800 outline-none focus:outline-none bg-transparent" />
                <div className="select">
                    <select name="" id="" x-model="image_type" className="text-sm text-gray-800 outline-none focus:outline-none bg-transparent">
                        <option value="all" defaultValue>All</option>
                        <option value="photo">Photo</option>
                        <option value="illustration">Illustration</option>
                        <option value="vector">Vector</option>
                    </select>
                </div>
            </div >
        </div>
    )
}

export default Buscador
