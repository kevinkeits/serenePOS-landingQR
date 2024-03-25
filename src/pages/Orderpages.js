// Orderpages.js
import React, { useState, useEffect } from 'react';
/* import ProductVariant from '../components/ProductVariant'; */
import ProductNotes from '../components/ProductNotes';
import Header from '../components/Header';
import Cartpages from './Cartpages';
import Homepages from './Homepages';

const Orderpages = ({ selectedProduct, variants }) => {
  const [showProductPages, setShowProductPages] = useState(false);
  const [showOrderPages, setShowOrderPages] = useState(true);
  const [showCartPages, setShowCartPages] = useState(false);
  const [qty, setQty] = useState(1);
  const [orderPrice, setOrderPrice] = useState(selectedProduct ? selectedProduct.price : 0);

  const [variantList, setvariantList] = useState([]);
  const [variantCategory, setvariantCategory] = useState([]);

  
  useEffect(() => {
    if (selectedProduct) {
      console.log(selectedProduct.variant);
      const variantList = selectedProduct.variant.map(variant => ({
        ...variant,
        price: parseFloat(variant.price).toFixed(0)
      }));
      setvariantList(variantList);

      const VariantList = [...new Set(variantList.map(variant => variant.name))];
      setvariantCategory(VariantList);
    };
  }, [selectedProduct]);

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

    if (selectedProduct && !isNaN(qty + 1) && !isNaN(selectedProduct.product.price)) {
      setOrderPrice((qty + 1) * selectedProduct.product.price);
    } else {
      setOrderPrice(0);
    }
  };

  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);

      if (selectedProduct && !isNaN(qty - 1) && !isNaN(selectedProduct.product.price)) {
        setOrderPrice((qty - 1) * selectedProduct.product.price);
      } else {
        setOrderPrice(0);
      }
    }
  };

  if (!selectedProduct) {
    return null;
  }

  const { name, price } = selectedProduct.product;

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
                <p id="itemPrice" className="text-sm font-medium pl-1">Rp. {parseFloat(price).toFixed(0)}</p>
            </div> 
          </div> 

          {variantCategory.map((name, nameIndex) => (
            <div key={nameIndex} className='px-2 m-2'>
              <p className='font-semibold'>{name}</p>
              {variantList.filter(variant => variant.name === name).map((variant, index) => (
                <div key={index} className='px-2 m-2'>
                  <div className='flex gap-2 items-center space-x-2 py-1'>
                  <input  className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300' type="radio"
                          value={variant.label}
                          data-varprice={variant.price}
                          onChange={(event) => console.log(event.target.value, event.target.dataset.varprice)} />
                    <p className='ml-2 font-medium text-base text-gray-700 w-24'>{variant.label}</p>
                    <div className='grow bg-slate-200 rounded-md px-2 py-1'>
                      <p className='ml-2 text-gray-500'>{variant.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

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
