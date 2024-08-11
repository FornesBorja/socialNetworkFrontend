import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Surfer } from '../Surfer/Surfer';
import "./Header.css"

export const Header = () => {
  const navigate = useNavigate();

  const passport = JSON.parse(localStorage.getItem("passport"));
  let token, role;
  if (passport) {
    token = passport.token;
    role = passport.tokenData.roleId;
  }
  return (
    <div>
      <div id="navbar" className='germania-one'>
        <Surfer path="/" classAdd="jacquard-24" >
        </Surfer>
        <div className="right-section">
        {token ? (
          <>
            <div className="log-button" onClick={() => {(localStorage.removeItem("passport")); navigate("/login")}}> LOGOUT </div>
          </>
        ) : (
          <>
            <Surfer classAdd="log-button" path="/register" content="Register" />
            <Surfer classAdd="log-button" path="/login" content="Login" />
          </>
        )}        
        </div>
      </div>
    </div>
  )
}
