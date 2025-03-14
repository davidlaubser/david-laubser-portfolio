import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Enable smooth scrolling behavior
const enableSmoothScrolling = () => {
  document.documentElement.style.scrollBehavior = "smooth";
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {enableSmoothScrolling()}
    <App />
  </React.StrictMode>
);
