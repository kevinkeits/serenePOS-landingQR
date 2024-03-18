import React from 'react'
import iconNotes from '../assets/Icon/note-text-svgrepo-com.svg'

const Addnotes = () => {
  return (
    <div className='addNotes inline-flex border rounded-lg hover:cursor-pointer py-2 px-2 shadow-md'>
        <img src={iconNotes} className='w-6 h-6 mr-2'/>
        <p className='font-medium text-base'>Add Notes</p>
    </div>
  )
}

export default Addnotes
