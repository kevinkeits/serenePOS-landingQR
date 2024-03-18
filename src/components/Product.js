import React from 'react'
import ButtonAdd from '../elements/ButtonAdd'
import Productimage from '../elements/Productimage'

const Product = () => {
  return (
    <div className='productMenu flex mx-2 my-2 bg-white py-2 px-2 border rounded-lg shadow-md'>
      <Productimage/>
      <div className='mx-2 w-full'>
      <p className='text-base font-semibold '>Matcha Latte</p>
      <p className='text-xs'>Ice / Hot</p>
      <p className='text-xs font-medium'>Rp. 28.000</p>
      <div className='text-right'>
      <ButtonAdd/>
      </div>
      </div>     
    </div>
  )
}

export default Product
