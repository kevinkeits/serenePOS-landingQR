import React from 'react'

const Inputqty = () => {
  return (
    <div className='flex gap-1'>
      <button className='bg-blue-600 rounded-lg shadow text-white text-lg font-bold w-8 h-8'>-</button>
      <input type='text' placeholder='0' className='w-20 h-8 border rounded-lg text-center'/>
      <button className='bg-blue-600 rounded-lg text-white text-lg font-bold w-8 h-8'>+</button>
    </div>
  )
}

export default Inputqty
