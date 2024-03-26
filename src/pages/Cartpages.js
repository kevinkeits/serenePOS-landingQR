import React, { useState, useEffect } from 'react'
import Homepages from './Homepages'
import Header from '../components/Header'
import axios from 'axios'
import Icondelete from '../assets/Icon/trash-bin-trash-svgrepo-com.svg'
import Iconedit from '../assets/Icon/pencil-svgrepo-com.svg'
import Productimage from '../assets/thumbnail/Cappucino.png'

const Cartpages = ({orderPrice, qty, name, imgUrl}) => {
  const [showProductPages, setShowProductPages] = useState(false);
  const [showOrderPages, setShowOrderPages] = useState(true);
  const [showCartPages, setShowCartPages] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const backtoHome = () => {
    setShowProductPages(true)
    setShowOrderPages(false)
    setShowCartPages(false)
  }

  useEffect(() => {
    axios.get('https://serenepos.temandigital.id/api/scanOrder/get')
      .then(response => {
        setProducts(response.data.data);
        const totalPrice = response.data.data.reduce((total, product) => {
          return total + (product.price * product.quantity);
        }, 0);
        setTotalPrice(totalPrice);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {showProductPages && (<Homepages  />)}
      {showCartPages && (<Cartpages />)}
      {showOrderPages && (
        <div className='max-w-md mx-auto h-screen'>
          <Header backtoHome={backtoHome} label={'Cart'} />
          <div  className='px-2 m-2 py-4 border rounded-xl shadow-sm'>
            <div className="flex items-center">
              <div className="grow">
                <p className="font-semibold text-lg">{name}</p>
                <div id="variant" className='inline-flex w-full gap-1'>
                  <p className='font-semibold text-base'>Quantity: {qty}</p>
                </div>
                <p className="font-semibold">Price: {orderPrice}</p>
              </div>
              <img src={imgUrl} alt="Image" className="w-20 h-20 rounded-sm" />
            </div>
            <div className='flex justify-between mt-2'>
              <div className='flex gap-2 items-center border shadow-md rounded-xl px-2.5'>
                <img src={Iconedit} className='w-4'/>
                <p className='font-medium text-base'>Edit</p>
              </div>
              <img src={Icondelete} className='w-8'/>
            </div>
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
            <button onClick={backtoHome} className='border py-2 px-2 rounded-lg shadow-md mx-2 text-base font-medium'>Add More</button>
          </div>

          <div className='border max-w-md mx-auto px-2 mt-3 mb-4 rounded-lg'>
            <p className='font-bold text-lg py-2'>Summary</p>
            <div className='border-t-2 flex py-2'>
              <p className='font-bold text-lg grow'>Total</p>
              <p className='font-bold text-lg'>{totalPrice}</p>
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
