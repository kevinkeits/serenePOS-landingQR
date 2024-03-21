// Orderpages.js
import React, { useState, useEffect } from 'react';
import ProductVariant from '../components/ProductVariant';
import ProductNotes from '../components/ProductNotes';
import Header from '../components/Header';
import Cartpages from './Cartpages';
import Homepages from './Homepages';
import axios from 'axios';

const Orderpages = ({ selectedProduct, variants }) => {
  const [showProductPages, setShowProductPages] = useState(false);
  const [showOrderPages, setShowOrderPages] = useState(true);
  const [showCartPages, setShowCartPages] = useState(false);
  const [qty, setQty] = useState(1);
  const [orderPrice, setOrderPrice] = useState(selectedProduct ? selectedProduct.price : 0);
  
  useEffect(() => {
    if (selectedProduct && !isNaN(qty) && !isNaN(selectedProduct.price)) {
      setOrderPrice(qty * selectedProduct.price);
    } else {
      setOrderPrice(0);
    }
  }, [qty, selectedProduct]);

  const backtoHome = () => {
    setShowProductPages(true);
    setShowOrderPages(false);
    setShowCartPages(false);
  }

  const AddToCart = () => {
    setShowOrderPages(false);
    setShowCartPages(true);
  }

  const incrementQty = () => {
    setQty(qty + 1);
  };

  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  if (!selectedProduct) {
    return null;
  }

  const { name, price } = selectedProduct;

  return (
    <div className='max-w-md mx-auto h-screen'>
      {showOrderPages && (
        <div>
          <Header backtoHome={backtoHome} label={'Customize Order'} />
          <div className="flex flex-row items-center m-2">
            <div className="grow px-2">
                <p className="text-lg font-semibold">{name}</p>
            </div>
            <div className="inline-flex items-center py-1 pr-2">
                <p className="text-sm font-medium"></p>
                <p id="itemPrice" className="text-sm font-medium pl-1">Rp. {price}</p>
            </div> 
          </div> 

          <ProductVariant
            VariantType={['Serve', 'Sugar', 'Add On']}
            VariantLabel={[['Ice', 'Hot'], ['Normal', 'Less Sugar', 'More Sugar'], ['Sugar Syrup', 'Bobba', 'Grass Jelly', 'Milk', 'Cheese']]}
            VariantPrice={[['0', '0'], ['0', '1000', '0'], ['2000', '3000', '4000', '5000', '6000']]}
          />

          <ProductNotes />
          <div className="max-w-md mx-auto border-t-2 pt-4 pb-3 px-3">
            <div className="flex gap-2">
              <p className="font-medium text-base grow">Item Qty</p>
              <button onClick={decrementQty} className="bg-blue-600 rounded-lg shadow text-white text-lg font-bold w-8 h-8">-</button>
              <input type="number" value={qty} onChange={e => setQty(parseInt(e.target.value))} className="w-20 border rounded-lg text-center"></input>
              <button onClick={incrementQty} className="bg-blue-600 rounded-lg text-white text-lg font-bold w-8 h-8">+</button>
            </div>  
            <div className="bg-blue-600 rounded-lg py-1 my-2 hover:cursor-pointer shadow-md">
              <div onClick={AddToCart} className="bg-blue-600 rounded-lg my-2 hover:cursor-pointer flex items-start justify-center gap-2">
                <p className="text-center text-white text-lg">Add To Cart -</p>
                <p className="text-center text-white text-lg">{orderPrice}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {showProductPages && (<Homepages  />)}
      {showCartPages && (<Cartpages />)}
    </div>
  );
}
export default Orderpages;
