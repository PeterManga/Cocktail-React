import React, { useEffect, useState } from 'react';
import { ButtonNav } from '../ButtonNav/ButtonNav';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../../common/UserContext/UserContext';
import './Header.css';

export const Header = () => {
  const location = useLocation();
  const { users, addUser } = useUserContext();

  const [token, setToken] = useState('');
  console.log(token);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken || '');
  }, []);

  const logOut = () => {
    setToken('');
  };

  const handleLogin = async () => {
    try {
      // Lógica de autenticación aquí
      // Puedes usar tu servicio de autenticación o cualquier otra lógica necesaria
  
      // Supongamos que la autenticación es exitosa
      const fakeToken = 'fakeToken123';
      setToken(fakeToken);
  
      // Agrega al usuario al contexto
      const fakeUser = { username: 'fakeUser', email: 'fake@email.com' };
      addUser(fakeUser);
  
      // Guarda el token en localStorage
      localStorage.setItem('token', fakeToken);
  
      // Redirige a /profile
      navigate('/profile');
    } catch (error) {
      // Manejo de errores si la autenticación falla
      console.error('Error en el inicio de sesión:', error);
      // Puedes mostrar un mensaje de error o realizar otras acciones
    }
  };
  

  return (
    <div className="headerDesign">
      <ButtonNav destination={'/'} name={'Home'} />

      {token !== "" ? (
        <div className="headerNavDesign">
          <ButtonNav destination={'/profile'} name={'Profile'} />
          <ButtonNav onClick={logOut}
                        destination={"/"}
                        name={"Log out"}
                    />
          {/* <div className="buttonDesign" >
            Log out
          </div> */}
        </div>
      ) : (
        <div className="headerNavDesign">
          <ButtonNav destination={'/register'} name={'Register'} />
          <ButtonNav destination={'/login'} name={'Login'} onClick={handleLogin} />
        </div>
      )}
    </div>
  );
};
