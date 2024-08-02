import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-blue-800 text-white py-4'>
      <div className='flex justify-center space-x-6 mb-4'>
        <FaInstagram className='text-2xl hover:text-gray-400 transition duration-300'/>
        <FaTwitter className='text-2xl hover:text-gray-400 transition duration-300'/>
        <FaFacebook className='text-2xl hover:text-gray-400 transition duration-300'/>
        <FaLinkedin className='text-2xl hover:text-gray-400 transition duration-300'/>
      </div>
      <p className='text-center'>Always Drink safe and pure water</p>
    </div>
  )
}

export default Footer;
