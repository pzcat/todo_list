import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalIconStyles } from './statics/iconfont/iconfont-css';
import { GlobalStyles } from './style.js';



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <GlobalIconStyles/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

