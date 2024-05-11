import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './routes/Layout/mainLayout';
import ErrorPage from './screens/ErrorPage';
import Home from './screens/Home';
import AuthLayout from './routes/Layout/authLayout';
import Login from './screens/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
