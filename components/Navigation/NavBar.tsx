import React from 'react';
import Logo from './Logo'
import { Slant as Hamburger } from 'hamburger-react'

export default function Navigation() {
  return (
    <>
      <nav className='flex flex-col justify-center px-8'>
        <div className='relative flex items-center justify-between w-full max-w-3xl py-8 mx-auto'>
          <Logo />

          {/* Laptop Screen Menu List */}
          <div className='hidden md:visible'> second nav item </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden' >
            <Hamburger direction='left' size={18} hideOutline={true} distance="sm" label={"Show menu"} />
          </div>
        </div>
      </nav>
    </>
  );
}
