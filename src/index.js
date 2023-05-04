import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { fullName as fl } from './App';
import { age } from './App';
import reportWebVitals from './reportWebVitals';

console.log(`fullname: ${fl}`);
console.log(`age: ${age}`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
