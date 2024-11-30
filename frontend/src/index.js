// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Alteração aqui
import App from "./App";
import "./App.css";

// Usando o createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
