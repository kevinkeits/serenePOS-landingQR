import React, { useState, useEffect } from 'react'

import Title from '../components/Title'
import Search from '../components/Search'
import Orderpages from './Orderpages'
import Cartpages from './Cartpages'
import Product from '../components/Product'



const Homepages = () => {
  const [showProductPages, setShowProductPages] = useState(true);
  const [showOrderPages, setShowOrderPages] = useState(false);
  const [showCartPages, setShowCartPages] = useState(false);

  const openPages = () => {
    setShowOrderPages(true)
    setShowProductPages(false)
  }

  const closePages = () => {
    setShowOrderPages(false)
    setShowProductPages(true)
  }

  return (
    <div className='max-w-md mx-auto h-screen'>
    {showProductPages && (
     <div>
        <Title/>
        <Search/>
        <div className='my-2'>
          <div className='categoryMenu max-w-md mx-auto'>
              <p className='font-bold py-2 px-2'> Non Coffee <button onClick={openPages} className='OpenCustomOrder bg-blue-700 text-sm text-white font-semibold py-1 px-2 rounded-lg shadow-md w-20 h-7'>Add</button></p>

              <Product addToCart={openPages} itemName={'Matcha Latte'} itemDescription={'Hot/Cold'} itemPrice={'Rp 28,000'} />
              <Product addToCart={openPages} itemName={'Red Velvet Latte'} itemDescription={'Hot/Cold'} itemPrice={'Rp 28,000'}/>
          </div>
        </div>
      </div>
    )}
    {showOrderPages && (<Orderpages  />)}
    {showCartPages && (<Cartpages />)}
    </div>
  )
}

export default Homepages
