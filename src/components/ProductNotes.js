import React from 'react'

const ProductNotes = () => {
  return (
    <div class="px-2 m-2">
       <div class="py-2 mx-2">
            <p class="text-base font-semibold">Notes</p>
        </div>
        <div class="bg-white border shadow-md rounded-md py-2 px-3 my-1 mx-2">
            <textarea id="content" name="content" class="w-full h-32 border-gray-600 rounded-md focus:outline-none focus:border-blue-500 resize-none" placeholder="Ex: Add more..."></textarea>
        </div>
    </div>
  )
}

export default ProductNotes
