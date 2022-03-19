import React from 'react';
import Logo from './Logo'
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  return (
    <>
      <nav className='relative flex flex-col justify-center px-8'>
        <div className='flex items-center justify-between w-full max-w-3xl pt-8 pb-8 mx-auto md:pb-9'>
          <Logo />

          {/* Laptop Screen Menu List */}
          <div className='hidden md:flex md:items-center gap-x-6'>

            {/* Project Drop Down Menu */}
            <DropdownMenu menuItems={[{ title: 'Speed Scanr', href: '/projects/speedscanr' }, { title: 'Developer Blog', href: '/projects/hht' }]}>
              <span className='flex items-center gap-1 transition-all duration-200 group'>
                <a className='tracking-tight underline outline-none text-md font-inter text-zinc-900 group-hover:text-blue-700 decoration-white focus:ring-0 focus:outline-none' target={'_blank'}>Projects</a>
                <svg className="w-4 h-4 text-zinc-900 group-hover:text-blue-700 decoration-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </DropdownMenu>

            {/* About */}
            <DropdownMenu menuItems={[{ title: 'My Story', href: '/about' }, { title: 'What I Code With', href: '/uses' }]}>
              <span className='flex items-center gap-1 transition-all duration-200 group'>
                <a className='tracking-tight underline outline-none text-md font-inter text-zinc-900 group-hover:text-blue-700 decoration-white focus:ring-0 focus:outline-none' target={'_blank'}>About</a>
                <svg className="w-4 h-4 text-zinc-900 group-hover:text-blue-700 decoration-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </DropdownMenu>

            {/* Contact */}
            <Link href={'/contact'} passHref>
              <a className='tracking-tight underline transition-all duration-200 text-md font-inter text-zinc-900 hover:text-blue-700 hover:decoration-blue-700 decoration-white' >Contact</a>
            </Link>

            <a download={true} href="https://bengerlovin.me/download/cv" className='tracking-tight underline transition-all duration-200 text-md font-inter text-zinc-900 hover:text-blue-700 hover:decoration-blue-700 decoration-white'>Resume</a>
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
