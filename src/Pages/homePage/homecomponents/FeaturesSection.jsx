import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import homeloan from '../../../assets/homeloan.webp';
import vehicleloan from '../../../assets/vehicleloan.webp';
import personalloan from '../../../assets/personalloan.webp';
import businessloan from '../../../assets/businessloan.webp';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("home-loan");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setActiveTab(id);
  };

  return (
    <div className="bg-[#e5e5e5]">
      {/* Header Navbar */}
      <div className="sticky top-0 z-10 ">
        <div className="container mx-auto flex justify-center py-6">
          <div className="flex bg-gradient-to-b from-[#f5fafe] to-[#ebecf6] shadow-md rounded-full px-6 py- space-x-6 border border-[#14296d]">
            {[
              { id: "home-loan", label: "Home Loan" },
              { id: "car-loan", label: "Car Loan" },
              { id: "personal-loan", label: "Personal Loan" },
              { id: "business-loan", label: "Business Loan" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-7 py-3 rounded-full text-xl font-semibold ${
                  activeTab === tab.id
                    ? "text-black font-bold bg-gradient-to-r from-[#f5fafe] to-[#ffffff]"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => scrollToSection(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Loan Sections */}
      <div className="container mx-auto p-4 space-y-10">
        {/* Home Loan */}
        <div id="home-loan" className="min-h-2 flex items-center justify-center">
          <div className="flex p-8 md:flex-row flex-col max-w-6xl">
            <div className="bg-blue-900 rounded-lg flex justify-center items-center md:w-1/2">
              <img
                src={homeloan}
                alt="Home Loan Graph"
                className="rounded-lg"
              />
            </div>
            <div className="p-9 md:w-2/3">
              <span className="bg-blue-900 text-white text-lg px-6 py-3 rounded-full">
                HOME LOAN
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mt-9">
                Find Your Dream <span className="text-blue-700">Home</span> With Our{" "}
                <span className="text-blue-700">Home Loan</span> Solution
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Owning a home should be a joyous experience, not a source of stress.
                We understand that purchasing a home is one of the most significant
                financial decisions you'll ever make. That’s why we’ve developed
                AI-powered home loan solutions that give you access...
              </p>
              <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl hover:bg-blue-200 transition">
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* Vehical Loan */}
        <div id="car-loan" className="min-h-2 flex items-center justify-center">
          <div className="flex p-8 md:flex-row flex-col max-w-6xl">
            <div className="bg-blue-900 rounded-lg flex justify-center items-center md:w-1/2">
              <img
                src={vehicleloan}
                alt="Car Loan Graph"
                className="rounded-lg"
              />
            </div>
            <div className="p-9 md:w-2/3">
              <span className="bg-blue-900 text-white text-lg px-6 py-3 rounded-full">
                VEHICLE LOAN
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mt-9">
                Unlock Your Dream <span className="text-blue-700">Car</span> With Our{" "}
                <span className="text-blue-700">Vehicle Loan</span> Solution
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Get competitive rates and flexible terms tailored to your needs.
                Whether you're a first-time buyer or looking to refinance, our
                expert team is here to guide you every step of the way.
              </p>
              <div className="mt-10">
              <Link
                to="/vehicle-loan"
                className="mt-10 px-6 py-3 bg-white text-black rounded-xl hover:bg-blue-200 transition"
              >
                Know More
              </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Loan */}
        <div id="personal-loan" className="min-h-2 flex items-center justify-center">
          <div className="flex p-8 md:flex-row flex-col max-w-6xl">
            <div className="bg-blue-900 rounded-lg flex justify-center items-center md:w-1/2">
              <img
                src={personalloan}
                alt="Personal Loan Graph"
                className="rounded-lg"
              />
            </div>
            <div className="p-9 md:w-2/3">
              <span className="bg-blue-900 text-white text-lg px-6 py-3 rounded-full">
                PERSONAL LOAN
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mt-9">
                Unlock Your <span className="text-blue-700">Work</span> With Our{" "}
                <span className="text-blue-700">Personal Loan</span> Solution!
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Get competitive rates and flexible terms tailored to your needs.
                Whether you're a first-time buyer or looking to refinance, our
                expert team is here to guide you every step of the way.
              </p>
              <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl hover:bg-blue-200 transition">
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* Business Loan */}
        <div id="business-loan" className="min-h-2 flex items-center justify-center">
          <div className="flex p-8 md:flex-row flex-col max-w-6xl">
            <div className="bg-blue-900 rounded-lg flex justify-center items-center md:w-1/2">
              <img
                src={businessloan}
                alt="Business Loan Graph"
                className="rounded-lg"
              />
            </div>
            <div className="p-9 md:w-2/3">
              <span className="bg-blue-900 text-white text-lg px-6 py-3 rounded-full">
                BUSINESS LOAN
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mt-9">
                Unlock Your Startup <span className="text-blue-700">/Business</span> With Our{" "}
                <span className="text-blue-700">Business Loan</span> Solution!
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Get competitive rates and flexible terms tailored to your needs.
                Whether you're a first-time buyer or looking to refinance, our
                expert team is here to guide you every step of the way.
              </p>
              <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl hover:bg-blue-200 transition">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
