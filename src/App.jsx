/**
 * Componente principal de la aplicación.
 * Configura la navegación mediante React Router y proporciona el contexto de usuario.
ç */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './common/Header/Header';
import { Body } from './pages/Body/Body';
import { UserProvider } from "./common/UserContext/UserContext";

function App() {
  return (
    // Proporciona el contexto de usuario a toda la aplicación
    <UserProvider>
      {/* Configura la navegación mediante React Router */}
      <Router>
        {/* Encabezado de la aplicación */}
        <Header />
        {/* Cuerpo de la aplicación */}
        <Body />
      </Router>
    </UserProvider>
  );
}

export default App;
