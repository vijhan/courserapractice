import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

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
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
