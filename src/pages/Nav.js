import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [visible, setVisibe] = useState('hidden')
  const handleClick = () => {
    visible === 'hidden' ? setVisibe('block') : setVisibe('hidden')
  }
  return (
    <>
      <nav className='text-right md:flex md:flex-row '>
        <div className='flex justify-end items-center ml-5'>
          <h1 className='font-bold uppercase p-4'>
            <NavLink exact to='/' className='text-emerald-500 sm:text-red-500'>
              {' '}
              Pokedex
            </NavLink>
          </h1>

          <button
            className='px-4 cursor-pointer md:hidden'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
        <ul
          className={`ext-sm ${visible} md:mt-0 md:flex md:flex-row md:items-center`}
        >
          <li className='py-1 md:justify-between'>
            <NavLink
              exact
              to='/'
              className='px-4 flex justify-start'
              activeClassName='text-emerald-500'
            >
              <span>Home</span>
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </NavLink>
          </li>
          <li className='py-1'>
            <NavLink
              exact
              to='/Pokedex'
              className='px-4 flex justify-start'
              activeClassName='text-emerald-500'
            >
              <span>Regiones</span>
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </NavLink>
          </li>
          <li className='py-1'>
            <NavLink
              exact
              to='/PokemonInfo'
              className='px-4 flex justify-start'
              activeClassName='text-emerald-500'
            >
              <span>Items</span>
              <svg
                className='w-5 h-5 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
