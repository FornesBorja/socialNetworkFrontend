import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {AttempsProvider } from "./context/AttempsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AttempsProvider>
    <App />
    </AttempsProvider>
    </BrowserRouter>
  </StrictMode>
);
