import React from 'react';
import Hero from '../components/home/Hero';
import ValueProposition from '../components/home/ValueProposition';
import ServicesSection from '../components/home/ServicesSection';
import Testimonials from '../components/home/Testimonials';
import CtaBanner from '../components/home/CtaBanner';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <Hero />
      <ValueProposition />
      <ServicesSection />
      <Testimonials />
      <CtaBanner />
    </div>
  );
};

export default Home;