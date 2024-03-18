import React from 'react'
import Header from '../components/Header'
import ProductLabel from '../components/Productlabel'
import ProductVariant from '../components/ProductVariant'
import ProductNotes from '../components/ProductNotes'
import ProductQty from '../components/ProductQty'
import ButtonAddtoCart from '../components/BtnAddtoCart'

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
      <ButtonAddtoCart />
    </div>
  )
}

export default Orderpages
