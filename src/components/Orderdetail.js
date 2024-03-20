import React from 'react'
import Productimage from '../assets/thumbnail/Cappucino.png'

const Orderdetail = ({OrderPrice, OrderNotes, seledtedVarOp}) => {
  return (
    <div className='px-2 m-2 py-4 border rounded-lg'>
      <div className="flex items-center">
        <div className="grow">
          <p className="font-semibold text-lg">Matcha latte</p>
          <div id="variant" className='inline-flex w-full gap-1'>
            <p className='font-semibold text-base'>Serve:</p>
            <label className='Var-Serve-Option'>Ice</label>
          </div>
          <div id="variant" className='inline-flex w-full gap-1'>
            <p className='font-semibold text-base'>Sugar: {seledtedVarOp}</p>
            <label className='Var-Serve-Option'>Ice</label>
          </div>
          <p className="font-semibold">Notes: {OrderNotes}</p>
          <div id="variant" className='inline-flex w-full gap-1'>
            <p className='font-semibold text-base'>Price: {OrderPrice}</p>
            <label className='Var-Serve-Option'>30000</label>
          </div>
        </div>
        <img src={Productimage} alt="" class="w-20 h-20 rounded-md"></img>
      </div>
      

    </div>
  )
}

export default Orderdetail
