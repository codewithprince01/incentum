import React, { useState } from "react";
import "../../index.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [sessionId, setSessionId] = useState(null);

  const api_key = "0a27b9b3-b744-11ef-8b17-0200cd936042"; // Replace with your actual 2Factor API key

  // Function to send OTP
  const sendOtp = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const url = `https://2factor.in/API/V1/${api_key}/SMS/${phoneNumber}/AUTOGEN?OTPDeliveryMode=Text`;

    try {
      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();

      if (data.Status === "Success") {
        alert("OTP sent successfully via call!");
        setSessionId(data.Details); // Save session ID for OTP verification
      } else {
        alert(`Failed to send OTP. Message: ${data.Details}`);
      }
    } catch (error) {
      console.error("Error while sending OTP:", error.message);
      alert("Could not send OTP. Please try again later.");
    }
  };

  // Function to verify OTP
  const verifyOtp = async () => {
    if (!otp || !sessionId) {
      alert("Please enter the OTP and ensure it was sent.");
      return;
    }

    const url = `https://2factor.in/API/V1/${api_key}/SMS/VERIFY/${sessionId}/${otp}`;

    try {
      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();

      if (data.Status === "Success") {
        alert("OTP verified successfully!");
        // Continue with your login or further actions
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error while verifying OTP:", error.message);
      alert("Could not verify OTP. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-image grid grid-cols-1 xl:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col w-full p-6 xl:p-12">
        <div className="flex flex-col justify-center h-2/3 mx-auto">
          <h2 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
            Welcome <span className="text-blue-300">To The</span>{" "}
            <span className="text-blue-400">Realm Of</span> Modern{" "}
            <span className="text-blue-400">Banking!</span>
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">1Million+</h2>
              <p className="text-white text-lg">Registered Businesses</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">$1Billion+</h2>
              <p className="text-white text-lg">Monthly Payments Value</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">1Million+</h2>
              <p className="text-white text-lg">Daily Transactions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center h-5/6 p-6 bg-opacity-80">
        <div className="w-full max-w-md p-6 bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg">
          <h2 className="text-gray-200 text-3xl font-bold mb-4">Login</h2>
          <p className="text-gray-400 text-lg mb-4">Glad you're back!</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              verifyOtp();
            }}
          >
            <input
              type="tel"
              id="mobile"
              placeholder="Enter your Mobile Number"
              className="w-full p-3 text-lg mb-4 border border-gray-300 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              type="button"
              onClick={sendOtp}
              className="w-full py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition mb-4"
            >
              Get OTP
            </button>
            <input
              type="tel"
              placeholder="Enter OTP"
              className="w-full p-3 text-lg mb-4 border border-gray-300 rounded-lg bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Verify OTP
            </button>
            <p className="text-center text-gray-400 text-lg mt-6">
              Don't have an account?{" "}
              <Link
                to="/signup-page"
                className="text-blue-400 underline hover:text-blue-500"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
