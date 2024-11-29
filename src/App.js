import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';
import './App.css'; // Імпортуємо CSS-стилі

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="counter-box">
        <h1>Value: {count}</h1>
        <div className="button-container">
          <button className="counter-button" onClick={() => dispatch(decrement())}>
            -
          </button>
          <button className="counter-button" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
