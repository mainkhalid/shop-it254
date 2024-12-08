
import React from 'react';
import exclusive_image from '../assets/exclusive_image.jpg';

const Offers = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md p-6 w-full max-w-5xl mx-auto mb-8 m-6">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start space-y-4 md:w-1/2">
        <h1 className="font-bold text-4xl md:text-5xl leading-tight text-gray-800">
          Exclusive
        </h1>
        <h2 className="text-2xl font-medium text-gray-700">Offers for You</h2>
        <p className="text-gray-500 text-sm">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button 
        className="bg-green-500 hover:bg-green-600 text-white rounded-full py-2 px-6 text-lg font-bold transition duration-200 cursor-pointer">
          Check Now
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center md:w-1/2 mt-6 md:mt-0">
        <img
          className="w-full h-auto max-w-md rounded-lg shadow-lg object-cover"
          src={exclusive_image}
          alt="Exclusive Offers"
        />
      </div>
    </div>
  );
};

export default Offers;
