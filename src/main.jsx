import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './routes/Layout/mainLayout';
import MainLayoutError from './routes/Layout/mainLayoutError';
import ErrorPage from './screens/ErrorPage';
import Home from './screens/Home';
import AuthLayout from './routes/Layout/authLayout';
import Login from './screens/Login';
import Profile from './screens/Profile';
import GroupPage from './screens/GroupPage';


const router = createBrowserRouter([
  {
    path: "*",
    element: <MainLayoutError />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/groups/:id",
        element: <GroupPage />,
      },
      // {
      //   path: "/groups",
      //   element: <AllGroupPage />,
      // },
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
