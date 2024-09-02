import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import { NotFound } from "../../views/NotFound/NotFound";
import { Home } from "../../views/Home/Home";
import { Register } from "../../views/Register/Register";
import { Login } from "../../views/Login/Login";
import { Profile } from "../../views/Profile/Profile";
import { Feed } from "../../views/Feed/Feed";
import { Admin } from "../../views/Admin/Admin";

export const Body = () => {
  const passport = JSON.parse(localStorage.getItem("passport"));

  const isLoggedIn = () => {
    return !!passport;
  };

  let role = null;
  if (passport && passport.tokenData) {
    role = passport.tokenData.role;
  }
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={isLoggedIn() ? <><Navigate to="/feed" /></>: <Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
        {isLoggedIn() && role === "super_admin" && (
          <Route path="/admin" element={<Admin />} />
        )}
      </Routes>
    </>
  );
};
