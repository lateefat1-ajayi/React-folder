import React, { useState } from 'react'
import axios from 'axios'
import { TiWeatherCloudy, TiWeatherStormy, TiWeatherSunny } from 'react-icons/ti'


const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

const Weather = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const getWeather = async () => {
        try {
            const response = await axios.get(
                API_URL,
                {
                    params:{
                        q: city,
                        appid: API_KEY,
                        units: "metric",
                    }
                }
             )
             setWeather(response.data);
             
             setError("");
        } catch (error) {
            setWeather(null);
             setError("City not found. Try another city");
             console.error(error);
        }
    }
    console.log(weather);
  return (
    <div className='flex flex-col items-center justify-center gap-4 pt-11'>
      <h1 className='font-bold text-3xl'>🌤️ Weather</h1>
      <div >
      <input className='rounded-sm border text-center outline-none p-2 ' type="text" placeholder='Enter city...' value={city} onChange={(e) => setCity(e.target.value)}/>
      <button className='bg-amber-600 p-2 rounded-md text-white ml-2 hover:bg-amber-700 hover:-translate-y-1.5 duration-400 ' onClick={getWeather}>Get Weather</button>
      </div>

      
      {error && <p className='text-red-500'>{error}</p> }

      {weather && (
        <div className='border p-5 flex flex-col items-center justify-center gap-2 bg-white rounded-3xl hover:-translate-y-1.5 duration-500 shadow-xl'>
            <h2 className='font-semibold text-2xl'>{weather.name}, {weather.sys.country}</h2>
            <p>
                <strong>{weather.weather[0].main}</strong> -
                {weather.weather[0].description}
            </p>
            <p><TiWeatherCloudy/> Temperature: {weather.main.temp}°</p>
            <p><TiWeatherStormy/> Humidity: {weather.main.humidity}%</p>
            <p><TiWeatherSunny/> Wind speed: {weather.wind.speed}m/s</p>
        </div>
      )}
    </div>
  )
}

export default Weather
