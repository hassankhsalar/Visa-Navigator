import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import AddVisa from './pages/AddVisa.jsx';
import UpdateVisa from './pages/UpdateVisa.jsx';
import App from './App.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        index: true, // Default route (renders Home for '/')
        element: <Home />,
      },
      {
        path: "home", // Optional explicit route for '/home'
        element: <Home />,
      },
    ]
  },
  {
    path: "/addvisa",
    element: <AddVisa />,
  },
  {
    path: "/updatevisa",
    element: <UpdateVisa />,
  },
]);

// Use createRoot correctly
const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
