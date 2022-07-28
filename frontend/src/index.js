import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import configureStore from './store/store';
import App from './App';
import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  window.axios = axios;
  const store = configureStore();
  window.store = store;

})



