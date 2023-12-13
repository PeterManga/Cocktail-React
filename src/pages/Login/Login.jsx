import React, { useState } from 'react';
import { CustomInput } from "../../common/CustomInput/CustomInput";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../common/UserContext/UserContext';

export const Login = () => {
  const navigate = useNavigate();
  const { users } = useUserContext();

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [mensajeError, setMensajeError] = useState("");

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const logMe = () => {
    const user = users.get(credentials.username);

    if (user && user.password === credentials.password) {
      setMensajeError("");
      console.log(`Hola de nuevo ${user.username}...`);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setMensajeError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="loginDesign">
      <CustomInput
        type={"text"}
        name={"username"}
        placeholder={""}
        design={"inputDesign"}
        functionChange={InputHandler}
      />
      <CustomInput
        type={"password"}
        name={"password"}
        placeholder={""}
        design={"inputDesign"}
        functionChange={InputHandler}
      />
      <div>{mensajeError}</div>
      <div className='buttonDesign' onClick={logMe}>
        Log me!
      </div>
    </div>
  );
};
