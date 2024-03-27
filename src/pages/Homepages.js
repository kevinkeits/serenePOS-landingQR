import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Title from '../components/Title';
import Searchicon from '../assets/Icon/search-svgrepo-com.svg'
import Orderpages from './Orderpages';
import Cartpages from './Cartpages';
import Product from '../components/Product';
import NoImage from '../assets/thumbnail/No-Image-Placeholder.png'
import Header from '../components/Header'

const Homepages = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductPages, setShowProductPages] = useState(true);
  const [showOrderPages, setShowOrderPages] = useState(false);
  const [showCartPages, setShowCartPages] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const openPages = (product) => {
    axios.get(`https://serenepos.temandigital.id/api/scanOrder/get?ID=${product.id}`)
    .then(response => {
      setSelectedProduct(response.data.data);
    setShowOrderPages(true);
    setShowProductPages(false);
    setShowCartPages(false);
    });
  };

  const backtoHome = () => {
    setShowProductPages(true)
    setShowOrderPages(false)
    setShowCartPages(false)
  }

  const AddToCart = () => {
    setShowProductPages(false);
    setShowOrderPages(false);
    setShowCartPages(true);
  };

  useEffect(() => {
    axios.get('https://serenepos.temandigital.id/api/scanOrder/get')
      .then(respon => {
        const Product = respon.data.data.map(product => ({
          ...product, 
          price: parseFloat(product.price).toFixed(0),
          imgUrl: product.imgUrl ? product.imgUrl : NoImage
        }));
        setProducts(Product);

        const Categories = [...new Set(Product.map(product => product.categoryName))];
        setCategories(Categories);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='max-w-md mx-auto h-screen'>
      {showProductPages && (
        <div>
          <Title />
          <div className=' w-full max-w-md mx-auto py-2 px-2'>
              <div className='w-full flex items-center py-2 px-2 border bg-white border-gray-300 shadow-md rounded-lg '>
                <input type='text' placeholder='Cari Disini...' className='pl-2 w-full' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              <img src={Searchicon} alt='Search' className='w-6 h-6 mx-2' />
              </div>
          </div>
          {categories.map(category => (
            <div key={category}>
              <p className='mx-2 text-base font-bold my-2'>{category}</p>
              <Product customOrder={openPages} products={filteredProducts.filter(product => product.categoryName === category)} />
            </div>
          ))}
        </div>
      )}
      {showOrderPages && (
        <div>
          <Header backtoHome={backtoHome} label={'Customize Order'} />
          <Orderpages selectedProduct={selectedProduct} openCart={AddToCart} />
        </div>
      )}
      {showCartPages && (
        <div>
          <Header backtoHome={backtoHome} label={'Cart'} />
          <Cartpages />
        </div>
      )}
    </div>
  );
};

export default Homepages;
