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
          <div className='grid max-w-3xl grid-cols-2 pb-6 pr-3 md:grid-cols-3 pt-9 gap-y-2 md:gap-y-3 md:pr-0'>

            <Link href={'/about'} passHref >
              <a className='text-base tracking-tight text-gray-600 transition-colors duration-150 ease-in-out font-inter hover:text-blue-800'>About</a>
            </Link>
            <a href={`mailto:ben.gerlovin@gmail.com`} className='text-base tracking-tight text-gray-600 transition-colors duration-150 ease-in-out font-inter hover:text-blue-800'>Contact Me</a>
            <Link href={'/uses'}>
              <a className='text-base tracking-tight text-gray-600 transition-colors duration-150 ease-in-out font-inter hover:text-blue-800'>Uses</a>
            </Link>
            <Link href={'https://happyhealthytechie.com'} passHref>
              <a target={'_blank'} className='text-base tracking-tight text-gray-600 transition-colors duration-150 ease-in-out font-inter hover:text-blue-800'>My Dev Blog</a>
            </Link>

            <div className='flex items-center gap-x-1.5 group'>
              <a href='/resume/ben-gerlovin-cv-2022.pdf' download className='text-base tracking-tight text-gray-600 transition-colors duration-150 ease-in-out font-inter group-hover:text-blue-800'>Download CV</a>

              {/* download icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700 h-[18px] w-[18px] group-hover:text-blue-800 transition-colors duration-150 ease-in-out stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>


            <div className='col-span-3 mt-5 md:col-span-4'>
              <SocialIcons />
              {/* Scroll To Top */}
              {/* <div >
                <span className='text-base tracking-tight text-blue-800 font-inter'>Beam me up, Scotty &uarr;</span>
              </div> */}
            </div>
            <div className='col-span-3 mt-8 md:col-span-4'>
              <span className='font-inter tracking-tight text-gray-600 text-[13px] flex items-center justify-start'>Copyright &copy; 2022 Ben Gerlovin - All Rights Reserved </span>
            </div>
          </div>
        </div>
      </footer >
    </>
  );
}
