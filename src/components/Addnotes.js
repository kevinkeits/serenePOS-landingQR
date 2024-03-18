import React from 'react'
import iconNotes from '../assets/Icon/note-text-svgrepo-com.svg'

const Addnotes = () => {
  return (
    <div className='addNotes inline-flex border rounded-lg hover:cursor-pointer py-2 shadow-md px-4'>
        <img src={iconNotes} alt='Add Notes' className='w-6 h-6'/>
        <p className='font-medium text-base'>Add Notes</p>
    </div>
  )
}

export default Addnotes
