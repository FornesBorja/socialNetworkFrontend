import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from '../../views/NotFound/NotFound';
import { Home } from "../../views/Home/Home";


export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
