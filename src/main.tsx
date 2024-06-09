// src/index.tsx
import App from "./App";
import "./main.css"; // You can add global styles here
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container); 
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
