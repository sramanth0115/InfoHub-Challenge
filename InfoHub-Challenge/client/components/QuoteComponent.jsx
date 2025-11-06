// src/components/QuoteComponent.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteComponent = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = () => {
      axios.get("http://localhost:3001/api/quote")
        .then(response => setQuote(response.data))
        .catch(error => console.log("Error fetching quote:", error));
    };

    fetchQuote(); // fetch quote when component loads

    const interval = setInterval(fetchQuote, 5000); // refresh every 5 seconds

    return () => clearInterval(interval); // cleanup when component unmounts
  }, []);

  return (
    <div className="card">
      <h2>Quote of the Moment</h2>
      {quote ? <p>"{quote.quote}"</p> : <p>Loading...</p>}
      <p>- {quote ? quote.author : ""}</p>
    </div>
  );
};

export default QuoteComponent;
