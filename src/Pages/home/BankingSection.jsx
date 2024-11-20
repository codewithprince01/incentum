import React from "react";

const BankingSection = () => {
  return (
    <>
    <section className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-[#0a1a2a] text-white rounded-3xl py-16 px-16 max-w-7xl h-96 mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Enjoy A Banking Experience That Is Swift, Versatile, And Open.
      </h2>
      <p className="text-sm md:text-xl text-center mb-6">
        Join now with <span className="font-semibold">INCENTUM</span> to get the
        latest Banking Solutions and start mining now.
      </p>
      <button className="bg-white text-blue-800 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center">
        Get Started <span className="ml-2">→</span>
      </button>
      </section>

<div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-[#0d2138] p-8 ">
      {/* Box 1: Powerful Features */}
      <div className="flex flex-col bg-gradient-to-b from-[#0a1a2a] to-[#0d2138] text-white p-8 rounded-lg w-full md:w-1/3">
        <h2 className="text-2xl font-bold mb-6">Powerful Features</h2>
        <div className="flex justify-around">
          {/* ATM Icon */}
          <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full">
            <i className="text-xl">&#128179;</i>
          </div>
          {/* Bank Icon */}
          <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full">
            <i className="text-xl">&#127970;</i>
          </div>
          {/* Map Icon */}
          <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full">
            <i className="text-xl">&#128205;</i>
          </div>
        </div>
      </div>

      {/* Box 2: Seamless Onboarding */}
      <div className="flex flex-col bg-gradient-to-b from-[#0a1a2a] to-[#0d2138] text-white p-8 rounded-lg w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Seamless Onboarding</h2>
        <p className="text-sm text-gray-300 mb-8">
          Get started using a completely digital on-boarding process, and
          activate your OneCard in less than 5 minutes.
        </p>

        {/* Account Balance Card */}
        <div className="bg-[#111827] rounded-lg p-6">
          <div className="text-lg font-medium text-gray-400 mb-2">Account</div>
          <div className="text-3xl font-bold mb-4">₹4,692.94</div>
          <button className="w-full bg-[#374151] text-sm py-2 rounded-lg mb-6">
            Move Money
          </button>
          <div className="flex justify-between">
            {/* Individual Entrepreneur */}
            <div>
              <p className="text-sm font-medium">Individual Entrepreneur</p>
              <p className="text-lg font-bold">₹2,398.76</p>
              <p className="text-xs text-green-500">10.8% ↑</p>
            </div>
            {/* Revolt Card */}
            <div>
              <p className="text-sm font-medium">Revolt Card</p>
              <p className="text-lg font-bold">₹2,294.18</p>
              <p className="text-xs text-green-500">2.3% ↑</p>
            </div>
          </div>
        </div>
      </div>
    </div>      
    </>
  );
};

export default BankingSection;



<div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-[#0d2138] p-8 min-h-screen">
      {/* Box 1: Powerful Features */}
      <div className="flex flex-col bg-gradient-to-b from-[#0a1a2a] to-[#0d2138] text-white p-8 rounded-lg w-full md:w-1/3">
        <h2 className="text-2xl font-bold mb-6">Powerful Features</h2>
        <div className="flex justify-around">
          {/* ATM Icon */}
          <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full">
            <i className="text-xl">&#128179;</i>
          </div>
          {/* Bank Icon */}
          <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full">
            <i className="text-xl">&#127970;</i>
          </div>
          {/* Map Icon */}
          <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full">
            <i className="text-xl">&#128205;</i>
          </div>
        </div>
      </div>

      {/* Box 2: Seamless Onboarding */}
      <div className="flex flex-col bg-gradient-to-b from-[#0a1a2a] to-[#0d2138] text-white p-8 rounded-lg w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Seamless Onboarding</h2>
        <p className="text-sm text-gray-300 mb-8">
          Get started using a completely digital on-boarding process, and
          activate your OneCard in less than 5 minutes.
        </p>

        {/* Account Balance Card */}
        <div className="bg-[#111827] rounded-lg p-6">
          <div className="text-lg font-medium text-gray-400 mb-2">Account</div>
          <div className="text-3xl font-bold mb-4">₹4,692.94</div>
          <button className="w-full bg-[#374151] text-sm py-2 rounded-lg mb-6">
            Move Money
          </button>
          <div className="flex justify-between">
            {/* Individual Entrepreneur */}
            <div>
              <p className="text-sm font-medium">Individual Entrepreneur</p>
              <p className="text-lg font-bold">₹2,398.76</p>
              <p className="text-xs text-green-500">10.8% ↑</p>
            </div>
            {/* Revolt Card */}
            <div>
              <p className="text-sm font-medium">Revolt Card</p>
              <p className="text-lg font-bold">₹2,294.18</p>
              <p className="text-xs text-green-500">2.3% ↑</p>
            </div>
          </div>
        </div>
      </div>
    </div>