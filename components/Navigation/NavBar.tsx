import React from 'react';
import Logo from './Logo'
import { Slant as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import SocialIcons from './SocialIcons';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  return (
    <>
      <nav className='relative flex flex-col justify-center px-8'>
        <div className='flex items-center justify-between w-full max-w-3xl py-8 mx-auto'>
          <Logo />

          {/* Laptop Screen Menu List */}
          <div className='hidden md:flex gap-x-6'>

            {/* Project Drop Down Menu */}
            <DropdownMenu>
              <span className='flex gap-1 group items-center'>
                <a className='text-md font-inter tracking-tight text-zinc-900 underline group-hover:text-blue-700 decoration-white transition-all duration-200 focus:ring-0 focus:outline-none outline-none' target={'_blank'}>Projects</a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-900  group-hover:text-blue-700  decoration-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </DropdownMenu>

            {/* About */}
            <Link passHref href={'/about'}>
              <a className='text-md font-inter tracking-tight text-zinc-900 underline hover:text-blue-700 hover:decoration-blue-700 decoration-white transition-all duration-200' target={'_blank'}>About</a>
            </Link>

            {/* Contact */}
            <Link href={'/contact'} passHref>
              <a className='text-md font-inter tracking-tight text-zinc-900 underline hover:text-blue-700 hover:decoration-blue-700 decoration-white transition-all duration-200' >Contact</a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden' >
            <MobileMenu />
          </div>
        </div>
      </nav>
    </>
  );
}
