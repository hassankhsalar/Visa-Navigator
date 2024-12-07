import React from 'react';

const ForgotPassword = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              Forgot Password
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Enter your email address below, and we'll send you instructions to reset your password.
            </p>
            <form >
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Reset Email
              </button>
            </form>
            <div className="text-center mt-4">
              <a href="/login" className="text-blue-500 hover:underline">
                Back to Login
              </a>
            </div>
          </div>
        </div>
      );
    };


export default ForgotPassword;