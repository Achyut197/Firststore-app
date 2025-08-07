import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 border-b-2 border-teal-400 sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Section - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="FirstStore Logo" className="w-8 h-8 brightness-0 invert" />
          <span className="text-white text-xl font-semibold tracking-tight">FirstStore</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-teal-400 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['about', 'how-it-works', 'services', 'franchise', 'coverage', 'help'].map((route) => (
            <Link
              key={route}
              to={`/${route}`}
              className="text-white hover:text-teal-400 transition-colors duration-200 font-medium text-sm capitalize"
            >
              {route.replace('-', ' ')}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-white transition duration-200 text-sm font-medium">
            Get The App
          </button>
          <button className="px-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition duration-200 text-sm font-medium">
            Become Partner
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-4">
          <div className="flex flex-col gap-4">
            {['about', 'how-it-works', 'services', 'franchise', 'coverage', 'help'].map((route) => (
              <Link
                key={route}
                to={`/${route}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-teal-400 transition-colors duration-200 font-medium text-sm capitalize"
              >
                {route.replace('-', ' ')}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full px-4 py-2 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-white transition duration-200 text-sm font-medium">
              Get The App
            </button>
            <button className="w-full px-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition duration-200 text-sm font-medium">
              Become Partner
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
