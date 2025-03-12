import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./template/index.css";
import AppRoute from "./app/routes/AppRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoute />
  </StrictMode>
);
