import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";

export const Home = () => {
  const navigate = useNavigate();

  const navigateURL = (place) =>{
    navigate("/"+place)
  }
  return (
    <div id="container">
      <div id="content">
      <div id="container-left">
        <div>Welcome to social network</div>
        <img src="https://user-images.githubusercontent.com/46146748/63127038-62273800-bf7f-11e9-914f-bd1c431c76f2.png"/>
      </div>
      <div id="container-right">
        <Input type="button" name="register-button" value="Register" className="auth-button" click={() => navigateURL("register")}></Input>
        <Input type="button" name="login-button" value="Login" className="auth-button" click={() => navigateURL("login")}></Input>
      </div>
      </div>
    </div>
  );
};
