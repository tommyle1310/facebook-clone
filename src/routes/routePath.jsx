import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from '../screens/Login.jsx'
import Home from '../screens/Home.jsx'
import ErrorPage from "../screens/ErrorPage.jsx";
import MainLayout from "./Layout/mainLayout.jsx";

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './Layout/authLayout.jsx'


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
