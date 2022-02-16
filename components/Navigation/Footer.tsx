import Link from 'next/link';
import React from 'react';
import JobSearchStatus from '../JobSearchStatus';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <>
      <footer className='flex flex-col justify-center px-8'>
        <div className='relative items-start w-full max-w-3xl pt-8 mx-auto'>
          {/* HR Separator */}
          <hr className='bg-gray-200 h-[1px]'></hr>

          <div className='grid grid-cols-3 md:grid-cols-4 max-w-3xl pb-6 pt-9 gap-y-6'>

            <div className='flex flex-col gap-y-2 md:gap-y-3'>
              <Link href={'/about'} passHref>
                <a className='font-inter tracking-tight text-gray-600 text-sm md:text-base'>About</a>
              </Link>
              <Link href={'/contact'}>
                <a className='font-inter tracking-tight text-gray-600 text-sm md:text-base'>Contact</a>
              </Link>
              <Link href={'/uses'}>
                <a className='font-inter tracking-tight text-gray-600 text-sm md:text-base'>Uses</a>
              </Link>
            </div>
            <div className='flex flex-col gap-y-2 md:gap-y-3'>
              <Link href={'https://happyhealthytechie.com'} passHref>
                <a target={'_blank'} className='font-inter tracking-tight text-gray-600 text-sm md:text-base'>My Dev Blog</a>
              </Link>
              <Link href={'https://speedscanr.io'} passHref>
                <a target={'_blank'} className='font-inter tracking-tight text-gray-600 text-sm md:text-base'>Speed Scanr</a>
              </Link>
            </div>
            <div className='flex flex-col gap-y-2 md:gap-y-3'>
              <Link href={'/about'} passHref>
                <a className='font-inter tracking-tight text-gray-600 text-sm md:text-base'>Download My CV</a>
              </Link>
            </div>

            <div className='flex justify-between col-span-3 md:col-span-4'>
              <SocialIcons />
              {/* Scroll To Top */}
              {/* <div >
                <span className='font-inter tracking-tight text-sm md:text-base text-blue-800'>Beam me up, Scotty &uarr;</span>
              </div> */}
            </div>
            <div className='col-span-3 md:col-span-4 mt-4'>
              <span className='font-inter tracking-tight text-zinc-700 text-sm flex items-center justify-start'>Copyright &copy; 2022 Ben Gerlovin - All Rights Reserved </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
