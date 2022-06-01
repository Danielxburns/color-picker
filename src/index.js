import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RGBAProvider } from './contexts/rgba.context';
import { HSLAProvider } from './contexts/hsla.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RGBAProvider>
      <HSLAProvider>
        <App />
      </HSLAProvider>
    </RGBAProvider>
  </React.StrictMode>
);
