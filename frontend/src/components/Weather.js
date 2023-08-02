import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './styles.css';

const API_URL = 'http://localhost:8000/api/weather';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/weather', {
        params: {
          location: location,
        },
      });
      console.log(response.data);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  

  return (
    <div>
      <TextField
        label="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>

      {weatherData && (
  <div className="main-content">
    <h2>Weather in {weatherData.location}</h2>
    {weatherData.condition && <p>Condition: {weatherData.condition}</p>}
    {weatherData.temperature && <p>Temperature: {weatherData.temperature} °C</p>}
    {weatherData.humidity && <p>Humidity: {weatherData.humidity}%</p>}
    
  </div>
)}

    </div>
  );
};

export default Weather;
