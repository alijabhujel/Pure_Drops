// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-3 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
        {/* Column 1: Logo and Project Name */}
        <div className="text-center md:text-left">
          <p className="text-md mt-2 font-roboto font-bold">Pure Drops.</p>
        </div>

        {/* Column 2: Navigation */}
        <div className="text-center md:text-left">
          <h3 className="text-md font-bold mb-1">Navigation</h3>
          <ul className="text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Workshop">Workshop</Link></li>
            <li><Link to="/Games">Games</Link></li>
            <li><Link to="/Quiz">Quiz</Link></li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div className="text-center md:text-left">
          <h3 className="text-md font-bold mb-1">Follow Us</h3>
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        {/* Column 4: Send Email */}
        <div className="text-center md:text-left">
          <h3 className="text-md font-bold mb-2">Contact Us</h3>
          <a href="mailto:alijabhujel@gmail.com" className="text-sm flex items-center space-x-2">
            <FaEnvelope />
            <span>Email Us</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-4 text-center text-xs px-6">
        <p>&copy; 2024 Safe and pure drinking water All rights reserved.</p>
        <p>Designed and developed by Pure Drops</p>
      </div>
    </footer>
  );
};

export default Footer;
