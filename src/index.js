import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RGBAProvider } from './rgba.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RGBAProvider>
      <App />
    </RGBAProvider>
  </React.StrictMode>
);
