import React from 'react';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
      <button className="mt-4 text-blue-600 hover:underline">Learn More</button>
    </div>
  );
};

export default FeatureCard;