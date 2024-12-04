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
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          try {
            const response = await fetch('http://localhost:5000/visa');
            if (!response.ok) {
              throw new Error("Failed to fetch visa data");
            }
            return response.json();
          } catch (error) {
            console.error("Error fetching data:", error);
            return null; // Or return an empty array to handle gracefully
          }
        },
      },
    ],
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
