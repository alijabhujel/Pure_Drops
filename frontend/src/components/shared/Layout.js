import React from 'react';

import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
     
      <main className='flex-grow'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
