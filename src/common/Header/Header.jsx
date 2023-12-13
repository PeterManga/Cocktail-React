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


    return (
        <div className="headerDesign">
            <ButtonNav destination={'/'} name={'Home'} />

            {token !== "" ? (
                <div className="headerNavDesign">
                    <ButtonNav destination={'/profile'} name={'Profile'} />
                    <ButtonNav
                        destination={'/login'}
                        name={'Login'}
                        onClick={() => logOut()} // Cambia aquí
                    />
                    {/* <div className="buttonDesign" >
            Log out
          </div> */}
                </div>
            ) : (
                <div className="headerNavDesign">
                    <ButtonNav destination={'/register'} name={'Register'} />
                    <ButtonNav destination={'/login'} name={'Login'}  />
                </div>
            )}
        </div>
    );
};
