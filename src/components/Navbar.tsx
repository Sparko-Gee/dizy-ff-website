import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-orange-500">Dizy-FF</Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-orange-500 px-3 py-2">Home</Link>
              <Link to="/blog" className="text-white hover:text-orange-500 px-3 py-2">Blog</Link>
              <Link to="/forum" className="text-white hover:text-orange-500 px-3 py-2">Forum</Link>
              <Link to="/login" className="text-white hover:text-orange-500 px-3 py-2">Login</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <Link to="/" className="text-white block px-3 py-2">Home</Link>
            <Link to="/blog" className="text-white block px-3 py-2">Blog</Link>
            <Link to="/forum" className="text-white block px-3 py-2">Forum</Link>
            <Link to="/login" className="text-white block px-3 py-2">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};