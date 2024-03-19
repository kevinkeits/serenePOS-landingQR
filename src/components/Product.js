import React from 'react'
import ButtonAdd from '../elements/ButtonAdd'
import Productimage from '../elements/Productimage'

const Product = ({ custmOrder, itemName, itemDescription, itemPrice }) => {
  return (
    <div className='productMenu flex mx-2 my-2 bg-white py-2 px-2 border rounded-lg shadow-md'>
      <Productimage/>
      <div className='mx-2 w-full'>
      <p className='text-base font-semibold '>{itemName}</p>
      <p className='text-xs'>{itemDescription}</p>
      <p className='text-xs font-medium'>{itemPrice}</p>
      <div className='text-right'>
      {/* <ButtonAdd/> */}
      <div>
        <button onClick={custmOrder} className='OpenCustomOrder bg-blue-700 text-sm text-white font-semibold py-1 px-2 rounded-lg shadow-md w-20 h-7'>Add</button>
      </div>
      </div>
      </div>     
    </div>
  )
}

export default Product
