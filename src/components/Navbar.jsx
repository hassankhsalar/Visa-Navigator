import logo from '../assets/Visa.png';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); 
  const [profile, setProfile] = useState({ email: '', photoURL: '' });

  useEffect(() => {
    if (user?.email) {
      fetch('https://visa-navigator-portal.vercel.app/users/' + user.email)
        .then((res) => res.json())
        .then((data) => {
          setProfile({
            email: data.email || user.email,
            photoURL: data.photoURL || '', 
          });
        })
        .catch((err) => console.error('Failed to fetch user profile:', err));
    }
  }, [user]);

  
  const handleLogOut = async () => {
    try {
      await logOut(); 
      setProfile({ email: '', photoURL: '' }); 
    } catch (err) {
      console.error('Failed to log out:', err);
    }
  };

  return (
    <div className="navbar bg-base-100 rounded-2xl">
      <div className="navbar-start">
        <img className='w-20' src={logo} alt="Logo" />
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addvisa">Add Visa</Link></li>
            <li><Link to="/allvisas">All Visa's</Link></li>
            <li><Link to="/myaddedvisa">My Added Visas</Link></li>
            <li><Link to="/my-applications">My Visa Applications</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-semibold px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/addvisa">Add Visa</Link></li>
          <li><Link to="/allvisas">All Visa's</Link></li>
          <li><Link to="/myaddedvisa">My Added Visas</Link></li>
          <li><Link to="/my-applications">My Visa Applications</Link></li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="flex items-center gap-4">
          {profile.email && (
            <span>{profile.email}</span>
          )}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            {profile.photoURL ? (
              <img src={profile.photoURL} alt="User Profile" className="w-full h-full" />
            ) : (
              <FaUserCircle className="w-full h-full" />
            )}
          </div>
        </div>
        {/* Conditional rendering of Login/Logout button */}
        {user ? (
          <button className="btn btn-primary" onClick={handleLogOut}>
            Log Out
          </button>
        ) : (
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
