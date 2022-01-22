import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // エラーなどを検出してくれる
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);