import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './Index.css';

// Aseguramos que el elemento root existe
const container = document.getElementById('root');

if (!container) {
  throw new Error('No se encontró el elemento root en el DOM');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);