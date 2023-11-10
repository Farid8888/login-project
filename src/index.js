import React from "react";
import {createRoot} from "react-dom/client";
import AuthContextProvider from "./Components/Auth-context/auth-context";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"))

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
