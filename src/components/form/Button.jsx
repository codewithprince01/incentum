import React from 'react';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <Link to="/presonal-details-formFour">
      <div className="border border-[#1DA1F2] flex justify-center max-w-full w-[20%] rounded-xl m-auto mt-6 mb-10 bg-[#1DA1F2] hover:bg-[#3fdee6] cursor-pointer">
        <button className="text-3xl font-medium py-3 text-white w-full">
          Next
        </button>
      </div>
    </Link>
  );
}
