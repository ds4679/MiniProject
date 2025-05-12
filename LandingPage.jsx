import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/dr-icon.png'; // Make sure this path is correct

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-900 dark:to-gray-950 px-4 text-center">
      <img src={icon} alt="DR Icon" className="w-32 h-32 mb-6 drop-shadow-lg" />
      <h1 className="text-5xl font-bold text-blue-800 dark:text-white mb-4">
        Welcome to DR Detector
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
        Use AI to detect Diabetic Retinopathy with retina image analysis.
      </p>
      <div className="space-x-6">
        <Link to="/signin">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
