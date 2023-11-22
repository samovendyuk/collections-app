import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Routes";
import { AuthProvider } from "./components/context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Suspense>
          <Router />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
