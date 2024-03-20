import React, { useState } from 'react';
import ProductVariant from '../components/ProductVariant';
import ProductNotes from '../components/ProductNotes';
import ProductQty from '../components/ProductQty';
import Header from '../components/Header';
import Cartpages from './Cartpages';
import Homepages from './Homepages';

const Orderpages = ({ selectedProduct }) => {
  const [showProductPages, setShowProductPages] = useState(false);
  const [showOrderPages, setShowOrderPages] = useState(true);
  const [showCartPages, setShowCartPages] = useState(false);
  const [qty, setQty] = useState(1);
  const [orderPrice, setOrderPrice] = useState(selectedProduct ? selectedProduct.price : 0);

  const updateQty = newQty => {
    setQty(newQty);
    if (selectedProduct) {
      setOrderPrice(newQty * selectedProduct.price); 
    }
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
                <p className="text-sm font-medium">Rp </p>
                <p id="itemPrice" className="text-sm font-medium pl-1">{price}</p>
            </div> 
          </div> 
          <ProductVariant
            VariantType={['Serve', 'Sugar', 'Add On']}
            VariantLabel={[['Ice', 'Hot'], ['Normal', 'Less Sugar', 'More Sugar'], ['Sugar Syrup', 'Bobba', 'Grass Jelly', 'Milk', 'Cheese']]}
            VariantPrice={[['0', '0'], ['0', '1000', '0'], ['2000', '3000', '4000', '5000', '6000']]}
          />
          <ProductNotes />
          <ProductQty addtocart={AddToCart} onChange={updateQty} price={price} value={qty} orderPrice={orderPrice.toString()}/>
        </div>
      )}
      {showProductPages && (<Homepages  />)}
      {showCartPages && (<Cartpages />)}
    </div>
  );
}
export default Orderpages;
