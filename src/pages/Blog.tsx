import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Blog = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-orange-500 mb-8"
        >
          Blog
        </motion.h1>

        <div className="grid gap-8">
          {/* Sample blog post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/50 backdrop-blur-sm p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Latest Free Fire Updates</h2>
            <p className="text-gray-300 mb-4">
              Stay tuned for the latest updates and strategies in Free Fire...
            </p>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Posted on March 15, 2024</span>
              <button className="text-orange-500 hover:text-orange-400">Read More</button>
            </div>
          </motion.article>
        </div>

        {/* Subscribe section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 p-6 bg-black/50 backdrop-blur-sm rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-black/30 border border-orange-500/50 text-white focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded font-bold hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};