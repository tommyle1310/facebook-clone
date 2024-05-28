import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './routes/Layout/mainLayout';
import MainLayoutError from './routes/Layout/mainLayoutError';
import ErrorPage from './screens/ErrorPage';
import Home from './screens/Home';
import AuthLayout from './routes/Layout/authLayout';
import Login from './screens/Auth/Login';
import SignUp from './screens/Auth/SignUp';
import Profile from './screens/Profile';
import GroupPage from './screens/Groups/GroupPage';
import WatchPage from './screens/WatchPage';
import { store, persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client'; // Import Socket.IO client
import Chat from './components/Chat/Chat';

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
      {
        path: "/chat",
        element: <Chat />
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
  },
  {
    path: "/signup",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
    ],
  }
]);

const socket = io(); // Create a Socket.IO instance

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// Handle Socket.IO events
socket.on('connect', () => {
  console.log('Connected to Socket.IO server');
});

socket.on('message', (data) => {
  console.log('Message received:', data);
  // Handle received message data
});

// Optionally, you can emit messages to the server
socket.emit('message', 'Hello from client');
