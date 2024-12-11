import React from 'react';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
        <Facebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
        <Twitter />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
        <Youtube />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500">
        <Instagram />
      </a>
    </div>
  );
};