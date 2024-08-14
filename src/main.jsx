import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Upload from "./Pages/Upload.jsx";
import { DarkModeProvider } from "./Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/Upload",
        element: <Upload />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <GoogleOAuthProvider clientId="5551069316-uc3js1a837c2vmbbpg872p873to22lfs.apps.googleusercontent.com">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </GoogleOAuthProvider>
  </DarkModeProvider>
);
