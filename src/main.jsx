import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import router from "./routes/Routes";
import FirebaseProvider from "./FirebaseAuthProvider/FirebaseProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
