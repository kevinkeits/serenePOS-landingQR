import React from 'react'
import Searchicon from '../assets/Icon/search-svgrepo-com.svg'

const Search = () => {
  return (
    <div className=' w-full max-w-md mx-auto py-2 px-2'>
        <div className='w-full flex items-center py-2 px-2 border bg-white border-gray-300 shadow-md rounded-lg focus:ring-gray-300 focus:border-gray-300 focus:ring focus:ring-opacity-20 '>
        <input type='text' placeholder='Cari Disini...' className='pl-2 block w-full border-r-2'/>
        <img src={Searchicon} alt='Search' className='w-6 h-6 mx-2' />
        </div>
      
    </div>
  )
}

export default Search
