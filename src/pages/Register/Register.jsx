import React, { useEffect, useState } from "react";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import "./Register.css";
import { useUserContext } from '../../common/UserContext/UserContext';
import { validate } from "../../services/useful";

export const Register = () => {
  // Estado para manejar el interruptor
  const [interruptor, setInterruptor] = useState(false);
  // Utilizamos el contexto de usuario para acceder a la función addUser
  const { addUser } = useUserContext();
  
  // Estado para almacenar las credenciales del usuario
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
    age: "",
    phone: "",
  });
  
  // Estado para manejar los mensajes de error de las credenciales
  const [credentialsError, setCredentialsError] = useState({
    usernameError: "",
    passwordError: "",
    password2Error: "",
    emailError: "",
    ageError: "",
    phoneError: "",
  });

  // Función para manejar los cambios en los campos de entrada
  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

  // Función para comprobar errores en los campos
  const checkError = (e) => {
    let error = "";

    // Validamos el campo utilizando la función de validación
    error = validate(e.target.name, e.target.value);

    // Actualizamos el estado de errores para el campo actual
    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));

    // Activamos el interruptor si no hay error y el campo es el correo electrónico
    if (error === "" && e.target.name === "email") {
      setInterruptor(true);
    }
  };

  // Función para registrar al usuario
  const registerUser = () => {
    // Validamos las credenciales antes de registrar al usuario
    if (validateCredentials()) {
      // Creamos un nuevo usuario con las credenciales
      const newUser = {
        username: credentials.username,
        password: credentials.password,
        email: credentials.email,
        age: credentials.age,
        phone: credentials.phone,
      };

      // Añadimos al nuevo usuario utilizando la función del contexto
      addUser(newUser);

      // Reiniciamos las credenciales y mensajes de error
      setCredentials({
        username: "",
        password: "",
        password2: "",
        email: "",
        age: "",
        phone: "",
      });
      setCredentialsError({
        usernameError: "",
        passwordError: "",
        password2Error: "",
        emailError: "",
        ageError: "",
        phoneError: "",
      });
    }
  };

  // Función para validar las credenciales
  const validateCredentials = () => {
    const { username, password, password2, email, age, phone } = credentials;

    // Validamos si algún campo está vacío
    if (!username || !password || !password2 || !email || !age || !phone) {
      setCredentialsError({
        usernameError: "Todos los campos son obligatorios.",
        passwordError: "",
        password2Error: "",
        emailError: "",
        ageError: "",
        phoneError: "",
      });
      return false;
    }

    // Validamos si las contraseñas coinciden
    if (password !== password2) {
      setCredentialsError({
        usernameError: "",
        passwordError: "Las contraseñas no coinciden.",
        password2Error: "Las contraseñas no coinciden.",
        emailError: "",
        ageError: "",
        phoneError: "",
      });
      return false;
    }

    // Otras validaciones según tus requisitos

    return true;
  };

  return (
    <div className="registerDesign">
      <div>
        {/* Componente personalizado para el campo de nombre de usuario */}
        <CustomInput
          type={"text"}
          name={"username"}
          placeholder={"Nombre de usuario"}
          design={`inputDesign ${
            credentialsError.usernameError !== "" ? "inputError" : ""
          }`}
          functionChange={InputHandler}
          functionCheck={checkError}
        />
        {/* Mensaje de error para el campo de nombre de usuario */}
        <div>{credentialsError.usernameError}</div>

        {/* Componente personalizado para el campo de contraseña */}
        <CustomInput
          type={"password"}
          name={"password"}
          placeholder={"Contraseña"}
          design={`inputDesign ${
            credentialsError.passwordError !== "" ? "inputError" : ""
          }`}
          functionChange={InputHandler}
          functionCheck={checkError}
        />
        {/* Mensaje de error para el campo de contraseña */}
        <div className="msgError">{credentialsError.passwordError}</div>

        {/* Componente personalizado para el campo de repetir contraseña */}
        <CustomInput
          type={"password"}
          name={"password2"}
          placeholder={"Repetir contraseña"}
          design={`inputDesign ${
            credentialsError.password2Error !== "" ? "inputError" : ""
          }`}
          functionChange={InputHandler}
          functionCheck={checkError}
        />
        {/* Mensaje de error para el campo de repetir contraseña */}
        <div>{credentialsError.password2Error}</div>

        {/* Componente personalizado para el campo de edad */}
        <CustomInput
          type={"text"}
          name={"age"}
          placeholder={"Edad"}
          design={`inputDesign ${
            credentialsError.ageError !== "" ? "inputError" : ""
          }`}
          functionChange={InputHandler}
          functionCheck={checkError}
        />
        {/* Mensaje de error para el campo de edad */}
        <div>{credentialsError.ageError}</div>

        {/* Componente personalizado para el campo de teléfono */}
        <CustomInput
          type={"text"}
          name={"phone"}
          placeholder={"Teléfono"}
          design={`inputDesign ${
            credentialsError.phoneError !== "" ? "inputError" : ""
          }`}
          functionChange={InputHandler}
          functionCheck={checkError}
        />
        {/* Mensaje de error para el campo de teléfono */}
        <div>{credentialsError.phoneError}</div>

        {/* Componente personalizado para el campo de correo electrónico */}
        <CustomInput
          type={"email"}
          name={"email"}
          placeholder={"Correo electrónico"}
          design={`inputDesign ${
            credentialsError.emailError !== "" ? "inputError" : ""
          }`}
          functionChange={InputHandler}
          functionCheck={checkError}
        />
        {/* Mensaje de error para el campo de correo electrónico */}
        <div>{credentialsError.emailError}</div>

        {/* Sección adicional que se mostrará si el interruptor está activado */}
        {interruptor && (
          <>
            {/*  otros campos o lógica según tus requisitos */}
          </>
        )}

        {/* Botón para registrarse */}
        <div className='buttonDesign' onClick={registerUser}>
          Registrarse
        </div>
      </div>
    </div>
  );
};
