import React, { useState,  } from 'react'
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
  const [qty, setQty] = useState(0);

  const updateQty = newQty => {
    setQty(newQty);
  }

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
        <Header backtoHome={backtoHome} label={'Customize Order'} />
        <ProductLabel ProductPrice={'25000'}/>
        <ProductVariant
          VariantType={['Serve', 'Sugar', 'Add On']}
          VariantLabel={[['Ice', 'Hot'], ['Normal', 'Less Sugar', 'More Sugar'], ['Sugar Syrup', 'Bobba', 'Grass Jelly', 'Milk', 'Cheese']]}
          VariantPrice={[['0', '0'], ['0', '1000', '0'], ['2000', '3000', '4000', '5000', '6000']]}
        />
        <ProductNotes />
        <ProductQty addtocart={AddToCart} onChange={updateQty} value={qty}/>
      </div>
  )}
  {showProductPages && (<Homepages  />)}
  {showCartPages && (<Cartpages />)}
  </div>
  )
}
export default Orderpages
