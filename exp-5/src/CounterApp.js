import React, { useState } from 'react';
import './CounterApp.css';  // Importing the CSS file

function CounterApp() {
  // Initialize the state to hold the counter value, starting at 0
  const [counter, setCounter] = useState(0);

  // Function to handle increment
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter-container">
      <h1>Simple Counter Application</h1>
      {/* Display the current counter value */}
      <div className="counter-display">
        <h2>{counter}</h2>
      </div>

      {/* Buttons to increment and decrement the counter */}
      <div className="button-container">
        <button className="btn increment" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn decrement" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
