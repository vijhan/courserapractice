import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import './index.css';

function App() {
  
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=c85c8e2664cb51e16d3d83df98c1cd42`
  
  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Dallas</p>
          </div>
        </div>
        <div className='temp'>
          <h1>60F</h1>
        </div>
        <div className='description'>
          <p>Clouds</p>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>65F</p>
            <p className='bold'>Feels Like</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
            <p className='bold'>Humidity</p>
          </div>
          <div className='wind'>
            <p>12 mph</p>
            <p className='bold'>Wind Spped</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
