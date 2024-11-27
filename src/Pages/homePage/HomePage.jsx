
import React from 'react';
import BankingSection from './homecomponents/BankingSection.jsx';
import FAQ from './homecomponents/FAQSection.jsx'
import TrustedClients from './homecomponents/TestimonialsSection.jsx';
import HeroSection from './homecomponents/HeroSection.jsx';
import FeaturesSection from './homecomponents/FeaturesSection.jsx';
import EmiCalculator from './homecomponents/EmiCalculator.jsx';




const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturesSection/>
      <EmiCalculator/>
      <TrustedClients/>
      <BankingSection/>
      <FAQ/>
    </div>
  );
};

export default HomePage;