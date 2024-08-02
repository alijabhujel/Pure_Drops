import React from 'react';

export default function Hero() {
  return (
    <div className='relative text-center'>
      <img 
        src="images/safe.jpg" // Replace with your actual image URL
        alt="Safe Drinking Water"
        className='w-full h-auto object-cover'
      />
      <div className='absolute inset-0 flex flex-col justify-center items-center p-8'>
        <div className='text-white text-center'>
          <h2 className='text-6xl font-bold mb-6'>
            Pure Water, Pure Life
          </h2>
          <p className='text-2xl'>
            "Every drop counts. Let's ensure every sip is safe. Drink pure, live healthy."
          </p>
        </div>
      </div>
      <div className='relative z-10 container mx-auto py-8'>
        <div className='flex justify-between p-4 shadow-lg'>
          <div className='w-1/4 text-center border-r-8 border-blue-500 py-6'>
            <p className='text-xl font-bold'>20 million populated</p>
          </div>
          <div className='w-1/2 text-center border-r-8 border-blue-500 py-6'>
            <p className='text-xl font-bold'>7,000 safe</p>
          </div>
          <div className='w-1/4 text-center py-6'>
            <p className='text-xl font-bold'>7,000 safe</p>
          </div>
        </div>
      </div>
      <div className='container mx-auto py-8'>
        <h3 className='text-3xl font-bold mb-4'>Learn About Rainwater Harvesting</h3>
        <div className='flex justify-center'>
          <iframe
            width="960"
            height="540"
            className='max-w-full'
            src="https://www.youtube.com/embed/27TUmzyL9DI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
