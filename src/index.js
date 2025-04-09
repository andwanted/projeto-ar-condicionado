import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe createRoot
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crie a raiz

root.render( // Use root.render
  <React.StrictMode>
    <App />
  </React.StrictMode>
);