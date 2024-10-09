import React from 'react';
import book from "../../assets/banner/book.png";
import bg from "../../assets/banner/Framebg.jpg";
import UploadPage from '../UploadPdf/Uploadpdf';

const Banner = () => {
  return (
    <>
    <div
      className='bg-gray-800 py-12 relative overflow-hidden bg-cover bg-center'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        <div className="mb-8 md:mb-0 md:w-[50%]">
          <h1 className="text-[30px] md:text-[40px] text-yellow-500 font-bold mb-4">Welcome to Our Platform</h1>
          <h2 className="text-[25px] md:text-[35px] font-medium mb-4">
            Flipbook and PDF Viewer for WordPress & HTML
          </h2>
          <p className="mb-6 text-base md:text-lg">
            Create beautiful online page flip catalogs, magazines, and brochures. Transform your PDFs into online flipping books.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded shadow-lg hover:bg-yellow-400 transition duration-200">
              View
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded shadow-lg hover:bg-gray-500 transition duration-200">
              Try Your PDF
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={book}
            alt="Banner"
            className="w-[260px] md:w-auto h-auto transition-transform duration-300 hover:scale-105" 
          />
        </div>
      </div>
   
    </div>
    <div>
      <UploadPage/>
    </div>
    </>
  );
};

export default Banner;
