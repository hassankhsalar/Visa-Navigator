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
import AllVisas from './pages/AllVisas.jsx';
import VisaDetails from './pages/VisaDetails.jsx';  // Import VisaDetails page
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import MyVisaApplications from './pages/MyVisaApplications.jsx';
import NotFound from './pages/NotFound.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import MyAddedVisa from './pages/MyAddedVisa.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          try {
            const response = await fetch('http://localhost:5000/visa');
            if (!response.ok) {
              throw new Error('Failed to fetch visa data');
            }
            return response.json();
          } catch (error) {
            console.error('Error fetching data:', error);
            return [];
          }
        },
      },
      {
        path: '/allvisas',
        element: <AllVisas></AllVisas>,
        loader: async () => {
          try {
            const response = await fetch('http://localhost:5000/visa');
            if (!response.ok) {
              throw new Error('Failed to fetch all visa data');
            }
            return response.json();
          } catch (error) {
            console.error('Error fetching all visas:', error);
            return [];
          }
        },
      },
      {
        path: "/visa-details/:id", // Dynamic route for Visa Details
        element: <PrivateRoute>
           <VisaDetails></VisaDetails>,
        </PrivateRoute>, 
        loader: async ({ params }) => {
          const { id } = params;  // Get visa ID from the URL
          try {
            const response = await fetch(`http://localhost:5000/visa/${id}`);
            if (!response.ok) {
              throw new Error("Failed to fetch visa details");
            }
            return response.json();  // Return the visa data to the VisaDetails component
          } catch (error) {
            console.error("Error fetching visa details:", error);
            return null;  // Handle error gracefully if fetching fails
          }
        }
      },
      {
        path: '/addvisa',
        element: (
          <PrivateRoute>
              <AddVisa />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-applications',
        element: (
          <PrivateRoute>
            <MyVisaApplications />
          </PrivateRoute>
        ),
      },
      {
        path: '/myaddedvisa',
        element: (
          <PrivateRoute>
            <MyAddedVisa />
          </PrivateRoute>
        ),
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/forgotpassword',
    element: <ForgotPassword />,
  },
  {
    path: '/updatevisa/:id',
    element: (
      <PrivateRoute>
        <UpdateVisa />
      </PrivateRoute>
    ),
    loader: async ({ params }) => {
      const { id } = params;
      try {
        const response = await fetch(`http://localhost:5000/visa/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch visa data for update');
        }
        return response.json();
      } catch (error) {
        console.error('Error fetching visa data for update:', error);
        return null;
      }
    },
  },
]);


// Use createRoot correctly
const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
