import ArrowListItem from '@/components/ArrowListItem';
import PageSubHeading from '@/components/Navigation/PageSubHeading';
import ProjectHeading from '@/components/ProjectHeading';
import Text from '@/components/Text';
import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import hht from '../../public/images/hht-screenshot.png'

export default function HHTProject() {
  return (
    <>
      <Head>
        <title>HHT Project | Ben Gerlovin Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageContainer>
        {/*  Intro And Heading */}
        <PageSection>

          {/* Page Heading */}
          <h3 className={` text-[34px] md:text-[38px] font-bold leading-[1.08] tracking-heading font-heebo mb-5`}>
            Happy Healthy Techie
          </h3>



          {/* Intro Paragraph */}
          <Text classes='mb-2'>My litte corner of the internet came to life in early 2021. It began as a way to talk about my musings in tech, fitness, health, and everything in between - gradually, I decided to dedicate it solely to tech. </Text>

          <a target="_blank" href="https://happyhealthytechie.com" className="flex flex-col w-full py-2 mt-4 mb-9 transition-colors duration-200 ease-in-out border-[2.5px] border-white rounded-md shadow-soft md:p-2 hover:border-blue-500 cursor-pointer">
            <Image priority className="rounded-lg" height={1000} width={1500} layout='responsive' placeholder='blur' src={hht} alt="montreal downtown"></Image>

          </a>

          <Text classes=''>
            After several redesigns (ok, maybe more than several), I'm finally happy with how my blog looks and feels. Keep reading for a walk-through of how I implemented it and what I write about.
          </Text>
        </PageSection>


        {/* Links, Technology Used */}
        <PageSection fullWidth margin=''>
          <div className=' border-b-[1.2px] border-gray-400/20 w-full pb-8 flex-col'>

            <h3 className='mt-4 mb-1 text-lg font-semibold tracking-tight text-gray-900 font-heebo'>
              Technologies Used
            </h3>


            {/* Row Of Technology Tags */}
            <div className="flex mt-3 gap-x-2">
              <p className='text-[12px] md:text-sm font-semibold tracking-tight text-gray-700/70 px-2 py-1 bg-gray-400/10 rounded-md'>WordPress</p>
              <p className=' text-[12px] md:text-sm px-2 py-1 font-semibold tracking-tight rounded-md text-gray-700/70 bg-gray-400/10'>HTML/CSS</p>
              <p className='text-[12px] md:text-sm px-2 py-1 font-semibold tracking-tight rounded-md text-gray-700/70 bg-gray-400/10'>PHP</p>
            </div>


            {/* Status */}
            <div className="flex-col items-center mt-6 gap-x-1">
              <h3 className='mt-4 mb-1 text-lg font-semibold tracking-tight text-gray-900 font-heebo'>
                Project Status
              </h3>
              <span className='px-2 py-1 text-[12px] md:text-sm font-semibold tracking-tight rounded-lg bg-yellow-400/20 text-amber-700'>ONGOING</span>
            </div>

            {/* Live Link */}
            <div className="flex-col items-center mt-6 gap-x-1">
              <h3 className='mt-4 mb-1 text-lg font-semibold tracking-tight text-gray-900 font-heebo'>
                Live Link
              </h3>
              <span className="flex items-center tracking-tight text-blue-800 gap-x-1 group">
                <a href="https://happyhealthytechie.com" target={'_blank'} className="transition-colors duration-200 ease-in-out group-hover:text-blue-400">View Project </a>
                <svg className='w-4 h-4 transition-colors duration-200 ease-in-out fill-current group-hover:text-blue-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z" /><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z" /></svg>
              </span>
            </div>

          </div>

        </PageSection>

        {/* Gaols And Requirements */}
        <PageSection margin='mt-10'>

          <ProjectHeading classes='mb-1'>
            Goals And Requirements
          </ProjectHeading>

          <Text classes='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>

        </PageSection>

        <PageSection margin='mt-10'>

          <ProjectHeading classes='mb-1'>
            Design And Implementation
          </ProjectHeading>

          <Text classes='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>

        </PageSection>

        {/* Improvments */}
        <PageSection margin='mt-10'>
          <ProjectHeading classes='mb-1'>
            Upcoming Improvements
          </ProjectHeading>

          <Text classes='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <Text>
            <ul>
              <ArrowListItem>
                hello
              </ArrowListItem>
              <ArrowListItem>
                hello
              </ArrowListItem>
              <ArrowListItem>
                hello
              </ArrowListItem>
              <ArrowListItem>
                hello
              </ArrowListItem>
            </ul>
          </Text>

        </PageSection>




      </PageContainer>
    </>
  )
}
