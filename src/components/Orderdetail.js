import React from 'react'
import Productimage from '../assets/thumbnail/Cappucino.png'
import Icondelete from '../assets/Icon/trash-bin-trash-svgrepo-com.svg'
import Iconedit from '../assets/Icon/pencil-svgrepo-com.svg'

const Orderdetail = ({OrderPrice, OrderNotes, seledtedVarOp}) => {

  return (
    <div className='px-2 m-2 py-4 border rounded-xl shadow-sm'>
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
        <img src={Productimage} alt="" class="w-20 h-20 rounded-sm"></img>
      </div>
      <div className='flex justify-between mt-2'>
        <div className='flex gap-2 items-center border shadow-md rounded-xl px-2.5'>
          <img src={Iconedit} className='w-4'/>
          <p className='font-medium text-base'>Edit</p>
        </div>
        <img src={Icondelete} className='w-8'/>
      </div>
    </div>
  )
}

export default Orderdetail
