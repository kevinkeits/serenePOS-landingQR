import React from 'react'
import Productimage from '../elements/Productimage'

const Product = ({ customOrder, itemName, itemDescription, itemPrice }) => {
  return (
    <div className='productMenu flex mx-2 my-2 bg-white px-2 border rounded-lg shadow-md'>
      <Productimage/>
      <div className='mx-2 w-full'>
        <p className='text-base font-semibold '>{itemName}</p>
        <p className='text-xs'>{itemDescription}</p>
        <p className='text-md font-medium'>{itemPrice}</p>
        <div className='text-right'>
          <div className='py-1'>
            <button onClick={customOrder} className='bg-blue-700 text-sm text-white font-semibold py-1 px-2 rounded-lg shadow-md w-20'>Add</button>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default Product
