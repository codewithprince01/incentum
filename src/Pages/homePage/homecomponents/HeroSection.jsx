import React from 'react';
import { Link } from 'react-router-dom';
import backgroundimage from '../../../assets/backgroundimage.webp'; 

const HeroSection = () => {
  return (
    <>
     <div
      className=" min-h-screen bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundimage})`,
      backgroundSize: "110% 100%" }}
    >
      <div className="flex flex-col items-center justify-center h-full text-white">
      </div>
    <section className="bg-transparent text-white relative py-64 px-8 mb-96 md:px-16">
    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-blue-800/50 border border-blue-500 rounded-full px-8 py-1 mt-36  text-sm flex items-center gap-2">
  <span className=" text-xl text-white">✨</span>
  <span className="text-xl text-white">Next-Gen Business Banking</span>
  </div>

    {/* Main Content */}
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Welcome To The World Of <span className="text-blue-300">AI</span>
        <br />
        Driven Financial Solutions
      </h1>
      <p className="text-sm md:text-lg text-gray-300 mb-8">
        Our expertise and personalized support empower a seamless journey
        toward your financial goals.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
       
      <Link 
      to ='/Login-Page'
         className="bg-white text-blue-800 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
          Log In →
        </Link>

        <Link 
      to ='/Signup-Page'
        className="bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          Sign Up →
        </Link>


      </div>
    </div>
  </section>
  <div className="bg-transparent text-white min-h-screen">
</div>
</div>
</>
  );
};

export default HeroSection;
