import React, { useState, useEffect } from 'react'
import ProductLabel from '../components/Productlabel'
import ProductVariant from '../components/ProductVariant'
import ProductNotes from '../components/ProductNotes'
import ProductQty from '../components/ProductQty'
import Header from '../components/Header'

const Orderpages = () => {
  const [showProductPages, setShowProductPages] = useState(true);
  const [showOrderPages, setShowOrderPages] = useState(false);
  const [showCartPages, setShowCartPages] = useState(false);

  const backtoHome = () => {
    setShowProductPages(true)
    setShowOrderPages(false)
    setShowCartPages(false)
  }

  return (
    <div className='max-w-md mx-auto h-screen'>
      <Header backtoHome={backtoHome} itemName={'Matcha Latte'} itemDescription={'Hot/Cold'} itemPrice={'Rp 28,000'} />
      <ProductLabel />
      <ProductVariant />
      <ProductVariant />
      <ProductNotes />
      <ProductQty />
    </div>
  )
}

export default Orderpages
