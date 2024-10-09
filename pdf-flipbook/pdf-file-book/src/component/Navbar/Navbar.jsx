import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoIosClose } from "react-icons/io";
import Dropdown from "../common/DropDown/Dropdown";
import dropdownOptions from "../common/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl  cursor-pointer">FlipSnap</div>

        {/* ---------- Desktop Menu ------------------ */}
        <div className="hidden md:flex ">
          
        <Dropdown 
           title="Home"
          />
          {/* ---------- Dropdown for Features ---------- */}
          
          <Dropdown
            title="Features"
            options={dropdownOptions.featuresOptions}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
          />
          <Dropdown
            title="Documentation"
            options={dropdownOptions.documentationOptions}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
          />
          <Dropdown
            title="Addons"
            options={dropdownOptions.addonsOptions}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
          />
        </div>

        {/* --------- Buy Now button --------- */}
        <div className="hidden md:block">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400">
            Buy Now
          </button>
        </div>

        {/* --------- Mobile Menu button --------- */}
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none"
          >
            {isOpen ? <IoIosClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ---------Side drawer for mobile menu --------- */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-4">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none"
          >
            <IoIosClose size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            to="/"
            className="text-white hover:bg-yellow-500 rounded px-3 py-2 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/feature"
            className="text-white hover:bg-yellow-500 rounded px-3 py-2 cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="/documentation"
            className="text-white hover:bg-yellow-500 rounded px-3 py-2 cursor-pointer"
          >
            Documentation
          </Link>
          <Link
            to="/addons"
            className="text-white hover:bg-yellow-500 rounded px-3 py-2 cursor-pointer"
          >
            Addons
          </Link>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 cursor-pointer">
            Buy Now
          </button>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
