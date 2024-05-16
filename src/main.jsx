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
import GroupPage from './screens/Groups/GroupPage';
import WatchPage from './screens/WatchPage';
import JoinedGroupsPage from './screens/Groups/JoinedGroupsPage';


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
        path: "/groups",
        element: <GroupPage />,
        children: [
          {
            path: "/groups/:type",
            element: <GroupPage />,
          },
        ]
      },
      {
        path: "/watch",
        element: <WatchPage />,
        children: [
          {
            path: "/watch/:type",
            element: <WatchPage />,
          },
        ]
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
