import React, { useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userDetail = { name, phoneNumber, email, pincode };
    console.log("User detail:", userDetail);
  };

  return (
    <div className="min-h-screen bg-image grid grid-cols-1 xl:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col w-full p-6 xl:p-12">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            Welcome{" "}
            <span className="text-blue-300">To The</span>{" "}
            <span className="text-blue-400">Realm Of</span> Modern{" "}
            <span className="text-blue-400">Banking!</span>
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">1Million+</h2>
              <p className="text-white text-base sm:text-lg">Registered Businesses</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">$1Billion+</h2>
              <p className="text-white text-base sm:text-lg">Monthly Payments Value</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">1Million+</h2>
              <p className="text-white text-base sm:text-lg">Daily Transactions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      {/* Right Section - Form */}
<div className="flex items-center justify-center bg-opacity-80">
  <div className="w-full max-w-md p-4 sm:p-6 bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg">
    <h2 className="text-gray-200 text-2xl sm:text-3xl font-bold mb-3">
      Signup
    </h2>
    <p className="text-gray-400 text-base sm:text-lg mb-4">
      Just a few details to get you started!
    </p>

    <form onSubmit={handleFormSubmit}>
      {/* Name Input */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 text-base border border-gray-300 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Phone Number Input */}
      <div className="mb-3">
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 text-base border border-gray-300 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      {/* Email Input */}
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email ID"
          className="w-full p-3 text-base border border-gray-300 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Pincode Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your area Pincode"
          className="w-full p-3 text-base border border-gray-300 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2.5 bg-blue-600 text-white text-base font-bold rounded-lg hover:bg-blue-700 transition"
      >
        Signup
      </button>

      {/* Divider */}
      <div className="flex items-center justify-center my-5">
        <div className="w-1/3 border-t border-gray-500"></div>
        <span className="mx-3 text-gray-500 text-base font-bold">Or</span>
        <div className="w-1/3 border-t border-gray-500"></div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        <Link to="https://www.google.com">
          <img
            src="/googleLogo.png"
            alt="Google"
            className="w-8 sm:w-10 h-8 sm:h-10"
          />
        </Link>
        <Link to="https://www.facebook.com">
          <img
            src="/fbLogo.png"
            alt="Facebook"
            className="w-8 sm:w-10 h-8 sm:h-10"
          />
        </Link>
      </div>

      {/* Login Link */}
      <p className="text-center text-gray-400 text-base sm:text-lg mt-6">
        Already registered?{" "}
        <Link
          to="/Login-page"
          className="text-blue-400 underline hover:text-blue-500"
        >
          Login
        </Link>
      </p>

      {/* Footer Links */}
      <div className="flex justify-center gap-3 mt-4 text-xs text-gray-400">
        <Link to="#">Terms & Conditions</Link>
        <Link to="#">Support</Link>
        <Link to="#">Customer Care</Link>
      </div>
    </form>
  </div>
</div>

    </div>
  );
}
