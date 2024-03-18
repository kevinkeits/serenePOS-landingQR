import React from 'react'
import ArrowBack from '../assets/thumbnail/Icon/arrow-back-simple-svgrepo-com.svg';

const Header = () => {
  return (
    <div id="modalCustomOrder" class="max-w-md mx-auto">
       <div id="header" class="flex items-center border-b-2 max-w-md mx-auto pt-8 pb-4 px-2">
            <img src={ArrowBack} alt="search" class="w-6 h-6 mx-2"></img>
            <h1 id="title" class="font-semibold text-lg px-2">Costumize Order</h1>
        </div>
    </div>
  )
}

export default Header
