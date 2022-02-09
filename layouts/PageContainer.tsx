import Navigation from '@/components/Navigation';
import React from 'react';

export default function PageContainer({ children }) {
  return (
    <>
      <main className='flex flex-col justify-center max-w-6xl px-8 mx-auto'>
        {children}
      </main>
    </>
  );
}
