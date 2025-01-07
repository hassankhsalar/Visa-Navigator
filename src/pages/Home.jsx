import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import VisaCards from '../components/VisaCards';
import Faq from '../components/Faq';
import About from '../components/About';

const Home = () => {
  const visaData = useLoaderData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visaData) {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [visaData]);

  const latestVisas = visaData ? visaData.slice(0, 6) : [];

  const handleSeeAllVisas = () => {
    navigate('/allvisas');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className=" min-h-screen flex flex-col bg-transparent text-text">
      {/* Theme Toggle Button */}
      <div className="fixed top-20 right-5">
        <button
          className="btn btn-sm bg-primary text-background hover:bg-accent"
          onClick={toggleTheme}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>

      <div className="w-11/12 h-62 md:w-11/12 lg:w-9/12 mx-auto text-sky-700 ">
        <h2 className="text-2xl w-9/12 mx-auto font-semibold my-3 text-center">
          "The world is a book, and those who do not travel read only one page." — Saint Augustine
        </h2>
        <Banner />
      </div>

      <div>
        <h2 className="text-2xl font-semibold my-3 text-center text-secondary">
          Latest Visas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12 mx-auto">
        {latestVisas.map((visa) => (
          <VisaCards key={visa._id} visa={visa} />
        ))}
      </div>

      <div className="w-8/12 mx-auto text-center">
        <button
          className="btn border-2 bg-secondary hover:text-white hover:bg-accent w-full my-6"
          onClick={handleSeeAllVisas}
        >
          All Visas
        </button>
      </div>

      {/* About Section */}
      <About></About>

      {/* FAQ Section */}
      <Faq></Faq>
    </div>
  );
};

export default Home;
