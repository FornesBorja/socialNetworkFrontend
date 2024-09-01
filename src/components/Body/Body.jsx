import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import { NotFound } from "../../views/NotFound/NotFound";
import { Home } from "../../views/Home/Home";
import { Register } from "../../views/Register/Register";
import { Login } from "../../views/Login/Login";
import { Profile } from "../../views/Profile/Profile";
import { Feed } from "../../views/Feed/Feed";

export const Body = () => {
  const isLoggedIn = () => {
    return !!localStorage.getItem("passport");
  };
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={isLoggedIn() ? <><Navigate to="/feed" /></>: <Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </>
  );
};
