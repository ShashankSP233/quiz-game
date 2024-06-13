import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // Ensure this import is correct

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // Call the function to report web vitals

// If you want to measure performance of your app, uncomment the line below
// Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
