import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Title from '../components/Title';
import Search from '../components/Search';
import Orderpages from './Orderpages';
import Cartpages from './Cartpages';
import Product from '../components/Product';

import MatchaLattePic from '../assets/thumbnail/Matcha Latte.png';
import VelvetLattePic from '../assets/thumbnail/Velvet Latte.png';
import BaileysCoffeePic from '../assets/thumbnail/Baileys-Coffee.png';
import AmericanoPic from '../assets/thumbnail/Americano.png';
import CappucinoPic from '../assets/thumbnail/Cappucino.png';
import KopiTubrukPic from '../assets/thumbnail/Kopi-Tubruk.png';
import VietnamDripPic from '../assets/thumbnail/Vietnam-Drip.png';

const Homepages = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductPages, setShowProductPages] = useState(true);
  const [showOrderPages, setShowOrderPages] = useState(false);
  const [showCartPages, setShowCartPages] = useState(false);
  const [products, setProduct] = useState([]);

  const openPages = (product) => {
    setSelectedProduct(product);
    setShowOrderPages(true);
    setShowProductPages(false);
    setShowCartPages(false);

  };

  // const products = [
  //   { name: 'Matcha Latte',  notes: 'Hot/Cold', price: '28000', imgUrl: MatchaLattePic },
  //   { name: 'Velvet Latte',  notes: 'Hot/Cold', price: '28000', imgUrl: VelvetLattePic },
  //   { name: 'Americano',  notes: 'Hot/Cold', price: '20000', imgUrl: AmericanoPic },
  //   { name: 'Cappucino',  notes: 'Hot/Cold', price: '28000', imgUrl: CappucinoPic },
  //   { name: 'Baileys Coffee',  notes: 'Cold', price: '30000', imgUrl: BaileysCoffeePic },
  //   { name: 'Kopi Tubruk',  notes: 'Hot', price: '20000', imgUrl: KopiTubrukPic },
  //   { name: 'Vietnam Drip', notes: 'Hot', price: '25000', imgUrl: VietnamDripPic },
  //   { name: 'Fried Frice',  notes: 'Spicy/No Spicy', price: '25000', imgUrl: VietnamDripPic },
  //   { name: 'French Fries',  notes: 'Small/Medium/Large', price: '25000', imgUrl: VietnamDripPic }
  // ];

  useEffect(() => {
    axios.get('https://serenepos.temandigital.id/api/scanOrder/get')
      .then(response => {
        setProduct(response.data.data)
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
          <p className='mx-2 text-base font-bold my-2'>Non Coffee</p>
          <Product customOrder={openPages} products={products.filter(product => product.categoryName.includes('Non Coffee') && product.name.toLowerCase().includes('milk'))} />
          <p className='mx-2 text-base font-bold my-2'>Coffee</p>
          <Product customOrder={openPages} products={products.filter(product => product.categoryName.includes('Coffee')&& product.name.toLowerCase().includes('am'))} />
          <p className='mx-2 text-base font-bold my-2'>food</p>
          <Product customOrder={openPages} products={products.filter(product => product.categoryName.includes('Food') && product.name.toLowerCase().includes('don'))} />
        </div>
      )}
      {showOrderPages && <Orderpages selectedProduct={selectedProduct}/>}
      {showCartPages && <Cartpages />}
    </div>
  );
};

export default Homepages;
