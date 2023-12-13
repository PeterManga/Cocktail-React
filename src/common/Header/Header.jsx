// Importa hooks y componentes y css
import React, { useEffect, useState } from 'react';
import { ButtonNav } from '../ButtonNav/ButtonNav';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../../common/UserContext/UserContext';
import './Header.css';


export const Header = () => {
    // Obtiene la ubicación actual usando el hook useLocation
    const location = useLocation();
    // Obtiene la información del contexto de usuario usando el hook useUserContext
    const { users, addUser } = useUserContext();

    // Estado local para almacenar el token
    const [token, setToken] = useState('');
    console.log(token);

    // Efecto para cargar el token desde el almacenamiento local al montar el componente
    useEffect(() => {
        // Obtiene el token almacenado en localStorage
        const storedToken = localStorage.getItem('token');
        // Establece el token en el estado local, o establece una cadena vacía si no hay token almacenado
        setToken(storedToken || '');
    }, []);

    // Función para manejar el cierre de sesión
    const logOut = () => {
        // Establece el token en una cadena vacía
        setToken('');
    };

    // Devuelve el JSX que representa la barra de navegación
    return (
        <div className="headerDesign">
            {/* Botón de navegación para la página de inicio */}
            <ButtonNav destination={'/'} name={'Home'} />

            {/* Condicionalmente renderiza la sección de navegación según la existencia del token */}
            {token !== "" ? (
                // Sección de navegación para usuarios autenticados
                <div className="headerNavDesign">
                    <ButtonNav destination={'/profile'} name={'Profile'} />
                    {/* Cambia el manejo del clic en el botón de inicio de sesión */}
                    <ButtonNav
                        destination={'/login'}
                        name={'Login'}
                        onClick={() => logOut()}
                    />
                    
                </div>
            ) : (
                // Sección de navegación para usuarios no autenticados
                <div className="headerNavDesign">
                    <ButtonNav destination={'/register'} name={'Register'} />
                    <ButtonNav destination={'/login'} name={'Login'} />
                </div>
            )}
        </div>
    );
};
