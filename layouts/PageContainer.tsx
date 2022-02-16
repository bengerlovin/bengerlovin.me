import Navigation from '@/components/Navigation/NavBar';
import React from 'react';

export default function PageContainer({ children }) {
  return (
    <>
      <main className='flex flex-col justify-center px-8'>
        <div className='flex flex-col items-start justify-between w-full max-w-3xl pt-6 pb-4 mx-auto'>
          {children}
        </div>
      </main>
    </>
  );
}
