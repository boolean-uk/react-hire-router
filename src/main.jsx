import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProfileView from './pages/PersonProfile';
import EditProfile from './pages/PersonProfile/components/HireForm';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/view/:id",
    element: <ProfileView />
  },
  {
    path: "/edit/:id",
    element: <EditProfile />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
