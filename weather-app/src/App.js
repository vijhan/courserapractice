import React, {useState} from 'react';
import Weather from './components/Weather';
import { getWeatherData } from './services/WeatherService';
import './App.css';
import './index.css';

function App() {
  const [data,setData] = useState({});
  const [location,setLocation] = useState('');
  const [error, setError] = useState(false);
 


const searchLocation = (event) => {
      if(event.key === 'Enter') {
  
          getWeatherData(location).then((response) => {
          setData(response.data)
          console.log(response.data)
          setError(false)
          }).catch(function (error) {
            console.log(error.toJSON());
            setError(true);
        });
        
        setLocation('');
      }
  }
  
  
  return (
    <div className="app">
      <div className='search'>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter City/State'
        type='text'
        />
      </div>
      <div className='container'>
      
      {error ? <p>There was an error loading your data</p> : <Weather w={data}/>}
    
      </div>
    </div>
  );
}

export default App;
