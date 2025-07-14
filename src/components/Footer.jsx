import React from 'react';
import { assets } from '../assets/assets';
import { FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>

        {/* Logo + Description */}
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="logo" className='w-32 sm:w-36 mb-4' />
          <p className='text-gray-400'>
            At CyberForenX, we are a dynamic startup driving innovation across technology and business solutions. 
          </p>
        </div>

        {/* Company Links */}
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About us</a>
            <a href="#Contact" className='hover:text-white'>Contact us</a>
            <a href="#" className='hover:text-white'>Privacy policy</a>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Follow Us</h3>
          <div className='flex gap-4 text-2xl text-gray-400'>
            <a
              href="https://www.linkedin.com/company/cyberforenx-associate/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className='hover:text-blue-500'
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/your-company-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className='hover:text-red-500'
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/Cyber_ForenX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className='hover:text-blue-400'
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/cyberforenx/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className='hover:text-pink-500'
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500 text-sm'>
        © {new Date().getFullYear()} CyberForenX. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;