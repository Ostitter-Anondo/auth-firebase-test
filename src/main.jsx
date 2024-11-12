import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginPage/Login";
import LoginForm from "./Pages/LoginPage/Components/LoginForm";
import RegForm from "./Pages/LoginPage/Components/RegForm";
import AuthProvider from "./AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Pages/Dashboard/Components/Profile";
import BlogManagement from "./Pages/Dashboard/Components/BlogManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/login/register",
        element: <RegForm />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: "/dashboard/blogcontrol",
        element: <PrivateRoute><BlogManagement /></PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
