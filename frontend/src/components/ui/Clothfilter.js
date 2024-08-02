import React from 'react';

export default function Clothfilter() {
  return (
    <div className='container mx-auto py-8 text-center'>
      {/* Heading */}
      <h1 className='text-4xl font-bold mb-4 text-blue-500'>
        Cloth Filtration Method
      </h1>
      
      {/* Image */}
      <div className='mb-6'>
        <img 
          src="images/cloth.jpg" // Replace with your actual image URL
          alt="Cloth Filtration"
          className='w-full max-w-md mx-auto h-auto object-cover'
        />
      </div>
      
      {/* Description */}
      <div className='text-xl mb-6 px-4 text-justify'>
        <p>
          The cloth filtration method is a simple and traditional way of purifying water. It involves passing water through a piece of clean cloth, which acts as a physical barrier to trap larger particles, debris, and some microorganisms. This method is especially useful in emergencies or in areas where access to advanced filtration systems is limited. While cloth filtration can help improve the clarity of the water, it is often used in conjunction with other purification methods to ensure the water is safe to drink. The effectiveness of this method depends on the type of cloth used and how well it is maintained. It's a cost-effective and accessible solution for basic water filtration needs.
        </p>
      </div>
      
      {/* Video Container */}
      <div className='relative pb-9/16 mx-auto' style={{ paddingBottom: '56.25%' }}>
        {/* Video Title */}
        <div className='absolute top-0 left-0 w-full text-center p-2 bg-black bg-opacity-70 text-white z-10'>
          <h2 className='text-2xl font-bold'>Cloth Filtration Method Video</h2>
        </div>
        {/* YouTube Video */}
        <iframe
          width="100%"
          height="100%"
          className='absolute top-0 left-0 w-full h-full'
          src="https://www.youtube.com/embed/ZDpeQKvonEg" // Replace with your actual YouTube video URL
          title="Cloth Filtration Method"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
