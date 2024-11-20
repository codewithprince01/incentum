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
    console.log("User detail :", userDetail);
  };

  return (
    <div className="bg-image grid grid-cols-1 xl:grid-cols-2 sm:bg bg ">
      <div className="w-full p-8 xl:p-0">
        <div>
          <h2 className="text-white sm:pt-[50px] text-xl sm:text-3xl md:text-4xl sm:ml-[90px] xl:mt-[90px] 2xl:ml-[170px] 2xl:mt-[50px] ">
            INCENTUM
          </h2>
        </div>
        <div className="mt-[80px] xl:mt-[100px] 2xl:ml-[150px] 2xl:mt-[200px] xl:ml-[50px] w-full 2xl:w-[900px] xl:w-[700] ">
          <div className="mb-[60px] sm:mb-3">
            <h2 className="sm:text-[40px] md:text-[50px] lg:text-[50px]  2xl:text-[70px] font-bold text-white">
              Welcome{" "}
              <span className="text-blue-300">To The</span>{" "}
              <span className="text-blue-400">Realm Of </span> Modern{" "}
              <span className="text-blue-400">Banking!</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3 xl:gap-14 2xl:gap-2 xl:mt-14 md:text-center gap-6 text-center ">
            <div className=" 2xl:border-r sm:border-b 2xl:border-b-transparent border-white text-center xl:pr-4">
              <h2 className="text-[50px] font-bold text-white -mb-4">
                1 Million+
              </h2>
              <p className="text-white text-[25px]">Registered Business</p>
            </div>
            <div className=" 2xl:border-r sm:border-b 2xl:border-b-transparent border-white text-center xl:pr-4">
              <h2 className="text-[50px] font-bold text-white -mb-4">
                $1 Billion+
              </h2>
              <p className="text-white text-[25px]">Monthly Payments Value</p>
            </div>
            <div className="text-center sm:border-b 2xl:border-b-transparent border-white">
              <h2 className="text-[50px] font-bold text-white -mb-4">
                1 Million+
              </h2>
              <p className="text-white text-[25px]">Daily Transactions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center xl:responsive">
        <div className="border border-blue-900 w-full max-w-[600px] sm:w-[500px] md:w-[550px] xl:w-[600px] h-auto 2xl:mt-[60px] xl:mt-[70px] xl:h-[860px] 2xl:h-[880px] 2xl:ml-[200px] p-8 shadow-4xl rounded-2xl bg-transparent  responsive signup">
          <div className="text-start mb-8">
            <h2 className="text-[40px] md:text-[60px] font-medium text-gray-200">
              Signup
            </h2>
            <p className="text-gray-200 text-lg md:text-2xl">
              Just some details to get you in.!
            </p>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 text-base md:text-[25px] border border-gray-300 rounded-2xl bg-transparent mb-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 text-base md:text-[25px] border border-gray-300 rounded-2xl bg-transparent mb-6"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-4 text-base md:text-[25px] border border-gray-300 rounded-2xl bg-transparent mb-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your area Pincode"
                className="w-full p-4 text-base md:text-[25px] border border-gray-300 rounded-2xl bg-transparent mb-6"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-gradient-to-r button text-white text-base md:text-[23px] font-medium rounded-xl hover:bg-blue-600"
            >
              Signup
            </button>

            <div className="flex justify-between items-center text-center mt-3 2xl:mt-6">
              <h1 className="border-b border-gray-500 w-[30%] sm:w-[44%]"></h1>
              <h3 className="text-gray-500 text-lg md:text-xl font-bold">Or</h3>
              <h1 className="border-b border-gray-800 w-[30%] sm:w-[44%]"></h1>
            </div>

            <div className="flex justify-center mt-2 xl:mt-[20px] items-center gap-4">
              <Link to={"https://www.google.com/"}>
                <img src="/googleLogo.png" className="w-8 sm:w-12 h-8 sm:h-12" />
              </Link>
              <Link to={"https://www.facebook.com/"}>
                <img src="/fbLogo.png" className="w-10 sm:w-16 h-8 sm:h-14 " />
              </Link>
            </div>
            <div className="text-center text-white text-base md:text-[22px] sm:text-[17px] mt-12 2xl:mt-[65px]">
              <h1>
                Already Registered?{" "}
                <Link to={"/login"} className="underline font-bold">
                  Login
                </Link>
              </h1>
            </div>
            <div className="flex flex-wrap justify-evenly text-white text-sm md:text-[22px] mt-4 sm:text-[18px]">
              <Link>Terms & Conditions</Link>
              <Link>Support</Link>
              <Link>Customer Care</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
