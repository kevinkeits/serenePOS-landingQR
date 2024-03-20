import React from 'react'

const ProductNotes = () => {
  return (
    <div ClassName="px-2 m-2 py-2">
       <div ClassName="py-2 mx-2">
            <p ClassName="text-base font-semibold">Notes</p>
        </div>
        <div ClassName="bg-white border shadow-md rounded-md py-2 px-3 my-1 mx-2">
            <textarea id="content" name="content" ClassName="w-full h-32 border-gray-600 rounded-md focus:outline-none focus:border-blue-500 resize-none" placeholder="Ex: Add more..."></textarea>
        </div>
    </div>
  )
}

export default ProductNotes
