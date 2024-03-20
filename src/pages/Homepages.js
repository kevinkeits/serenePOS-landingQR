import React, { useState,  } from 'react'

import Title from '../components/Title'
import Search from '../components/Search'
import Orderpages from './Orderpages'
import Cartpages from './Cartpages'
import Product from '../components/Product'

import MatchaLattePic from '../assets/thumbnail/Matcha Latte.png'
import VelvetLattePic from '../assets/thumbnail/Velvet Latte.png'
import BaileysCoffeePic from '../assets/thumbnail/Baileys-Coffee.png'
import AmericanoPic from '../assets/thumbnail/Americano.png'
import CappucinoPic from '../assets/thumbnail/Cappucino.png'
import KopiTubrukPic from '../assets/thumbnail/Kopi-Tubruk.png'
import VietnamDripPic from '../assets/thumbnail/Vietnam-Drip.png'



const Homepages = () => {
  const [showProductPages, setShowProductPages] = useState(true);
  const [showOrderPages, setShowOrderPages] = useState(false);
  const [showCartPages, setShowCartPages] = useState(false);

  const openPages = () => {
    setShowOrderPages(true)
    setShowProductPages(false)
    setShowCartPages(false)
  }

  return (
    <div className='max-w-md mx-auto h-screen'>
    {showProductPages && (
     <div>
        <Title/>
        <Search/>
        <div className='my-2'>
          <div className='categoryMenu max-w-md mx-auto'>
              <p className='font-bold py-2 px-2'> Non Coffee</p>
              <Product customOrder={openPages} ProductPhoto={MatchaLattePic} itemName={'Matcha Latte'} itemDescription={'Hot/Cold'} itemPrice={'Rp 28,000'} />
              <Product customOrder={openPages} ProductPhoto={VelvetLattePic} itemName={'Velvet Latte'} itemDescription={'Hot/Cold'} itemPrice={'Rp 28,000'} />
          </div>
        </div>
        <div className='my-2'>
          <div className='categoryMenu max-w-md mx-auto'>
              <p className='font-bold py-2 px-2'> Coffee</p>
              <Product customOrder={openPages} ProductPhoto={AmericanoPic} itemName={'Americano'} itemDescription={'Hot/Cold'} itemPrice={'Rp 20,000'} />
              <Product customOrder={openPages} ProductPhoto={CappucinoPic} itemName={'Cappucino'} itemDescription={'Hot/Cold'} itemPrice={'Rp 28,000'} />
              <Product customOrder={openPages} ProductPhoto={BaileysCoffeePic} itemName={'Baileys Coffee'} itemDescription={'Cold'} itemPrice={'Rp 30,000'} />
              <Product customOrder={openPages} ProductPhoto={KopiTubrukPic} itemName={'Kopi Tubruk'} itemDescription={'Hot'} itemPrice={'Rp 20,000'} />
              <Product customOrder={openPages} ProductPhoto={VietnamDripPic} itemName={'Vietnam Drip'} itemDescription={'Hot'} itemPrice={'Rp 25,000'} />
              
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
