import { useEffect, useState } from 'react'
import News from '../../api/news'

const NewsCard = () => {
  const [news, SetNews] = useState([])

  useEffect(() => {
    SetNews(News())
    console.log(news)
    return () => {
    }
  }, [])
  return (
    <>
      {
      news.map(({ ...data }) => (
        <div key={`${btoa(data.url)}`} className='card hover:shadow-lg mt-5'>
          <img src={data.image} alt='' className='w-full h-32 sm:h-48 object-cover' />
          <div className='m-4'>
            <h2 className='font-bold text-base'>{data.title}</h2>
            <span className='text-sm'>{data.shortDescription}</span>
            <span className=' text-opacity-100 text-sm m-1 rounded-md bg-gray-200 p-1 inline-block'>{data.tags}</span>
          </div>
          <div className='badge-card flex justify-between'>
            <svg className='w-4 h-4 inline-block mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>
            <span>{data.date}</span>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default NewsCard
