import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Components/Home';
import Login from './Components/Login';
import LoginForm from './Components/LoginPage/LoginForm';
import RegForm from './Components/LoginPage/RegForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
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
            element: <LoginForm />
          },
          {
            path: "/login/register",
            element: <RegForm />
          },
        ],
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
