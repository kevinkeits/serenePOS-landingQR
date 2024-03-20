import React, { useState , useEffect } from 'react';
import ProductVariant from '../components/ProductVariant';
import ProductNotes from '../components/ProductNotes';
import Header from '../components/Header';
import Cartpages from './Cartpages';
import Homepages from './Homepages';

const Orderpages = ({ selectedProduct, value, addtocart}) => {
  const [showProductPages, setShowProductPages] = useState(false);
  const [showOrderPages, setShowOrderPages] = useState(true);
  const [showCartPages, setShowCartPages] = useState(false);
 
  const { name, price: productPrice } = selectedProduct;
  const [qty, setQty] = useState(value || 1);
  const [orderPrice, setOrderPrice] = useState(qty * productPrice);

  const updateQty = newQty => {
    setQty(newQty);
    if (selectedProduct) {
      setOrderPrice(newQty * productPrice); 
    }
  }

  const backtoHome = () => {
    setShowProductPages(true)
    setShowOrderPages(false)
    setShowCartPages(false)
  }

  const addToCart  = () => {
    addtocart(qty);
    setShowOrderPages(false)
    setShowCartPages(true)
  }

  const incrementQty = () => {
    setQty(qty + 1);
  };

  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

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
                <p className="text-sm font-medium">Rp </p>
                <p id="itemPrice" className="text-sm font-medium pl-1">{productPrice}</p>
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
                <button id="" onClick={decrementQty} className="bg-blue-600 rounded-lg shadow text-white text-lg font-bold w-8 h-8">-</button>
                <input id="" type="number" value={qty} onChange={e => setQty(parseInt(e.target.value))} className="w-20 border rounded-lg text-center"></input>
                <button id="" onClick={incrementQty} className="bg-blue-600 rounded-lg text-white text-lg font-bold w-8 h-8">+</button>
            </div>  
            {/* Button Add To Cart */}
            <div className="bg-blue-600 rounded-lg py-1 my-2 hover:cursor-pointer shadow-md">
              <div onClick={addToCart} className="bg-blue-600 rounded-lg my-2 hover:cursor-pointer flex items-start justify-center gap-2">
                  <p className="text-center text-white text-lg">Add To Cart -</p>
                  <p id="" className="text-center text-white text-lg">{orderPrice}</p>
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
