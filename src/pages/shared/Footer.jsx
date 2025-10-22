import React from 'react';
import ZipSendLogo from './ZipSendLogo';
import NavItems from './navItems';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content p-10 mt-7 rounded-4xl">
 
<div className='max-w-3xl'>
     <div>
    <ZipSendLogo></ZipSendLogo>
   </div>
   <div>
    <p>Enjoy fast, reliable parcel delivery with real-time 
      tracking and zero hassle. From personal packages
       to business shipments — we deliver on time, every time.</p>
   </div>
   <nav className='text-[#CAEB66]'><NavItems></NavItems></nav>
   <div className="flex justify-center gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-2xl transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-2xl transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-2xl transition-colors"
        >
          <FaYoutube />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-2xl transition-colors"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <p className="text-center text-gray-300 text-sm mt-4">
        © {new Date().getFullYear()} ZipSend. All rights reserved.
      </p>
</div>
    
</footer>
        </div>
    );
};

export default Footer;