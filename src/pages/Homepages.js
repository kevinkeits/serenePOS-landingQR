import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Title from '../components/Title';
import Search from '../components/Search';
import Orderpages from './Orderpages';
import Cartpages from './Cartpages';
import Product from '../components/Product';

const Homepages = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductPages, setShowProductPages] = useState(true);
  const [showOrderPages, setShowOrderPages] = useState(false);
  const [showCartPages, setShowCartPages] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const openPages = (product) => {
    setSelectedProduct(product);
    setShowOrderPages(true);
    setShowProductPages(false);
    setShowCartPages(false);
  };

  useEffect(() => {
    axios.get('https://serenepos.temandigital.id/api/scanOrder/get')
      .then(response => {
        const Product = response.data.data;
        setProducts(Product);

        const Categories = [...new Set(Product.map(product => product.categoryName))];
        setCategories(Categories);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='max-w-md mx-auto h-screen'>
      {showProductPages && (
        <div>
          <Title />
          <Search />
          {categories.map(category => (
            <div key={category}>
              <p className='mx-2 text-base font-bold my-2'>{category}</p>
              <Product customOrder={openPages} products={products.filter(product => product.categoryName === category)} />
            </div>
          ))}
        </div>
      )}
      {showOrderPages && <Orderpages selectedProduct={selectedProduct}/>}
      {showCartPages && <Cartpages />}
    </div>
  );
};

export default Homepages;
