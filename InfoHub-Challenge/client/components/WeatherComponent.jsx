// src/components/WeatherComponent.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);

  // ✅ Counter State
  const [count, setCount] = useState(31);

  useEffect(() => {
    // ✅ Load existing count from localStorage
    const storedCount = localStorage.getItem("weatherCount");
    const updatedCount = storedCount ? Number(storedCount) + 1 : 31;

    // ✅ Update count state and localStorage
    setCount(updatedCount);
    localStorage.setItem("weatherCount", updatedCount);
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/api/weather")
      .then(response => setWeather(response.data))
      .catch(error => console.log("Error fetching weather:", error));
  }, []);

  return (
    <div className="card">
      <h2>Weather in Hyderabad</h2>

      

      {weather ? (
        <div>
          <p>Temperature: {weather.temperature}°C, Condition: {weather.condition}</p>
          {/* ✅ Display Counter */}
          <p>API call Limits: {count}/100</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
