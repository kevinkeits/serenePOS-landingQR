import React, { useState } from 'react';
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

  const openPages = (product) => {
    setSelectedProduct(product);
    console.log(product);
    setShowOrderPages(true);
    setShowProductPages(false);
    setShowCartPages(false);

  };

  const products = [
    { name: 'Matcha Latte', Categories: 'Non Cofee', notes: 'Hot/Cold', price: '28000', imgUrl: MatchaLattePic },
    { name: 'Velvet Latte', Categories: 'Non Cofee', notes: 'Hot/Cold', price: '28000', imgUrl: VelvetLattePic },
    { name: 'Americano', Categories: 'Coffee', notes: 'Hot/Cold', price: '20000', imgUrl: AmericanoPic },
    { name: 'Cappucino', Categories: 'Coffee', notes: 'Hot/Cold', price: '28000', imgUrl: CappucinoPic },
    { name: 'Baileys Coffee', Categories: 'Coffee', notes: 'Cold', price: '30000', imgUrl: BaileysCoffeePic },
    { name: 'Kopi Tubruk', Categories: 'Coffee', notes: 'Hot', price: '20000', imgUrl: KopiTubrukPic },
    { name: 'Vietnam Drip', Categories: 'Coffee', notes: 'Hot', price: '25000', imgUrl: VietnamDripPic },
    { name: 'Fried Frice', Categories: 'food', notes: 'Spicy/No Spicy', price: '25000', imgUrl: VietnamDripPic },
    { name: 'French Fries', Categories: 'food', notes: 'Small/Medium/Large', price: '25000', imgUrl: VietnamDripPic }
  ];

  return (
    <div className='max-w-md mx-auto h-screen'>
      {showProductPages && (
        <div>
          <Title />
          <Search />
          <p className='mx-2 text-base font-bold my-2'>Non Coffee</p>
          <Product customOrder={openPages} products={products.filter(product => product.Categories.includes('Non'))} />
          <p className='mx-2 text-base font-bold my-2'>Coffee</p>
          <Product customOrder={openPages} products={products.filter(product => product.Categories.includes('Coffee'))} />
          <p className='mx-2 text-base font-bold my-2'>food</p>
          <Product customOrder={openPages} products={products.filter(product => product.Categories.includes('food'))} />
        </div>
      )}
      {showOrderPages && <Orderpages selectedProduct={selectedProduct}/>}
      {showCartPages && <Cartpages />}
    </div>
  );
};

export default Homepages;
