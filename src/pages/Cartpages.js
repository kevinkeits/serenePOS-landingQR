import React, { useState,  } from 'react'
import Orderdetail from '../components/Orderdetail'
import Homepages from './Homepages'
import Header from '../components/Header'

const Cartpages = () => {
  const [showProductPages, setShowProductPages] = useState(false);
  const [showOrderPages, setShowOrderPages] = useState(true);
  const [showCartPages, setShowCartPages] = useState(false);

  const backtoHome = () => {
    setShowProductPages(true)
    setShowOrderPages(false)
    setShowCartPages(false)
  }

  return (
    <div>
      {showProductPages && (<Homepages  />)}
      {showCartPages && (<Cartpages />)}
      {showOrderPages && (
        <div className='max-w-md mx-auto h-screen'>
          <Header backtoHome={backtoHome} label={'Cart'} />
          <div>
            <Orderdetail />
          </div>
                             
          {/* Notes */}
          <div className='sticky bg-white w-full rounded-lg mb-2'>
            <div className='py-2 mx-2'>
              <p className='text-base font-semibold'>Notes</p>
            </div>
            <div className='bg-white border shadow-sm rounded-md py-2 px-3 my-1 mx-2'>
              <textarea placeholder='Ex: Add more...' className='w-full h-32 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none' />
            </div> 
          </div>

          <div className='max-w-md mx-auto flex items-center justify-between my-2 px-2'>
            <p font-medium text-base>Need Anything else?</p>
            <button className='border py-2 px-2 rounded-lg shadow-md mx-2 text-base font-medium'>Add More</button>
          </div>

          <div className='border max-w-md mx-auto px-2 mt-3 mb-4 rounded-lg'>
            <p className='font-bold text-lg py-2'>Summary</p>
            <div className='border-t-2 flex py-2'>
              <p className='font-bold text-lg grow'>Total</p>
              <p className='font-bold text-lg'>60000</p>
              </div>
          </div>

          <div className='bg-blue-600 max-w-md mx-auto my-2 rounded-lg px-2 py-3 items-center'>
            <p className='text-white font-semibold text-lg text-center'>Place Order</p>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Cartpages
