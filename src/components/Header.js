import React from 'react'
import ArrowBack from '../assets/Icon/arrow-back-simple-svgrepo-com.svg';

const Header = ({ backtoHome, label }) => { 
  return (
    <div id="modalCustomOrder" className="max-w-md mx-auto">
       <div id="header" className="flex items-center border-b-2 max-w-md mx-auto pt-8 pb-4 px-2">
            <img onClick={backtoHome} src={ArrowBack} alt="search" className="w-6 h-6 mx-2"></img>
            <h1 id="title" className="font-semibold text-lg px-2">{label}</h1>
        </div>
    </div>
  )
}

export default Header
