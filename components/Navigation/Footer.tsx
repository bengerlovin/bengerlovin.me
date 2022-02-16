import Link from 'next/link';
import React from 'react';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <>
      <footer className='flex flex-col justify-center px-8'>
        <div className='relative items-start w-full max-w-3xl pt-8 mx-auto'>
          {/* HR Separator */}
          <hr className='bg-gray-200 h-[1px]'></hr>

          {/* Grid Set up */}
          <div className='grid grid-cols-2 md:grid-cols-3 max-w-3xl pb-6 pt-9 gap-y-2 md:gap-y-3 '>

            <Link href={'/about'} passHref >
              <a className='font-inter tracking-tight text-gray-600 hover:text-blue-800 transition-colors duration-150 ease-in-out text-base'>About</a>
            </Link>
            <Link href={'/contact'}>
              <a className='font-inter tracking-tight text-gray-600 hover:text-blue-800 transition-colors duration-150 ease-in-out text-base'>Contact</a>
            </Link>
            <Link href={'/uses'}>
              <a className='font-inter tracking-tight text-gray-600 hover:text-blue-800 transition-colors duration-150 ease-in-out text-base'>Uses</a>
            </Link>
            <Link href={'https://happyhealthytechie.com'} passHref>
              <a target={'_blank'} className='font-inter tracking-tight text-gray-600 hover:text-blue-800 transition-colors duration-150 ease-in-out text-base'>My Dev Blog</a>
            </Link>

            <Link href={'/about'} passHref>
              <div className='flex items-center gap-x-1.5 group'>
                <a className='font-inter tracking-tight text-gray-600 group-hover:text-blue-800 transition-colors duration-150 ease-in-out text-base'>Résumé</a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-blue-800 transition-colors duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>

            </Link>

            <div className='col-span-3 md:col-span-4 mt-5'>
              <SocialIcons />
              {/* Scroll To Top */}
              {/* <div >
                <span className='font-inter tracking-tight text-base text-blue-800'>Beam me up, Scotty &uarr;</span>
              </div> */}
            </div>
            <div className='col-span-3 md:col-span-4 mt-4'>
              <span className='font-inter tracking-tight text-zinc-700 text-sm flex items-center justify-start'>Copyright &copy; 2022 Ben Gerlovin - All Rights Reserved </span>
            </div>
          </div>
        </div>
      </footer >
    </>
  );
}
