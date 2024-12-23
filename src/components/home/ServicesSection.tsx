import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Mail, Database, Mic, Share2 } from 'lucide-react';
import { colors } from '../../utils/colors';
import ServiceCard from './ServiceCard';
import BackgroundGradient from '../ui/BackgroundGradient';
import { useServicesData } from '../../hooks/useServicesData';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const services = useServicesData();

  return (
    <section className="py-20 relative">
      <BackgroundGradient
        colors={[colors.neon.blue, colors.neon.green]}
        className="from-gray-900 to-gray-950"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {t('services.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.key}
              icon={service.icon}
              title={t(`services.items.${service.key}.title`)}
              description={t(`services.items.${service.key}.description`)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;