import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import VisaCards from '../components/VisaCards';

const Home = () => {
  const visaData = useLoaderData(); // Fetch data from loader
  console.log("Visa Data:", visaData);

  

  return (
    <div className="">
        <div className='w-11/12 h-62 md:w-9/12 lg:w-6/12 border-2 mx-auto text-blue-500'>
            <h2 className='text-2xl font-semibold my-3 text-center'>"The world is a book, and those who do not travel read only one page."
            — Saint Augustine</h2>
            <Banner></Banner>
        </div>
        <div>
        <h2 className='text-2xl font-semibold my-3 text-center text-blue-500'>Latest Visas</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto'>
            {visaData.map(visa => <VisaCards key={visaData._id} visa={visa}></VisaCards>)}
        </div>

    </div>
  );
};

export default Home;
