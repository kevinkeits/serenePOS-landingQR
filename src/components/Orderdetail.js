import React from 'react'
import Inputqty from './Inputqty'
import Addnotes from './Addnotes'

const Orderdetail = () => {
  return (
    <div>
        <p className='font-semibold text-lg'>Matcha latte</p>
        <div className='inline-flex'>
            <p className='font-semibold text-base'>Serve :</p>
            <label className='Var-Serve-Option'>Ice</label>
        </div>
        <p>30000</p>
        <div className='flex justify-between px-4'>
        <Addnotes/>
        <Inputqty/>
        </div> 
    </div>
  )
}

export default Orderdetail
