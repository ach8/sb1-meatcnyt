import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Puzzle, Award } from 'lucide-react';
import { colors } from '../../utils/colors';
import BackgroundGradient from '../ui/BackgroundGradient';
import ValueCard from './ValueCard';

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Efficient Solutions",
      description: "Save time and reduce costs with intelligent automation."
    },
    {
      icon: <Puzzle className="w-12 h-12" />,
      title: "Custom Integrations",
      description: "Tailored to fit your unique business needs."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Expert Support",
      description: "Our team ensures a seamless transition to AI."
    }
  ];

  return (
    <section className="py-20 relative">
      <BackgroundGradient
        colors={[colors.neon.green, colors.neon.blue]}
        className="from-gray-950 to-gray-900"
        reversed
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
          Why Choose Flow AI?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <ValueCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;