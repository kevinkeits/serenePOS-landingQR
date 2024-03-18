import React from 'react'
import Productcategory from '../components/Productcategory'
import Title from '../components/Title'
import Search from '../components/Search'

const Homepages = () => {
  return (
    <div className='max-w-md mx-auto bg-green-100 h-screen'>
      <Title/>
      <Search/>
      <Productcategory/>
      <Productcategory/>
    </div>
  )
}

export default Homepages
