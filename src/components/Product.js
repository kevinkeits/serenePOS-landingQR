import React from 'react';

const Product = ({ customOrder, products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className='productMenu flex mx-2 my-2 py-2 bg-white px-2 border rounded-lg shadow-md'>
          <div>
            <img src={product.imgUrl} alt={product.name} className='w-28 h-24 rounded-md'/>
          </div>
          <div className='mx-2 w-full'>
            <p className='text-base font-semibold'>{product.name}</p>
            <p className='text-xs'>{product.notes}</p>
            <p className='text-md font-medium'>Rp. {product.price}</p>
            <div className='text-right'>
              <div className='py-1'>
                <button onClick={() => customOrder(product)} className='bg-blue-700 text-sm text-white font-semibold py-1 px-2 rounded-lg shadow-md w-20'>Add</button>
              </div>
            </div>
          </div>     
        </div>
      ))}
    </div>
  );
};

export default Product;
