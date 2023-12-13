// UserContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Creamos un contexto para el usuario
const UserContext = createContext();

// Proveedor de contexto que contiene el estado del usuario
const UserProvider = ({ children }) => {
  // Estado local para almacenar la lista de usuarios
  const [users, setUsers] = useState(new Map());

  // Función para agregar un nuevo usuario al estado
  const addUser = (user) => {
    setUsers((prevUsers) => new Map(prevUsers).set(user.username, user));
  };

  // Aquí puedes agregar más lógica según tus requisitos

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Función de gancho personalizada para acceder al contexto del usuario
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext debe ser utilizado dentro de un UserProvider');
  }
  return context;
};

export { UserProvider, useUserContext };
