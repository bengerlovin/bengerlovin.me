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
            Fundamentally, I started Happy Healthy Techie to share what I knew about health, fitness, and tech - three subjects I'm equally passionate about. I figured I would enjoy having an online platform to talk about these kinds of things as I'm always trying to learn and grow in those areas, myself.
          </Text>

          <Text classes='mt-4'>
            As I got further along in my tech career, I saw the need for more transparency about the tech industry and what it takes to break into it, especially without any technical experience. This is when I decided to dedicate HHT solely to technical and developer-related content, and I think it was the best decision I could've made for the blog.
          </Text>

          <Text classes='mt-4'>
            A lot of my content now focuses on the following: 1) what it's like to apply for developer jobs without a resume padded with projects and internship experience, and 2) what it's <em>actually</em> like being a new developer, and how to navigate your first tech job as a junior dev.
          </Text>

        </PageSection>

        <PageSection margin='mt-10'>

          <ProjectHeading classes='mb-1'>
            Design And Implementation
          </ProjectHeading>

          <Text classes='mt-4'>
            Happy Healthy Techie is built on WordPress because it's primarily a blogging and content-creation project, not a technical one. I have definitely considered re-implementing it with Next.js and a CMS solution like Contentful or Sanity, but for now I appreciate the simplicity of maintaining a WordPress blog.
          </Text>
          <Text classes='mt-4'>
            To get HHT to where I wanted it to be functionally and aesthetically, there has definitely been a lot of custom coding and workaround - WordPress themes don't always come with all the features you need, and unless there's a plugin that does what you need, it pretty much only leaves custom-build solutions.
          </Text>
          <Text classes='mt-4'>
            As an example, I built a lot of the home page's UI with custom CSS classes and HTML elements, and a number of visual components in my blog like tables and syntax-highlighted code blocks are implemented via WordPress shortcodes, written in PHP.
          </Text>


        </PageSection>

        {/* Improvments */}
        <PageSection margin='mt-10'>
          <ProjectHeading classes='mb-1'>
            Upcoming Improvements
          </ProjectHeading>

          <Text classes='mt-4'>
            There are a lot of topics I want to write about on my blog, and the list is growing every day. Apart from written content, I've also been dabbling with video content, which tends to be a popular way to talk about tech and developer-related topics. Here's a breakdown of what I hope to publish on HHT over the next coming months:
          </Text>

          <Text>
            <ul>
              <ArrowListItem>
                Content about the job application process
              </ArrowListItem>
              <ArrowListItem>
                More on which technologies to focus on while learning web dev
              </ArrowListItem>
              <ArrowListItem>
                How to structure your learning to prioritize the <em>right</em> concepts for your goals - i.e. web developers needs JS, data scientists need to understand statistics and ML, and so on.
              </ArrowListItem>
            </ul>
          </Text>

        </PageSection>




      </PageContainer>
    </>
  )
}
