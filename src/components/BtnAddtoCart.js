import React from 'react'

const ButtonAddtoCart = () => {
  return (
    <div class="bg-blue-600 rounded-lg py-1 my-2 hover:cursor-pointer shadow-md">
        <div class="bg-blue-600 rounded-lg my-2 hover:cursor-pointer flex items-start justify-center gap-2">
            <p class="text-center text-white text-lg">Add To Cart -</p>
            <p id="totalValue" class="text-center text-white text-lg">Rp. 25.000</p>
        </div>
    </div>
  )
}

export default ButtonAddtoCart
