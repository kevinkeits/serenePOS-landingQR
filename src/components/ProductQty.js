import React from 'react'

const ProductQty = () => {
  return (
    <div class="px-2 m-2 border-t-2 py-4">
        <div class="flex gap-2">
            <p class="font-medium text-base grow">Item Qty</p>
            <button id="decrementQty" class="bg-blue-600 rounded-lg shadow text-white text-lg font-bold w-8 h-8">-</button>
            <input id="qtyInput" type="text" value="1" class="w-20 border rounded-lg text-center"></input>
            <button id="incrementQty" class="bg-blue-600 rounded-lg text-white text-lg font-bold w-8 h-8">+</button>
        </div>  
    </div>
  )
}

export default ProductQty
