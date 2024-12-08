import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
  });
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { logInUser, signInWithGoogle } = useContext(AuthContext);
  
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
  
      
      const response = await fetch('http://localhost:5000/users/' + user.email);
      const userData = await response.json();
  
      if (!userData || !userData.photoURL) {
       
        await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: user.email, photoURL: user.photoURL }),
        });
      }
  
      navigate('/'); 
    } catch (err) {
      setError(err.message || 'Google login failed. Please try again.');
    }
  };

  
  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      return 'Password must have at least one uppercase letter.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must have at least one lowercase letter.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return '';
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = formData;

    
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }

    try {
      
      const userCredential = await createUser(email, password); 
      const user = userCredential.user; 

      
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      
      const newUser = {
        name,
        email,
        photoURL,
      };

      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        
        setError('');
        setPasswordError('');
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to save user to database.');
      }
    } catch (err) {
      setError(err.message || 'Failed to register. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register to Visa Navigator</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700 font-medium mb-2">
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              placeholder="Enter your photo URL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {passwordError && (
              <p className="text-red-600 text-sm mt-2">{passwordError}</p>
            )}
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full mb-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Register
            </button>

            <button
                onClick={handleGoogleSignIn}
                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Continue with Google
              </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
