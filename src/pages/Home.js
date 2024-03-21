import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Homepages from './Homepages';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://serenepos.temandigital.id/api/scanOrder/get')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <Homepages data={data} /> {/* Pass the fetched data to Homepages */}
    </div>
  )
}

export default Home;