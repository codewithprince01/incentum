import React from 'react';
import rupee from '../../assets/rupee.png';

const Header = () => {
  return (
    <header className="bg-[#010059] p-6 flex justify-between items-center">
      <div className="text-white font-bold text-xl flex items-center space-x-3 ml-20">
        <img 
          src={rupee} 
          alt="Rupee Icon" 
          className="w-10 h-10 "
        />
        <span>INCENTUM</span>
      </div>
      <nav className="space-x-10 text-base">
        <a href="/" className="text-white">Home</a>
        <a href="/about" className="text-white">About</a>
        <a href="/services" className="text-white">Services</a>
        <a href="/contact" className="text-white">Contact</a>
        <button className="bg-yellow-500 px-4 py-2 rounded">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;