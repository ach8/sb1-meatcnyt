import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import NeonButton from '../ui/NeonButton';
import WaveAnimation from './WaveAnimation';
import { colors } from '../../utils/colors';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveAnimation />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1a365d,transparent)]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <div className="text-sm font-mono mb-4 tracking-wider" style={{ color: colors.neon.blue }}>
            FLOW AI AUTOMATION
          </div>
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: `linear-gradient(to right, ${colors.neon.blue}, ${colors.neon.green})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <NeonButton color="blue" className="flex items-center gap-2">
            {t('hero.cta.consult')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NeonButton>
          <NeonButton color="green" variant="outline">
            {t('hero.cta.learn')}
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;