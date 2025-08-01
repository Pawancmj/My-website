import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        
        {/* ✅ Logo */}
        <img src={assets.logo} alt="Logo" className="w-24 md:w-32 object-contain" />

        {/* ✅ Desktop Nav Links */}
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
        </ul>

        {/* ✅ Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? 'fixed w-full h-full' : 'h-0 w-0'
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close"
          />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2">Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2">About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2">Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className="px-4 py-2">Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;