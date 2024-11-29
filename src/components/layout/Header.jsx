import React, { useState } from "react";
import rupee from "../../assets/rupee.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#010059] p-4 sm:p-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-white font-bold text-lg sm:text-xl flex items-center space-x-3">
        <img src={rupee} alt="Rupee Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
        <span>INCENTUM</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 lg:space-x-10 text-base">
        <a href="/" className="text-white hover:text-yellow-400 transition">
          Home
        </a>
        <a href="/about" className="text-white hover:text-yellow-400 transition">
          About
        </a>
        <a href="/services" className="text-white hover:text-yellow-400 transition">
          Services
        </a>
        <a href="/contact" className="text-white hover:text-yellow-400 transition">
          Contact
        </a>
        <button className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition">
          Get Started
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#010059] text-white shadow-md md:hidden flex flex-col space-y-4 p-6">
          <a
            href="/"
            className="hover:text-yellow-400 transition text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-yellow-400 transition text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/services"
            className="hover:text-yellow-400 transition text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-400 transition text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button
            className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
