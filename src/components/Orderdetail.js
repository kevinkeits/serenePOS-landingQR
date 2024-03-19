import React from 'react'
import Inputqty from './Inputqty'
import Productimage from '../assets/thumbnail/Cappucino.png'
import iconNotes from '../assets/Icon/note-text-svgrepo-com.svg'

const Orderdetail = ({ UpdateOrderNotes}) => {
  return (
    <div className='px-2 m-2 py-4'>
      <div class="flex items-center">
        <div class="grow">
          <p class="font-semibold text-lg">Matcha latte</p>
          <div id="variant" className='inline-flex w-full gap-1'>
            <p className='font-semibold text-base'>Serve:</p>
            <label className='Var-Serve-Option'>Ice</label>
          </div>
          <div id="variant" className='inline-flex w-full gap-1'>
            <p className='font-semibold text-base'>Sugar:</p>
            <label className='Var-Serve-Option'>Ice</label>
          </div>
          <p class="font-semibold">Notes:</p>
          <div id="variant" className='inline-flex w-full gap-1'>
            <p className='font-semibold text-base'>Price:</p>
            <label className='Var-Serve-Option'>30000</label>
          </div>
        </div>
        <img src={Productimage} alt="" class="w-20 h-20 rounded-md"></img>
      </div>

      <div className='flex items-center justify-between py-2'>
        <div onClick={UpdateOrderNotes} className='addNotes inline-flex border rounded-lg hover:cursor-pointer py-2 shadow-md px-4'>
          <img src={iconNotes} alt='Add Notes' className='w-6 h-6'/>
          <p className='font-medium text-base'>Add Notes</p>
        </div>
          <Inputqty/>
        </div> 
        

    </div>
  )
}

export default Orderdetail
