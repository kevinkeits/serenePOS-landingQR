import React from 'react'
import Header from '../components/Header'
import Orderdetail from '../components/Orderdetail'

const Cartpages = () => {
  return (
    <div className='max-w-md mx-auto h-screen'>
      <Header />
      <Orderdetail/>
      <Orderdetail/>
    </div>
  )
}

export default Cartpages
