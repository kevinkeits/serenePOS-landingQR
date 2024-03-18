import React from 'react'

const ProductLabel = () => {
  return (
    <div class="flex flex-row items-center m-2">
      <div class="grow px-2">
          <p class="text-lg font-semibold">Matcha Latte</p>
      </div>
      <div class="inline-flex items-center py-1 pr-2">
          <p class="text-sm font-medium">Rp </p>
          <p id="itemPrice" class="text-sm font-medium pl-1">25000</p>
      </div> 
    </div>   
  )
}

export default ProductLabel
