import React from 'react'

const ProductLabel = ({ProductPrice}) => {
  return (
    <div ClassName="flex flex-row items-center m-2">
      <div ClassName="grow px-2">
          <p ClassName="text-lg font-semibold">Matcha Latte</p>
      </div>
      <div ClassName="inline-flex items-center py-1 pr-2">
          <p ClassName="text-sm font-medium">Rp </p>
          <p id="itemPrice" ClassName="text-sm font-medium pl-1">{ProductPrice}</p>
      </div> 
    </div>   
  )
}

export default ProductLabel
