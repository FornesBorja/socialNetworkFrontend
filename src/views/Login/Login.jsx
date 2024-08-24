import React, { useContext, useState } from 'react'
import "./Login.css"
import { Input } from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom'
import { AttempsContext } from '../../context/AttempsProvider'

export const Login = () => {
    const navigate = useNavigate();
    const {number, setNumber}=useContext(AttempsContext)
    const [deshabilitado, setDeshabilitado] = useState(false);
  
    const [credentials, setCredentials] = useState({
      email: "",
      password: "",
    });
    function handleChange(e) {
        setCredentials((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }
      async function login() {
        try {
          const response = await loginUser(credentials);
    
          if (response.success) {
            const decodedToken = jwtDecode(response.token);
            const passport = {
              token: response.token,
              tokenData: decodedToken,
            };
            localStorage.setItem("passport", JSON.stringify(passport));
            isTokenValid(decodedToken.exp);
            navigate("/profile");
            setNumber(0);
          } else {
            setNumber(prevNumber => {
              const nuevoNumero = prevNumber + 1;
              if (nuevoNumero >= 3) {
                setDeshabilitado(true);
                setTimeout(() => {
                  setDeshabilitado(false);
                }, 6000); 
              }
              return nuevoNumero;
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    
  return (
    <div id="container">
    <div className="form">
      <div className="title">Login</div>
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
        click={login}
      />
    </div>
  </div>
  )
}
