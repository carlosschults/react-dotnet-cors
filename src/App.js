import { useState, useEffect } from 'react';

function App() {
  const [forecastItems, setForecastItems] = useState([]);

  async function fetchForecastHandler(){
    const response = await fetch('https://localhost:7246/WeatherForecast');
    const data = await response.json();

    const transformedForecast = data.map((x) => {
        return {
            id: Math.random(),
            date: x.date.split('T')[0],
            temperature: x.temperatureC
        };
    });

    setForecastItems(transformedForecast);
  }

  useEffect(() => {
    fetchForecastHandler()
}, []);

  return (
    <div>
        <ul>
        {forecastItems.map(x => <li key={x.id}>Date: {x.date} - Temperature: {x.temperature}°C</li>)}
        </ul>
    </div>
  );
}

export default App;
