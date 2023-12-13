/**
 * Punto de entrada de la aplicación React.
 * Configura el modo estricto de React y renderiza el componente principal (`App`).
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importa el componente principal de la aplicación.
import './index.css'; // Importa estilos CSS para la aplicación.

// Utiliza el método `createRoot` de ReactDOM para renderizar la aplicación en el elemento con ID 'root'.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Renderiza el componente principal (`App`) en modo estricto. */}
    <App />
  </React.StrictMode>,
);
