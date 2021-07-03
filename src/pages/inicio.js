import { Link } from 'react-router-dom'
// import img1 from '../images/pokemon-go-11.jpg'
import NewsCard from '../components/NewsCard'
const inicio = () => {
  return (
    <div className='text-gray-600 sm:container sm:mx-auto font-body'>
      <nav className='text-right'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold uppercase p-4 border-gray-200'>
            <Link to='/' className='text-red-500 text-xl font-bold'>Pokedex</Link>
          </h1>
        </div>
      </nav>

      <div />

      <div className='mt-4 grid grid-cols-2  md:grid-cols-3 gap-5 p-5 py-10 shadow-xl rounded-lg'>
        <div className='overflow-hidden rounded-xl shadow-xl'>
          <Link to='/Pokedex' className='bg-emerald-300 px-10 object-cover block py-7 sm:py-10 bg-bgpokebol bg-contain  bg-no-repeat bg-right-bottom'>
            <span className='text-gray-50 text-7x1 font-bold'>Pokedex</span>
          </Link>
        </div>
        <div className='overflow-hidden rounded-xl shadow-xl'>
          <Link to='/regiones' className=' bg-indigo-400 px-10 object-cover block py-7 sm:py-10 bg-bgpokebol bg-contain  bg-no-repeat bg-right-bottom'>
            <span className='text-gray-50 text-7x1 font-bold'>Regiones</span>
          </Link>
        </div>
        <div className='overflow-hidden rounded-xl shadow-xl'>
          <Link to='/items' className=' bg-red-400 px-10 object-cover block py-7 sm:py-10 bg-bgpokebol bg-contain  bg-no-repeat bg-right-bottom'>
            <span className='text-gray-50 text-7x1 font-bold'>Items</span>
          </Link>
        </div>
      </div>
      <div className='mt-8 p-5'>
        <h2 className='text-3xl font-bold text-gray-600'>Noticias Pokemon</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <NewsCard />
        </div>
      </div>
    </div>

  )
}

export default inicio
