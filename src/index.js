import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorProvider } from './contexts/color.context';
import { ImagesProvider } from './contexts/images.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorProvider>
      <ImagesProvider>
        <App />
      </ImagesProvider>
    </ColorProvider>
  </React.StrictMode>
);
