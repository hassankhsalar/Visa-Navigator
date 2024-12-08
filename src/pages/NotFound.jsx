import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <img
          src="https://via.placeholder.com/400x250?text=404+Error" 
          alt="404 illustration"
          className="mx-auto mt-6 rounded-lg shadow-lg"
        />
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
