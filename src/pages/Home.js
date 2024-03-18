import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Homepages from './Homepages'

function Home() {

const [data, setData] = useState([]);

useEffect(() => {
  // Panggil API saat komponen dimuat
  axios.get('https://serenepos.temandigital.id/api/scanOrder/get')
    .then(response => {
      // Set data ke state
      setData(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []); // Efek ini hanya dijalankan sekali setelah render pertama

  return (
    <div>
      <Homepages/>
    </div>
  )
}

export default Home
