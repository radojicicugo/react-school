import { HunelProvider, HunelCreditCard } from 'reactjs-credit-card';
import './index.css';
import App from './App'
import React from 'react';
import ReactDOM from 'react-dom'



const hunel = new HunelCreditCard();

ReactDOM.render(
  <HunelProvider config={hunel}>
    <App />
  </HunelProvider>,
  document.getElementById('root')
);