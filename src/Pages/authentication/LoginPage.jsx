import React, { useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userDetail = { phoneNumber };
    console.log("User detail:", userDetail);
  };

  return (
    <div className="min-h-screen bg-image grid grid-cols-1 xl:grid-cols-2">
      {/* Left Section */}

      <div className="flex flex-col w-full p-6 xl:p-12">
          {/* Hero Text */}
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
      <div className="flex items-center justify-center bg-opacity-80">
        <div className="w-full max-w-lg p-6 sm:p-10 bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-gray-200 text-3xl sm:text-4xl font-bold mb-4">
            Login
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mb-6">
            Glad you're back!
          </p>

          <form onSubmit={handleFormSubmit}>
            {/* Phone Number Input */}
            <div className="mb-6">
              <input
                type="tel"
                placeholder="Enter your Mobile Number"
                className="w-full p-4 text-lg border border-gray-300 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2 w-4 h-4"
              />
              <label
                htmlFor="rememberMe"
                className="text-gray-300 text-lg sm:text-xl"
              >
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white text-lg sm:text-xl font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Enter OTP
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <div className="w-1/3 border-t border-gray-500"></div>
              <span className="mx-4 text-gray-500 text-lg sm:text-xl font-bold">
                Or
              </span>
              <div className="w-1/3 border-t border-gray-500"></div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <Link to="https://www.google.com">
                <img
                  src="/googleLogo.png"
                  alt="Google"
                  className="w-10 sm:w-12 h-10 sm:h-12"
                />
              </Link>
              <Link to="https://www.facebook.com">
                <img
                  src="/fbLogo.png"
                  alt="Facebook"
                  className="w-10 sm:w-12 h-10 sm:h-12"
                />
              </Link>
            </div>

            {/* Signup Link */}
            <p className="text-center text-gray-400 text-lg sm:text-xl mt-8">
              Don't have an account?{" "}
              <Link
                to="/signup-Page"
                className="text-blue-400 underline hover:text-blue-500"
              >
                Signup
              </Link>
            </p>

            {/* Footer Links */}
            <div className="flex justify-center gap-4 text-gray-500 text-sm sm:text-base mt-6">
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