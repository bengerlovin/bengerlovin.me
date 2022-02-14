import React from 'react';

export default function Navigation() {
  return (
    <>
      <nav className='flex flex-col justify-center px-8'>
        <div className='relative flex items-start justify-between w-full max-w-3xl py-8 mx-auto'>
          <div>first nav item (logo)</div>
          <div>second nav item </div>
        </div>
      </nav>
    </>
  );
}
