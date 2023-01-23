import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/operator1/futbol/seriaa" replace />,
  },
  {
    path: "/:operator/futbol/:league",
    element: <App />,
  },
  {
    path: "/:operator/basketball/:league",
    element: <App />
  },
  {
    path: "/:operator/tennis/:league",
    element: <App />,
  },
  {
    path: "/:operator/boxing/:league",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
