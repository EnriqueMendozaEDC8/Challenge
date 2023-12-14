import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreditCardProvider from './lib/CreditCardProvider';

ReactDOM.render(
  <React.StrictMode>
    <CreditCardProvider>
      <App />
    </CreditCardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
