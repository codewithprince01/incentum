import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-800 text-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome To The World Of AI Driven Financial Solutions</h1>
      <p className="text-lg mb-8">No annual fees, no service charges, and rewards on every transaction.</p>
      <div className="space-x-4">
        <button className="bg-white text-blue-800 px-4 py-2 rounded">Try Now</button>
        <button className="bg-transparent border border-white px-4 py-2 rounded">Features</button>
      </div>
    </section>
  );
};

export default HeroSection;