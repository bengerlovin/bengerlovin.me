import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className='flex flex-col justify-center px-8'>
        <div className='relative items-start w-full max-w-3xl py-8 mx-auto'>
          {/* HR Separator */}
          <hr className='bg-gray-400 border-gray-500'></hr>

          <div className='flex items-center justify-between max-w-3xl py-6'>
            <div className='flex-shrink-0 w-1/4'>hello</div>
            <div className='flex-shrink-0 w-1/4'>hello</div>
            <div className='flex-shrink-0 w-1/4'>
              hello friendsssssss this is another bit of text
            </div>
            <div className='flex-shrink-0 w-1/4'>hello</div>
          </div>
        </div>
      </footer>
    </>
  );
}
