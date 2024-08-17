import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from '../../views/NotFound/NotFound';


export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
