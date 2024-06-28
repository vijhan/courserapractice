import React from "react";

const Weather = ({w}) => {
    return (
        <div>
        <div className='top'>
          <div className='location'>
            <p>{w.name}</p>
          </div>
        </div>
        <div className='temp'>
          {w.main ? <h1>{w.main.temp}°F</h1> : null}
        </div>
        <div className='description'>
          {w.weather ? <p>{w.weather[0].main}</p> : null}
        </div>
        <div className='bottom'>
          <div className='feels'>
            {w.main ? <p className='bold'>{w.main.feels_like}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            {w.main ? <p className='bold'>{w.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {w.wind ? <p className='bold'>{w.wind.speed}mph</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        </div>
    )
}

export default Weather;