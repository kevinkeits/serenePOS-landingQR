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
  const [showProductPages, setShowProductPages] = useState(true);
  const [showOrderPages, setShowOrderPages] = useState(false);
  const [showCartPages, setShowCartPages] = useState(false);

  const openPages = (product) => {
    console.log(product);
    setShowOrderPages(true);
    setShowProductPages(false);
    setShowCartPages(false);

  };

  const products = [
    { itemName: 'Matcha Latte', itemCategories: 'Non Cofee', itemDescription: 'Hot/Cold', itemPrice: 'Rp 28,000', ProductPhoto: MatchaLattePic },
    { itemName: 'Velvet Latte', itemCategories: 'Non Cofee', itemDescription: 'Hot/Cold', itemPrice: 'Rp 28,000', ProductPhoto: VelvetLattePic },
    { itemName: 'Americano', itemCategories: 'Coffee', itemDescription: 'Hot/Cold', itemPrice: 'Rp 20,000', ProductPhoto: AmericanoPic },
    { itemName: 'Cappucino', itemCategories: 'Coffee', itemDescription: 'Hot/Cold', itemPrice: 'Rp 28,000', ProductPhoto: CappucinoPic },
    { itemName: 'Baileys Coffee', itemCategories: 'Coffee', itemDescription: 'Cold', itemPrice: 'Rp 30,000', ProductPhoto: BaileysCoffeePic },
    { itemName: 'Kopi Tubruk', itemCategories: 'Coffee', itemDescription: 'Hot', itemPrice: 'Rp 20,000', ProductPhoto: KopiTubrukPic },
    { itemName: 'Vietnam Drip', itemCategories: 'Coffee', itemDescription: 'Hot', itemPrice: 'Rp 25,000', ProductPhoto: VietnamDripPic }
  ];

  return (
    <div className='max-w-md mx-auto h-screen'>
      {showProductPages && (
        <div>
          <Title />
          <Search />
          <p className='mx-2 text-base font-bold my-2'>Non Coffee</p>
          <Product customOrder={openPages} products={products.filter(product => product.itemCategories.includes('Non'))} />
          <p className='mx-2 text-base font-bold my-2'>Coffee</p>
          <Product customOrder={openPages} products={products.filter(product => product.itemCategories.includes('Coffee'))} />
          <p className='mx-2 text-base font-bold my-2'>Add On</p>
          <Product customOrder={openPages} products={products.filter(product => product.itemCategories.includes('Coffee'))} />
        </div>
      )}
      {showOrderPages && <Orderpages />}
      {showCartPages && <Cartpages />}
    </div>
  );
};

export default Homepages;
