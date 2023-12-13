import React, { useEffect, useState } from "react";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import "./Register.css";
import { useUserContext } from '../../common/UserContext/UserContext';
import { validate } from "../../services/useful";

export const Register = () => {
  const [interruptor, setInterruptor] = useState(false);
  const { addUser } = useUserContext();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
    age: "",
    phone: "",
  });
  const [credentialsError, setCredentialsError] = useState({
    usernameError: "",
    passwordError: "",
    password2Error: "",
    emailError: "",
    ageError: "",
    phoneError: "",
  });

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

  const checkError = (e) => {
    let error = "";

    error = validate(e.target.name, e.target.value);

    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));

    if (error === "" && e.target.name === "email") {
      setInterruptor(true);
    }
  };

  const registerUser = () => {
    if (validateCredentials()) {
      const newUser = {
        username: credentials.username,
        password: credentials.password,
        email: credentials.email,
        age: credentials.age,
        phone: credentials.phone,
      };

      addUser(newUser);

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

  const validateCredentials = () => {
    const { username, password, password2, email, age, phone } = credentials;

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
        <div>{credentialsError.usernameError}</div>

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
        <div className="msgError">{credentialsError.passwordError}</div>

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
        <div>{credentialsError.password2Error}</div>

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
        <div>{credentialsError.ageError}</div>

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
        <div>{credentialsError.phoneError}</div>

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
        <div>{credentialsError.emailError}</div>

        {interruptor && (
          <>
            {/* Aquí puedes agregar otros campos o lógica según tus requisitos */}
          </>
        )}

        <div className='buttonDesign' onClick={registerUser}>
          Registrarse
        </div>
      </div>
    </div>
  );
};
