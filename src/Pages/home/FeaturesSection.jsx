import React from 'react';
import FeatureCard from '../../components/featuresCard';

const features = [
  { title: "Home Loan", description: "Find your dream home with our home loan solutions.", image: "/assets/home-loan.png" },
  { title: "Vehicle Loan", description: "Unlock your dream car with our vehicle loan solutions.", image: "/assets/vehicle-loan.png" },
  { title: "Personal Loan", description: "Unlock your work with our personal loan solutions.", image: "/assets/personal-loan.png" },
  { title: "Business Loan", description: "Unlock your startup/business with our business loan solutions.", image: "/assets/business-loan.png" },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Loan Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            
           
            <FeatureCard key={index} {...feature} />
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
