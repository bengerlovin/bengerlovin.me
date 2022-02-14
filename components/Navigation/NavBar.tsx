import React from 'react';
import Logo from './Logo'

export default function Navigation() {
  return (
    <>
      <nav className='flex flex-col justify-center px-8'>
        <div className='relative flex items-center justify-between w-full max-w-3xl py-8 mx-auto'>
          <Logo />
          <div> second nav item </div>
        </div>
      </nav>
    </>
  );
}
