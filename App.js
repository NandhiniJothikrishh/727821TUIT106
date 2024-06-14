
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [res, setRes] = useState(null);

  const fetchData = async (numberid) => {
    try {
      const res = await axios.get(`http://localhost:9876/numbers/${numberid}`);
      setRes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='div1'><h1>Average Calculator</h1></div>
      <p className='p1'><button onClick={() => fetchData('p')}>
        Prime Numbers
      </button></p>
      <p className='p2'><button onClick={() => fetchData('f')}>
         Fibonacci Numbers
         </button></p>
      <p className='p3'><button onClick={() => fetchData('e')}>Even Numbers</button></p>
      <p className='p4'><button onClick={() => fetchData('r')}> Random Numbers</button></p>
      {res && (
        <div>
          <h2>Prev Window State: {JSON.stringify(res.windowPrevState)}</h2>
          <h2>Curr Window State: {JSON.stringify(res.windowCurrState)}</h2>
          <h2>Nums: {JSON.stringify(res.numbers)}</h2>
          <h2>Average: {res.avg.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default App;