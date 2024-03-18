import React from 'react'
import Header from '../components/Header'
import ProductLabel from '../components/Productlabel'
import ProductVariant from '../components/ProductVariant'
import ProductNotes from '../components/ProductNotes'
import ProductQty from '../components/ProductQty'

const Orderpages = () => {
  return (
    <div className='max-w-md mx-auto h-screen'>
      <Header />
      <ProductLabel />
      <ProductVariant />
      <ProductVariant />
      <ProductVariant />
      <ProductNotes />
      <ProductQty />
      
    </div>
  )
}

export default Orderpages
