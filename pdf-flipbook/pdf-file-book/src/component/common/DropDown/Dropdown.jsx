import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ title, options, activeDropdown, toggleDropdown }) => {
  return (
    <div className="relative">
       
      <Link
        onClick={() => toggleDropdown(title)}
        to="#"
        className="text-white hover:bg-yellow-500 p-[5px] rounded px-3 py-2 cursor-pointer"
      >
        {title}
      </Link>
      {activeDropdown === title && (
        <div className="absolute right-0 mt-[25px] w-48 bg-white rounded-md shadow-lg z-10">
            
          {options.map((option, index) => (
            <Link
              key={index}
              to={option.link}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
