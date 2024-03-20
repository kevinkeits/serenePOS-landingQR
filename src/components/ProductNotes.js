import React from 'react'

const ProductNotes = () => {
  return (
    <div className="px-2 m-2 py-2">
       <div className="py-2 mx-2">
            <p className="text-base font-semibold">Notes</p>
        </div>
        <div className="bg-white border shadow-md rounded-md py-2 px-3 my-1 mx-2">
            <textarea id="content" name="content" className="w-full h-32 border-gray-600 rounded-md focus:outline-none focus:border-blue-500 resize-none" placeholder="Ex: Add more..."></textarea>
        </div>
    </div>
  )
}

export default ProductNotes
