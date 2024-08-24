import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Register.css"
import { Input } from '../../components/Input/Input.jsx'
import { registerUser } from '../../services/apiCalls.js'

export const Register = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    console.log("Handle Change");

    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function register() {
    try {
      console.log(credentials);

      const response = await registerUser(credentials);

      if (response.success) {
        navigate("/login");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div id="container">
      <div className="form">
        <div className="title">Register</div>
        <Input
          name="email"
          label="Introduce your email"
          change={handleChange}
        />
        <Input
          name="password"
          type="password"
          label="Introduce your password "
          change={handleChange}
        />
        <Input
          name="register-button"
          type="button"
          className="button-send"
          value="Register"
          click={register}
        />
      </div>
    </div>
  );
};
