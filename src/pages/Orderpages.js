import React, { useState, useEffect } from 'react'
import ProductLabel from '../components/Productlabel'
import ProductVariant from '../components/ProductVariant'
import ProductNotes from '../components/ProductNotes'
import ProductQty from '../components/ProductQty'
import Header from '../components/Header'
import Cartpages from './Cartpages'
import Homepages from './Homepages'

const Orderpages = () => {
  const [showProductPages, setShowProductPages] = useState(false);
  const [showOrderPages, setShowOrderPages] = useState(true);
  const [showCartPages, setShowCartPages] = useState(false);

  const backtoHome = () => {
    setShowProductPages(true)
    setShowOrderPages(false)
    setShowCartPages(false)
  }

  const AddToCart = () => {
    setShowOrderPages(false)
    setShowCartPages(true)
  }

  return (
    <div className='max-w-md mx-auto h-screen'>
     {showOrderPages && (
      <div>
        <Header backtoHome={backtoHome} label={'Home'} />
        <ProductLabel />
        <ProductVariant />
        <ProductVariant />
        <ProductNotes />
        <ProductQty addtocart={AddToCart} />
      </div>
  )}
  {showProductPages && (<Homepages  />)}
  {showCartPages && (<Cartpages />)}
  </div>
  )
}
export default Orderpages
