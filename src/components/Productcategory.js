import React from 'react'
import Product from './Product'

const Productcategory = () => {
  return (
    <div className='my-2'>
        <div className='categoryMenu max-w-md mx-auto'>
            <p className='font-bold py-2 px-2'> Non Coffee</p>
            <Product/>
            <Product/>
        </div>
      
    </div>
  )
}

export default Productcategory
