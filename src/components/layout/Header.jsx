import React from 'react';
import { Link } from "react-router-dom";
import rupee from '../../assets/rupee.png';

const Header = () => {
  return (
    <header className="bg-[#010059] p-6 flex justify-between items-center">
      <div className="text-white font-bold text-xl flex items-center space-x-5 ml-20 ">
        <img 
          src={rupee} 
          alt="Rupee Icon" 
          className="w-10 h-10 "
        />
      <span>
        <Link 
          to ='/HomePage'
        >
              INCENTUM
        </Link>
      </span>
      </div>
      <nav className="space-x-10 text-base mr-20 *">
      <Link 
          to ='/HomePage' className="text-white">Home
      </Link>
      <Link
          to ='/about' className="text-white">About
      </Link>
        <a href="/services" className="text-white">Services</a>
        <a href="/contact" className="text-white">Contact</a>
        <Link 
          to ='/Signup-Page'
         className="bg-yellow-500 px-4 py-2 rounded">
              Get Started
        </Link>

      </nav>
    </header>
  );
};

export default Header;