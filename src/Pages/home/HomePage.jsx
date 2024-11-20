
import React from 'react';
import BankingSection from './BankingSection';
import FAQ from './FAQSection'
import TrustedClients from './TestimonialsSection';
import HeroSection from './HeroSection';
import Header from '../../components/Header';
import FeaturesSection from './FeaturesSection';
import Footer from './FooterSection';



const HomePage = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
     <TrustedClients/>
    <BankingSection/>
    <FAQ/>
    <Footer/>
   
    </div>
  );
};

export default HomePage;