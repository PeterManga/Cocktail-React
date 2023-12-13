// routes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { Login } from '../Login/Login';
import { Cocktails } from '../Cocktails/Cocktails';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta por defecto que redirige a la página de inicio */}
      <Route path="*" element={<Navigate to="/" />} />
      
      {/* Ruta para la página de inicio */}
      <Route path="/" element={<Home />} />
      
      {/* Ruta para la página de detalles de cócteles con parámetro de ID */}
      <Route path="/cocktails/:id" element={<Cocktails />} />
      
      {/* Ruta para la página de registro */}
      <Route path="/register" element={<Register />} />
      
      {/* Ruta para la página de inicio de sesión */}
      <Route path="/login" element={<Login />} />
      
      {/* Ruta para la página de perfil */}
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
