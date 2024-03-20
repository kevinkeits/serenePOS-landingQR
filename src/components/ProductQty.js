
import React, { useState, useEffect  } from 'react'


const ProductQty = ({addtocart, value, onChange, price }) => {
  const [qty, setQty] = useState(value || 1);
  const [orderPrice, setOrderPrice] = useState(qty * price);

  useEffect(() => {
    setOrderPrice(qty * price);
  }, [qty, price]);

  const incrementQty = () => {
    setQty(qty + 1);
    
  };

  // Fungsi untuk mengurangi kuantity
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
   
    }
  };

  return (
    <div className="max-w-md mx-auto border-t-2 pt-4 pb-3 px-3">
      <div className="flex gap-2">
          <p className="font-medium text-base grow">Item Qty</p>
          <button id="" onClick={decrementQty} className="bg-blue-600 rounded-lg shadow text-white text-lg font-bold w-8 h-8">-</button>
          <input id="" type="number" value={qty} onChange={e => setQty(parseInt(e.target.value))} className="w-20 border rounded-lg text-center"></input>
          <button id="" onClick={incrementQty} className="bg-blue-600 rounded-lg text-white text-lg font-bold w-8 h-8">+</button>
      </div>  
      {/* Button Add To Cart */}
      <div className="bg-blue-600 rounded-lg py-1 my-2 hover:cursor-pointer shadow-md">
        <div onClick={() => addtocart(qty)} className="bg-blue-600 rounded-lg my-2 hover:cursor-pointer flex items-start justify-center gap-2">
            <p className="text-center text-white text-lg">Add To Cart -</p>
            <p id="totalValue" className="text-center text-white text-lg">{orderPrice}</p>
        </div>
    </div>
    </div>
  )
}

export default ProductQty

