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
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/cocktails/:id" element={<Cocktails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};