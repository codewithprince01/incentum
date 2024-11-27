import React from "react";
import bankingSection from '../../../assets/bankingsection.webp'

const BankingSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-[#0a1a2a] text-white rounded-3xl py-14 px-16 max-w-7xl h-auto mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 text-center">
          Enjoy A Banking Experience That Is Swift, Versatile, And Open.
        </h2>
        <p className="text-sm md:text-xl text-center mb-6">
          Join now with <span className="font-semibold">INCENTUM</span> to get the
          latest Banking Solutions and start mining now.
        </p>
        <button className="bg-white text-blue-800 font-medium px-6 py-3 mt-4 rounded-lg hover:bg-gray-100 transition flex items-center">
          Get Started <span className="ml-3">→</span>
        </button>
      </section>

      <div className="  py-14 max-w-7xl h-auto mx-auto">
          <img
            src={bankingSection}
            alt="Sample Content"
            className="rounded-3xl shadow-3xl"
          />
        </div>
    </>
  );
};

export default BankingSection;
