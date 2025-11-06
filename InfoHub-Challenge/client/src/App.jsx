// src/app.jsx
import React from "react";
import QuoteComponent from "../components/QuoteComponent";
import WeatherComponent from "../components/WeatherComponent";
import CurrencyComponent from "../components/CurrencyComponent";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="welcome_home">Welcome to InfoHub</h1>
      <QuoteComponent />
      <WeatherComponent />
      <CurrencyComponent />
    </div>
  );
};

export default App;

