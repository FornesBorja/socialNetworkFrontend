import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div id="container">
      <div id="content">
      <div id="container-left">
        <div>Welcome to social network</div>
        <img src="https://user-images.githubusercontent.com/46146748/63127038-62273800-bf7f-11e9-914f-bd1c431c76f2.png"/>
      </div>
      <div id="container-right">
        <button>Register</button>
        <button>Log in</button>
      </div>
      </div>
    </div>
  );
};
