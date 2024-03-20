import React from 'react'

const ProductLabel = ({ProductPrice}) => {
  return (
    <div className="flex flex-row items-center m-2">
      <div className="grow px-2">
          <p className="text-lg font-semibold">Matcha Latte</p>
      </div>
      <div className="inline-flex items-center py-1 pr-2">
          <p className="text-sm font-medium">Rp </p>
          <p id="itemPrice" className="text-sm font-medium pl-1">{ProductPrice}</p>
      </div> 
    </div>   
  )
}

export default ProductLabel
