import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { colors } from '../../utils/colors';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: "Flow AI helped us boost lead generation by 40%! Their team is exceptional.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp"
    },
    {
      quote: "The automation solutions provided by Flow AI have been game-changing for our business.",
      author: "Michael Chen",
      role: "CTO",
      company: "InnovateLabs"
    },
    {
      quote: "Implementing Flow AI's solutions increased our customer satisfaction by 60%.",
      author: "Emma Rodriguez",
      role: "Head of Operations",
      company: "GlobalTech"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(600px at 0% 0%, ${colors.neon.blue}15, transparent)`,
            `radial-gradient(600px at 100% 100%, ${colors.neon.green}15, transparent)`,
            `radial-gradient(600px at 0% 0%, ${colors.neon.blue}15, transparent)`
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
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
          {t('testimonials.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;