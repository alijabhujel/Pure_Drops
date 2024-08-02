import React from 'react';

export default function Hero() {
  return (
    <div className='relative text-center'>
      <div className='relative'>
        <img 
          src="images/safe.jpg" // Replace with your actual image URL
          alt="Safe Drinking Water"
          className='w-full h-auto object-cover'
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center p-8 bg-black bg-opacity-50'>
          <div className='text-white text-center'>
            <h2 className='text-6xl font-bold mb-6'>
              Pure Water, Pure Life
            </h2>
            <p className='text-2xl'>
              "Every drop counts. Let's ensure every sip is safe. Drink pure, live healthy."
            </p>
          </div>
        </div>
      </div>
      <div className='relative z-10 container mx-auto py-8'>
        <div className='flex justify-between p-4 shadow-lg'>
          <div className='w-1/4 text-center border-r-8 border-blue-500 py-6'>
            <p className='text-xl font-bold'>30 million population +</p>
          </div>
          <div className='w-1/2 text-center border-r-8 border-blue-500 py-6'>
            <p className='text-xl font-bold'>Only 18% in Nepal Have Year-Round Safe Water</p>
          </div>
          <div className='w-1/4 text-center py-6'>
            <p className='text-xl font-bold'>44,000 Kids Die Yearly in Nepal from Waterborne Diseases</p>
          </div>
        </div>
      </div>
      <div className='w-full bg-white shadow-lg'>
        <div className='container mx-auto flex items-center py-4'>
          <div className='w-1/2 pr-4'>
            <img 
              src="images/rain.jpg" // Replace with your actual image URL
              alt="Rainwater Harvesting"
              className='w-full h-auto object-cover'
            />
          </div>
          <div className='w-1/2 pl-4'>
            <h3 className='text-2xl font-bold mb-2 text-blue-500'>Rainwater Harvesting</h3>
            <p className='text-xl'>
              Rainwater harvesting is the practice of collecting and storing rainwater for reuse on-site, rather than allowing it to run off. The collected water can be used for various purposes, such as irrigation, landscaping, and even drinking, depending on the level of treatment it receives. By harvesting rainwater, communities can reduce their dependence on municipal water supplies, decrease stormwater runoff, and promote water conservation.
            </p>
          </div>
        </div>
      </div>
      <div className='container mx-auto py-8'>
        <h3 className='text-3xl font-bold mb-4 text-blue-500'>Learn About Rainwater Harvesting</h3>
        <div className='flex justify-center'>
          <iframe
            width="960"
            height="540"
            className='max-w-full shadow-lg'
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
