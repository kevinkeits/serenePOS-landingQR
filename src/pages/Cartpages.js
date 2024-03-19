import React, { useState,  } from 'react'
import Orderdetail from '../components/Orderdetail'
import ArrowBack from '../assets/Icon/arrow-back-simple-svgrepo-com.svg'
import Homepages from './Homepages'
import Header from '../components/Header'

const Cartpages = () => {
  const [showProductPages, setShowProductPages] = useState(false);
  const [showOrderPages, setShowOrderPages] = useState(true);
  const [showCartPages, setShowCartPages] = useState(false);
  const [showOrderNotes, setShowOrderNotes] = useState(false);

  const backtoHome = () => {
    setShowProductPages(true)
    setShowOrderPages(false)
    setShowCartPages(false)
  }

  const OrderNotes = () => {
    setShowOrderNotes(true)
  }

  const SaveOrderNotes = () => {
    setShowOrderNotes(false)
  }

  const CloseOrderNotes = () => {
    setShowOrderNotes(false)
  } 

  return (
    <div>
      {showProductPages && (<Homepages  />)}
      {showCartPages && (<Cartpages />)}
      {showOrderPages && (
      <div className='max-w-md mx-auto h-screen'>
        <Header backtoHome={backtoHome} label={'Cart'} />
        <div>
          <Orderdetail UpdateOrderNotes={OrderNotes} />
          <Orderdetail UpdateOrderNotes={OrderNotes} />
        </div>
        <div className='max-w-md mx-auto flex items-center justify-between my-2 px-2'>
          <p font-medium text-base>Need Anything else?</p>
          <button className='border py-2 px-2 rounded-lg shadow-md mx-2 text-base'>Add More</button>
        </div>
        <div className='border max-w-md mx-auto px-2 mx-2 mt-3 mb-4 rounded-lg'>
          <p className='font-bold text-lg py-2'>Summary</p>
          <div className='border-t-2 flex py-2'>
            <p className='font-bold text-lg grow'>Total</p>
            <p className='font-bold text-lg'>60000</p>
            </div>
        </div>
        <div className='bg-blue-600 max-w-md mx-auto my-2 rounded-lg px-2 py-3 items-center'>
          <p className='text-white font-semibold text-lg text-center'>Place Order</p>
        </div>

          {/* Notes */}
          {showOrderNotes && (
            <div className='modalAddNotes sticky bg-white bottom-0 w-full border rounded-lg mb-2 shadow-lg'>
            <div className='py-2 mx-2'>
              <p className='text-base font-semibold'>Notes</p>
            </div>
            <div className='bg-white border shadow-md rounded-md py-2 px-3 my-1 mx-2'>
              <textarea placeholder='Ex: Add more...' className='w-full h-32 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none' />
            </div>
            <div className='flex my-2 mx-2 items-center'>
              <p className='text-slate-200 grow'>0/200</p>
              <button onClick={CloseOrderNotes} className='cancelNotes bg-white border rounded-lg shadow-lg text-black text-base p-2 w-20 mx-1'>Cancel</button>
              <button onClick={SaveOrderNotes} className='saveNotes border rounded-lg bg-green-600 shadow-lg text-white text-base font-medium p-2 w-20 mx-1'>Save</button>
            </div>
          </div>
          )}
        </div>
      )}
    </div>
    
  )
}

export default Cartpages
