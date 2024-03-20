
import React, { useState } from 'react'


const ProductQty = ({addtocart, value, onChange, orderPrice}) => {
  const [qty, setQty] = useState(value || 1);
  const incrementQty = () => {
    setQty(qty + 1);
    onChange(qty + 1);
  };

  // Fungsi untuk mengurangi kuantity
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
      onChange(qty - 1);
    }
  };

  return (
    <div ClassName="max-w-md mx-auto border-t-2 pt-4 pb-3 px-3">
      <div ClassName="flex gap-2">
          <p ClassName="font-medium text-base grow">Item Qty</p>
          <button id="" onClick={decrementQty} ClassName="bg-blue-600 rounded-lg shadow text-white text-lg font-bold w-8 h-8">-</button>
          <input id="" type="number" value={qty} onChange={e => setQty(parseInt(e.target.value))} ClassName="w-20 border rounded-lg text-center"></input>
          <button id="" onClick={incrementQty} ClassName="bg-blue-600 rounded-lg text-white text-lg font-bold w-8 h-8">+</button>
      </div>  
      {/* Button Add To Cart */}
      <div ClassName="bg-blue-600 rounded-lg py-1 my-2 hover:cursor-pointer shadow-md">
        <div onClick={addtocart} ClassName="bg-blue-600 rounded-lg my-2 hover:cursor-pointer flex items-start justify-center gap-2">
            <p ClassName="text-center text-white text-lg">Add To Cart -</p>
            <p id="totalValue" ClassName="text-center text-white text-lg">{orderPrice}</p>
        </div>
    </div>
    </div>
  )
}

export default ProductQty

