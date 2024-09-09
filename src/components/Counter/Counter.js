import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./Counter.css";
const Counter = ({ initialCount = 0, debounceDelay = 3000 }) => {
  const { count, handleIncrement, handleDecrement, error, loading } =
    useCounter(initialCount, debounceDelay);

  return (
    <div className="container">
      <h1>Counter : {count}</h1>
      <div className="container__button">
        <button className="container__counter-button" onClick={handleIncrement}>
          Increment
        </button>
        <button className="container__counter-button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
      {error && <p className="container__error">{error}</p>}

      {loading && <p className="loading">Loading...</p>}
    </div>
  );
};

export default Counter;
