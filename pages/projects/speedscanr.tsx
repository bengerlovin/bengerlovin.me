import PageContainer from '@/layouts/PageContainer';
import Head from 'next/head';
import ArrowListItem from '@/components/ArrowListItem';
import PageSubHeading from '@/components/Navigation/PageSubHeading';
import ProjectHeading from '@/components/ProjectHeading';
import Text from '@/components/Text';
import PageSection from '@/layouts/PageSection';
import Image from 'next/image';
import React from 'react';
import speedscanr from '../../public/images/speed-scanr-desktop-final.png'
import Link from '@/components/Link';

import types from '../../public/code/types.png'
import apiCall from '../../public/code/api-call.png'

export default function SpeedScanrProject() {


  return (
    <>
      <Head>
        <title>Speed Scanr Project | Ben Gerlovin Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageContainer>
        {/*  Intro And Heading */}
        <PageSection>

          {/* Page Heading */}
          <h3 className={` text-[34px] md:text-[38px] font-bold leading-[1.08] tracking-heading font-heebo mb-5`}>
            Speed Scanr
          </h3>



          {/* Intro Paragraph */}
          <Text classes='mb-2'>Performance is a huge concern when building websites, and the gold-standard of speed monitoring tools is <Link href='https://pagespeed.web.dev/'>Google's PageSpeed Insights</Link>. Speed Scanr builds on top of the PageSpeed API by ranking perfomance audits in order of priority and by providing tips on how to improve each audit.</Text>

          <a target="_blank" href="https://github.com/bengerlovin/speed-scanr" className="flex flex-col w-full py-2 mt-4 mb-9 transition-colors duration-200 ease-in-out border-[2.5px] border-white rounded-md shadow-soft md:p-2 hover:border-blue-500 cursor-pointer">
            <Image priority className="rounded-lg" height={1000} width={1500} layout='responsive' placeholder='blur' src={speedscanr} alt="montreal downtown"></Image>

          </a>

          <Text classes=''>
            While the project is still being built, the main scaffold for analyzing a URL as well as the integration with Google's API is already complete. The details of upcoming features & improvements is discussed below.
          </Text>
        </PageSection>


        {/* Links, Technology Used */}
        <PageSection fullWidth margin=''>
          <div className=' border-b-[1.2px] border-gray-400/20 w-full pb-8 flex-col'>

            <h3 className='mt-4 mb-1 text-lg font-semibold tracking-tight text-gray-900 font-heebo'>
              Technologies Used
            </h3>


            {/* Row Of Technology Tags */}
            <div className="flex flex-wrap mt-3 gap-x-2">
              <p className='text-[12px] mb-3 md:text-sm font-semibold tracking-tight text-gray-700/70 px-2 py-1 bg-gray-400/10 rounded-md'>React</p>
              <p className=' text-[12px] mb-3 md:text-sm px-2 py-1 font-semibold tracking-tight rounded-md text-gray-700/70 bg-gray-400/10'>Next.js</p>
              <p className=' text-[12px] mb-3 md:text-sm px-2 py-1 font-semibold tracking-tight rounded-md text-gray-700/70 bg-gray-400/10'>Formik</p>
              <p className=' text-[12px] mb-3 md:text-sm px-2 py-1 font-semibold tracking-tight rounded-md text-gray-700/70 bg-gray-400/10'>TailwindCSS</p>
              <p className=' text-[12px] mb-3 md:text-sm px-2 py-1 font-semibold tracking-tight rounded-md text-gray-700/70 bg-gray-400/10'>TypeScript</p>
              <p className=' text-[12px] mb-3 md:text-sm px-2 py-1 font-semibold tracking-tight rounded-md text-gray-700/70 bg-gray-400/10'>Google API</p>
              <p className=' text-[12px] mb-3 md:text-sm px-2 py-1 font-semibold tracking-tight rounded-md text-gray-700/70 bg-gray-400/10'>Figma</p>
              <p className=' text-[12px] mb-3 md:text-sm px-2 py-1 font-semibold tracking-tight rounded-md text-gray-700/70 bg-gray-400/10'>Remix Icons</p>

            </div>


            {/* Status */}
            <div className="flex-col items-center mt-4 gap-x-1">
              <h3 className='mt-4 mb-1 text-lg font-semibold tracking-tight text-gray-900 font-heebo'>
                Project Status
              </h3>
              <span className='px-2 py-1 text-[12px] md:text-sm font-semibold tracking-tight rounded-lg bg-yellow-400/20 text-amber-700'>ONGOING</span>
            </div>

            <div className="flex-col items-center mt-6 gap-x-1">
              <h3 className='mt-4 mb-1 text-lg font-semibold tracking-tight text-gray-900 font-heebo'>
                GitHub Respository Link
              </h3>
              <span className="flex items-center tracking-tight text-blue-800 gap-x-1 group">
                <a href="https://github.com/bengerlovin/speed-scanr" target={'_blank'} className="transition-colors duration-200 ease-in-out group-hover:text-blue-400">View Project Source </a>
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
            Google's <Link href='https://developers.google.com/speed/docs/insights/v5/get-started'>PageSpeed Insights API</Link> offers a lot of fantastic audits for pagespeed performance, but it's <b>"Opportunities"</b> section leaves a lot to be desired. This is to be expected, since Google can't go around recommending one service over another as a way to improve page-load times - this would be a display of favoritism.
          </Text>
          <Text classes='mt-4'>
            In my experience as a tech blogger, a lot of the people that use PageSpeed insights share this frustration, especially those that are not very tech-savvy. A lot of Google's improvement tips are too broad, or use difficult terminology. Moreover, they never really say <em>what to do</em>.
          </Text>
          <Text classes='mt-4'>
            Speed Scanr is my implementation of the PageSpeed API, but instead of showing generic, jargon-infused tips that don't really help the vast majority of people, each audit has detailed instructions on what to improve and how. The audits are also ranked by priority, so that you never have to worry about wasting your time fixing something that won't really help improve performance.
          </Text>

          <Text classes='mt-4'>
            As far as technical goals, this project was a way to practice and hone a number of important skills:
            <ul>
              <ArrowListItem>
                <b>TypeScript</b> - the response object from a PageSpeed API call is complex and multi-layered. A rigorous type system was crucial to not only simplify development but to ensure data was displayed properly
              </ArrowListItem>
              <ArrowListItem>
                <b>Formik</b> - URLs are notoriously difficult to validate as their regex pattern is pretty ugly. Formik came in really handle with validation and submission handling built in.
              </ArrowListItem>
              <ArrowListItem>
                <b>Next.js's Backend Architecture</b> - each time a URL is analyzed, an fetch request is made to a custom-built API endpoint. Next.js makes this so simple to implement with its APIs folder and first-class support with TypeScript.
              </ArrowListItem>

            </ul>
          </Text>


        </PageSection>

        <PageSection margin='mt-10'>

          <ProjectHeading classes='mb-1'>
            Design And Implementation
          </ProjectHeading>

          <Text classes='mt-4'>
            The most important part of the implementation was getting the type system for a URL analysis down. For each PageSpeed API call, the response object would contain results categorized as <b>Metrics</b> and others categorized as <b>Audits</b> - converted into TypeScript types, they look like:
          </Text>

          <div className='flex flex-col w-full py-2 mt-4 mb-1 shadow-soft-small'>
            <Image priority className="rounded-lg" height={411} width={680} layout='responsive' placeholder='blur' src={types} alt="montreal downtown"></Image>
          </div>

          <Text classes='mt-4'>
            Having these strict defintions made it easy to type-guard the backend API call for a URL scan:
          </Text>

          <div className='flex flex-col w-full py-2 mt-4 mb-1 shadow-soft-small'>
            <Image priority className="rounded-lg" height={483} width={680} layout='responsive' placeholder='blur' src={apiCall} alt="montreal downtown"></Image>
          </div>

          <Text classes='mt-4'>
            Each result object contained both the mobile and desktop results from the PageSpeed API, allowing me to split the results on the front-end with a visual element like a switch or button toggle.
          </Text>

        </PageSection>

        {/* Improvments */}
        <PageSection margin='mt-10'>
          <ProjectHeading classes='mb-1'>
            Upcoming Improvements
          </ProjectHeading>

          <Text classes='mt-4'>
            There's still a fair bit of work to be done on this project, as the only completely finished parts are the scaffold for a URL analysis and the styling. Here's what's left to finish:
            <ul>
              <ArrowListItem>
                <b>Recommendations engine</b> - the recommendations for each audit are currently stored as JSX components, and for each URL analysis, depending on the score of an audit (from 0 to 1), a different recommendation is shown. If you pass an audit, there's no need to see what improvements you can make, versus if you fail an audit, you should see a list of all the improvements you need to implement. The recommendation engine is what will link a URL scan event to the recommendations, ensuring that for each audit, the correct JSX snippet is displayed.
              </ArrowListItem>
              <ArrowListItem>
                <b>Stylistic updates</b> - there are a few loose ends are far as styling is concerned: the home page is a bit bare unless popualted with the result from a URL scan (this can be easily fixed with a few visual sections describing the project), and the URL scan results themselves are not fully polished
              </ArrowListItem>
              <ArrowListItem>
                <b>About and FAQ pages</b> - this is a small fix, but I think it's important to be clear about a project's goals and what someone can expect if they're poking around the site.
              </ArrowListItem>

            </ul>
          </Text>

        </PageSection>




      </PageContainer>
    </>
  );
}