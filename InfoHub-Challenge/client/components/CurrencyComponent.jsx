// src/components/CurrencyComponent.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyComponent = () => {
  const [currency, setCurrency] = useState(null);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/currency?amount=${amount}`)
      .then(response => setCurrency(response.data))
      .catch(error => console.log("Error fetching currency data:", error));
  }, [amount]);

  return (
    <div className="card">
      <h2>Currency Conversion</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in INR"
      />
      {currency ? (
        <div>
          <p>USD: {currency.usd}</p>
          <p>EUR: {currency.eur}</p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CurrencyComponent;
