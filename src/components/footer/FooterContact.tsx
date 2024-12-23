import React from 'react';
import { motion } from 'framer-motion';

const FooterContact: React.FC = () => {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">Contact</h4>
      <motion.address 
        className="text-gray-400 not-italic space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>123 AI Street</p>
        <p>Tech City, TC 12345</p>
        <p className="mt-2">contact@flowai.com</p>
        <p>+1 (555) 123-4567</p>
      </motion.address>
    </div>
  );
};

export default FooterContact;