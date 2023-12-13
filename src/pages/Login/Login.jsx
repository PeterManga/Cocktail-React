import React, { useState } from 'react';
import { CustomInput } from "../../common/CustomInput/CustomInput";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../common/UserContext/UserContext';

export const Login = () => {
  // Utilizamos el hook useNavigate para la navegación entre páginas
  const navigate = useNavigate();
  // Utilizamos el contexto de usuario para acceder a la lista de usuarios
  const { users } = useUserContext();

  // Estado para almacenar las credenciales del usuario (nombre de usuario y contraseña)
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  // Estado para manejar el mensaje de error
  const [mensajeError, setMensajeError] = useState("");

  // Función para manejar los cambios en los campos de entrada
  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  // Función para iniciar sesión
  const logMe = () => {
    // Buscamos al usuario en la lista de usuarios
    const user = users.get(credentials.username);

    // Verificamos si el usuario existe y la contraseña coincide
    if (user && user.password === credentials.password) {
      setMensajeError(""); // Reiniciamos el mensaje de error
      console.log(`¡Hola de nuevo ${user.username}!`);
      // Redirigimos a la página principal después de 2 segundos
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      // Mostramos un mensaje de error si el usuario o la contraseña son incorrectos
      setMensajeError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="loginDesign">
      {/* Componente personalizado para el campo de nombre de usuario */}
      <CustomInput
        type={"text"}
        name={"username"}
        placeholder={""}
        design={"inputDesign"}
        functionChange={InputHandler}
      />
      {/* Componente personalizado para el campo de contraseña */}
      <CustomInput
        type={"password"}
        name={"password"}
        placeholder={""}
        design={"inputDesign"}
        functionChange={InputHandler}
      />
      {/* Mostrar mensaje de error */}
      <div>{mensajeError}</div>
      {/* Botón para iniciar sesión */}
      <div className='buttonDesign' onClick={logMe}>
        Log me!
      </div>
    </div>
  );
};
