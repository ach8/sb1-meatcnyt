import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollToTop } from '../hooks/useScrollToTop';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ServicesCTA from '../components/services/ServicesCTA';

const Services: React.FC = () => {
  const { t } = useTranslation();
  useScrollToTop();

  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </div>
  );
};

export default Services;