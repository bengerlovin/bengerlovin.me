import React from 'react';

export default function PageSection({ children }) {
  return (
    <>
      <section className='flex flex-col items-start justify-center'>
        {children}
      </section>
    </>
  );
}
