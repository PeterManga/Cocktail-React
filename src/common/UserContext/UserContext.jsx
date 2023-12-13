import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? new Map(JSON.parse(storedUsers)) : new Map();
  });

  const addUser = (user) => {
    console.log('Usuarios antes de agregar:', users);
    setUsers((prevUsers) => {
      const newUsers = new Map([...prevUsers, [user.username, user]]);
      localStorage.setItem('users', JSON.stringify(Array.from(newUsers.entries())));
      console.log('Usuarios después de agregar:', newUsers);
      return newUsers;
    });
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
