import React from 'react'
import MatchaLatte from '../assets/thumbnail/Matcha Latte.png'
import VelvetLatte from '../assets/thumbnail/Americano.png'

const Productimage = () => {
  return (
    <div>
      <img src={MatchaLatte} alt='Matcha Latte' className='w-20 h-20 rounded-md'/>
    </div>
  )
}

export default Productimage
