import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./global.css";
import App from "./App.tsx";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
