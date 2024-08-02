import React from 'react';

export default function Clayvessel() {
  return (
    <div className='container mx-auto py-8 text-center'>
      {/* Heading */}
      <h1 className='text-4xl font-bold mb-4 text-blue-500'>
        Clay Vessel Filtration Method
      </h1>
      
      {/* Image */}
      <div className='mb-6'>
        <img 
          src="images/clay.jpg" // Replace with your actual image URL
          alt="Clay Vessel Filtration"
          className='w-full max-w-md mx-auto h-auto object-cover'
        />
      </div>
      
      {/* Description */}
      <div className='text-xl mb-6 px-4 text-justify'>
        <p>
          The clay vessel filtration method is a traditional and effective way of purifying water using clay pots. This method leverages the natural filtration properties of clay, which can help remove impurities and improve the quality of drinking water. The porous nature of clay allows water to pass through, trapping particles and microorganisms. This results in cleaner water that is free from various contaminants. Additionally, the clay pots can maintain a cool temperature for the stored water, enhancing its taste and making it more refreshing. This technique is widely used in various cultures due to its simplicity, cost-effectiveness, and efficiency. It is especially beneficial in rural and underdeveloped regions where access to modern water purification systems may be limited.
        </p>
      </div>
      
      {/* Video Container */}
      <div className='relative pb-9/16 mx-auto' style={{ paddingBottom: '56.25%' }}>
        {/* Video Title */}
        <div className='absolute top-0 left-0 w-full text-center p-2 bg-black bg-opacity-70 text-white z-10'>
          <h2 className='text-2xl font-bold'>Clay Vessel Filtration Method Video</h2>
        </div>
        {/* YouTube Video */}
        <iframe
          width="100%"
          height="100%"
          className='absolute top-0 left-0 w-full h-full'
          src="https://www.youtube.com/embed/zvAll3NZb6Q"
          title="Clay Vessel Filtration Method"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
