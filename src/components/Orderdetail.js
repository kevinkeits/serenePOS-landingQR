import React from 'react'
import Inputqty from './Inputqty'
import Addnotes from './Addnotes'
import Productimage from '../assets/thumbnail/Cappucino.png'

const Orderdetail = () => {
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
          <Addnotes/>
          <Inputqty/>
        </div> 
        

    </div>
  )
}

export default Orderdetail
