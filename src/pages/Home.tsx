import React from 'react';
import { motion } from 'framer-motion';
import { SocialLinks } from '../components/SocialLinks';

export const Home = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
        url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')`
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-orange-500 mb-4">Dizy-FF</h1>
          <p className="text-xl text-white mb-8">Welcome to the ultimate Free Fire community</p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#subscribe" 
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors"
            >
              Join Now
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8"
        >
          <SocialLinks />
        </motion.div>
      </div>
    </div>
  );
};