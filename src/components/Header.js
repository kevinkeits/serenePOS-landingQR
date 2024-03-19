import React from 'react'
import ArrowBack from '../assets/Icon/arrow-back-simple-svgrepo-com.svg';

const Header = ({ backtoHome }) => { 
  return (
    <div id="modalCustomOrder" class="max-w-md mx-auto">
       <div id="header" class="flex items-center border-b-2 max-w-md mx-auto pt-8 pb-4 px-2">
            <img onClick={backtoHome} src={ArrowBack} alt="search" class="w-6 h-6 mx-2"></img>
            <h1 id="title" class="font-semibold text-lg px-2">Header</h1>
        </div>
    </div>
  )
}

export default Header
