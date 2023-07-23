import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/scss/custom.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
