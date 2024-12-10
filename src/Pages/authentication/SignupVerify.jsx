// SignupVerify.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function SignupVerify() {
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || ""; // Auto-fill phone number

  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);

  const handleOtpChange = (index, value) => {
    const otpArray = otp.split("");
    otpArray[index] = value;
    setOtp(otpArray.join(""));
  };

  const handleGetOtp = () => {
    setShowOtpField(true);
    alert(`OTP sent to ${phoneNumber}`); // Simulate OTP sending
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);
    // Add OTP validation logic here
  };

  return (
    <div className="min-h-screen bg-image flex items-center justify-center p-6">
      <div className="w-full max-w-md p-6 bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          OTP Verification
        </h2>
        <p className="text-gray-400 text-lg mb-4">
          Phone Number: {phoneNumber}
        </p>

        {!showOtpField && (
          <button
            onClick={handleGetOtp}
            className="w-full py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition"
          >
            Get OTP
          </button>
        )}

        {showOtpField && (
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2 justify-center mt-6">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-10 h-10 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Verify OTP
            </button>
          </form>
        )}

        {showOtpField && (
          <p className="text-center text-gray-400 text-lg mt-6">
            Didn't receive the OTP?{" "}
            <button
              type="button"
              className="text-blue-400 underline hover:text-blue-500"
            >
              Resend OTP
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
