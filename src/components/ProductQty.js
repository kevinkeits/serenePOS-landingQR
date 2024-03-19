import React, { useState } from 'react';

const ProductQty = ({ addtocart }) => {
  const [qty, setQty] = useState(1);

  const incrementQty = () => {
    setQty(prevQty => prevQty + 1);
  };

  const decrementQty = () => {
    if (qty > 1) {
      setQty(prevQty => prevQty - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto border-t-2 pt-4 pb-3 px-3">
      <div className="flex gap-2">
        <p className="font-medium text-base grow">Item Qty</p>

        {/* Decrement button */}
        <button onClick={decrementQty} className="bg-blue-600 rounded-lg shadow text-white text-lg font-bold w-8 h-8">-</button>
        {/* Quantity input */}
        <input id="qtyInput" type="text" value={qty} className="w-20 border rounded-lg text-center"></input>
        {/* Increment button */}
        <button onClick={incrementQty} className="bg-blue-600 rounded-lg text-white text-lg font-bold w-8 h-8">+</button>

      </div>
      {/* Button Add To Cart */}
      <div className="bg-blue-600 rounded-lg py-1 my-2 hover:cursor-pointer shadow-md">
        <div onClick={addtocart} className="bg-blue-600 rounded-lg my-2 hover:cursor-pointer flex items-start justify-center gap-2">
          <p className="text-center text-white text-lg">Add To Cart -</p>
          <p id="totalValue" className="text-center text-white text-lg">Rp. {qty * 25000}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductQty;
