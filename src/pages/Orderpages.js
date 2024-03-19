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
  const [qty, setQty] = useState(1);
  const [orderPrice, setOrderPrice] = useState(0);
  const [ProductPrice, ] = useState(25000);


  const updateQty = newQty => {
    setQty(newQty);
    setOrderPrice(newQty * ProductPrice); 
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
        <ProductLabel ProductPrice={ProductPrice.toString()}/>
        <ProductVariant
          VariantType={['Serve', 'Sugar', 'Add On']}
          VariantLabel={[['Ice', 'Hot'], ['Normal', 'Less Sugar', 'More Sugar'], ['Sugar Syrup', 'Bobba', 'Grass Jelly', 'Milk', 'Cheese']]}
          VariantPrice={[['0', '0'], ['0', '1000', '0'], ['2000', '3000', '4000', '5000', '6000']]}
        />
        <ProductNotes />
        <ProductQty addtocart={AddToCart} onChange={updateQty} value={qty} orderPrice={orderPrice.toString()}/>
      </div>
  )}
  {showProductPages && (<Homepages  />)}
  {showCartPages && (<Cartpages />)}
  </div>
  )
}
export default Orderpages
