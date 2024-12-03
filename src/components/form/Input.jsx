import React from 'react';

export default function Input({ placeholder }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-blue-400 bg-blue-100 text-xl py-5 pl-6 rounded-xl mb-8 placeholder-gray-40 shadow-md font-medium text-start focus:outline-none hover:bg-blue-200 transition-all duration-300"
      />
    </div>
  );
}
