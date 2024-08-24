import { jwtDecode } from "jwt-decode";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import "./Login.css";
import { loginUser } from "../../services/apiCalls";
import { isTokenValid } from "../../utils/functions";
import { AttempsContext } from "../../context/AttempsProvider";

export const Login = () => {
  const navigate = useNavigate();
  const { number, setNumber } = useContext(AttempsContext);
  const [disable, setDisable] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        const numberAttemps = 3;
        setErrorMessage(
          response.message +
            " You have " +
            (numberAttemps - number) +
            " attempts left"
        );
        setNumber((prevNumber) => {
          let newNumber = prevNumber + 1;

          if (newNumber > numberAttemps) {
            setErrorMessage("Wait 1 minute to try again");
            setDisable(true);

            setTimeout(() => {
              setDisable(false);
              setErrorMessage("");
            }, 60000);

            newNumber = 0;
          }

          return newNumber;
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
        {errorMessage ? (
          <div className="error-message">{errorMessage}</div>
        ) : (
          <div />
        )}
        <Input
          name="register-button"
          type="button"
          className={disable ? "button-send disabled" : "button-send"}
          value="Register"
          click={login}
        />
      </div>
    </div>
  );
};
