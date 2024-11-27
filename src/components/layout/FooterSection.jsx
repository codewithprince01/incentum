import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left Section */}
        <div className="col-span-2">
          <h1 className="text-3xl font-bold">INCENTUM</h1>
          <p className="mt-4 text-l">
            INCENTUM is the best platform to buy, sell, and exchange multiple loans with ease.
          </p>
          <div className="mt-6 flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 text-l text-black focus:outline-none rounded-3xl"
            />
            <button className="bg-blue-600 px-4 py-2 text-l font-bold rounded-3xl">
              Subscribe
            </button>
          </div>
        </div>

        {/* Center and Right Section */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Company Section */}
          <div>
            <h1 className="text-xl font-bold uppercase">Company</h1>
            <ul className="mt-4 space-y-2 text-l">
              <li>About</li>
              <li>Contact</li>
              <li>Affiliates</li>
              <li>Careers</li>
              <li>Reviews</li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-xl font-bold uppercase">Products</h3>
            <ul className="mt-4 space-y-2 text-l">
              <li>Buy</li>
              <li>Sell</li>
              <li>Swap</li>
              <li>Receive</li>
              <li>Gateway</li>
            </ul>
          </div>

          {/* Learn Section */}
          <div>
            <h3 className="text-xl font-bold uppercase">Learn</h3>
            <ul className="mt-4 space-y-2 text-l">
              <li>Blog</li>
              <li>Support</li>
              <li>Pricing</li>
              <li>Community</li>
              <li>Status</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-xl font-bold uppercase">Legal</h3>
            <ul className="mt-4 space-y-2 text-l">
              <li>AML Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400 mt-10 ml-24 pt-6 flex flex-col md:flex-row justify-between text-l">
       <p>Statutory legal information</p>
       <p className="mr-24">2024-2025 Incentum | Site Map | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
