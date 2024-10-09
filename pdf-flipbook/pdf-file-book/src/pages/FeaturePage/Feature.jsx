import React from 'react';
import Navbar from '../../component/Navbar/Navbar';

const FeaturePage = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">About Page</h1>
      <p className="mt-4 text-lg text-gray-700">This is the About Page!</p>
    </div>
    </div>
  );
};

export default FeaturePage;
