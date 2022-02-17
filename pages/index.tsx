import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import SpecialLink from '@/components/SpecialLink';
import getRecentCommitData from 'lib/github-data';
import { GithubCommitDataResult } from '@/types/DataTypes';
import getSpotifyPlayHistory from 'lib/spotify';
import getYoutubeStats from 'lib/youtube';
import Head from 'next/head'
import PageHeading from '@/components/PageHeading';
import ContactForm from '@/components/ContactForm';
import JobSearchStatus from '@/components/JobSearchStatus';
import Image from 'next/image';
import ProjectHeading from '@/components/ProjectHeading';
import PostList from '@/components/PostList';
import profilePic from '../public/images/profile-pic-full-rounded.png'

export default function Home({ commitCount, playbackTime, youTubeStats }) {

  console.log(commitCount, playbackTime, youTubeStats)


  return (
    <div className=''>
      <Head>
        <title>Ben Gerlovin Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageContainer>

        {/* Intro With Name, Bio, Picture */}
        <PageSection margin='-mt-6 md:-mt-0 mb-6'>

          <div className="flex flex-col items-center gap-y-9 md:flex-row-reverse md:items-center md:gap-x-3">
            <div className='block p-1 rounded-full profile-pic-background'>
              <div className='flex-shrink-0 block w-[156px] h-[156px] p-1 bg-white rounded-full md:h-32 md:w-32'>
                <Image priority src={profilePic} height={2015} width={2015} className='rounded-full' />
              </div>
            </div>
            <PageHeading>
              Hey, I'm Ben. I'm a full-stack developer / tech blogger currently working at <SpecialLink href='https://www.sponsor.com/' variant='blue'>Sponsorium, Inc.</SpecialLink>
            </PageHeading>
          </div>


        </PageSection>

        {/* Current Updates = API Calls  */}
        <PageSection>
          <div className='mt-4 text-xl text-gray-700 md:mt-3'>
            <p>In the past month, I've pushed <SpecialLink variant='purple' href='https://github.com/bengerlovin'>{commitCount} commits to Github</SpecialLink>, watched <SpecialLink href='https://www.youtube.com/playlist?list=PL3iJPs0FCV3MC-R-BAfO2b7-VN9SaUpp9' variant='yellow'>{youTubeStats} minutes of coding tutorials</SpecialLink> on YouTube, listened to <SpecialLink variant='rose' href='https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recently-played'>{playbackTime} minutes of music on Spotify</SpecialLink>, and published <SpecialLink href='https://happyhealthytechie.com' variant='green'>4 articles to my developer blog.</SpecialLink></p>
            {/* <div className='my-4'>
              <p> Currently based in &rarr; Montreal</p>
            </div> */}
          </div>
        </PageSection>

        {/* <PageSection margin='mt-8'>
          <div className="flex items-center justify-start gap-x-8">
            <button className="text-sm md:text-base flex items-center justify-center gap-1 py-2.5 px-4 border-[1px] rounded-md border-blue-900 bg-blue-700  focus:outline-blue-400 focus:outline-2 text-zinc-100">
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="flex items-center justify-center gap-1 text-sm text-blue-800 md:text-base">
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </PageSection > */}

        {/* Featured Project Cards */}
        < PageSection margin="mt-12" >
          <ProjectHeading>
            Featured Projects
          </ProjectHeading>
          <p className='mt-5 text-[19px] tracking-[-0.015em] leading-[1.65rem] text-gray-700'>Side projects and coding adventures that I build in my spare time. </p>
        </PageSection >

        <PageSection margin="mt-7" fullWidth>

          <div className='flex flex-col items-stretch w-full py-12 rounded-lg px-9 md:py-12 md:px-14 shadow-soft bg-gradient-to-br from-yellow-300/20 via-yellow-500/20 to-rose-500/20'>
            <div className="flex flex-col md:mb-3">
              <p className='mb-2.5 text-[13px] md:text-base tracking-tight  text-gray-500 leading-tight'>Developer Blog</p>
              <ProjectHeading classes='mb-7 text-zinc-800'>Happy Healthy Techie</ProjectHeading>
              {/* <p className='mb-8 mt-2 text-[13px] md:text-base tracking-tight font-inter text-gray-600 leading-tight'>A developer blog focused on how to break into tech, how to start learning coding on your own, and what kinds of technologies are out there.</p> */}

              {/* Desktop Image */}
              <div className='hidden md:inline-block'>
                <Image priority layout='responsive' height={982} width={1512} src={'/images/hht-screenshot.png'} className='rounded-md' />
              </div>

              <div className='inline-block md:hidden'>
                <Image priority layout='responsive' height={1765} width={1512} src={'/images/hht-screenshot-mobile.png'} className='rounded-md' />
              </div>
            </div>
          </div>

        </PageSection>

        <PageSection margin="mt-10" fullWidth>

          {/*  display screenshot of project like in madebyproxy.com */}
          <div className='w-full py-12 rounded-lg px-9 md:py-12 md:px-14 shadow-soft bg-gradient-to-br from-emerald-500/20 via-blue-300/30 to-indigo-500/20'>

            <div className="flex flex-col md:mb-3">
              <p className='mb-2.5 text-[13px] md:text-base tracking-tight  text-gray-500 leading-tight'>API-Powered App</p>
              <ProjectHeading classes='mb-7 text-zinc-800'>Speed Scanr</ProjectHeading>
              {/* <p className='mb-8 mt-2 text-[13px] md:text-base tracking-tight font-inter text-gray-600 leading-tight'>A developer blog focused on how to break into tech, how to start learning coding on your own, and what kinds of technologies are out there.</p> */}

              {/* Desktop Image */}
              <div className='hidden mb-0 md:block'>
                <div className='flex flex-col'>
                  <Image priority layout='responsive' height={982} width={1512} src={'/images/hht-screenshot.png'} className='rounded-md' />
                  <a target={'_blank'} href='https://happyhealthytechie.com' className='flex items-center justify-center mt-4 -mb-3 text-sm text-gray-700 gap-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className='text-[12px] text-gray-600 group-hover:text-blue-500'>View Live</span>
                  </a>
                </div>
              </div>

              <div className='block mb-0 md:hidden'>
                <div className='flex flex-col'>
                  <Image priority layout='responsive' height={1765} width={1512} src={'/images/hht-screenshot-mobile.png'} className='rounded-md' />
                  <a target={'_blank'} href='https://happyhealthytechie.com' className='flex items-center justify-center mt-4 -mb-3 text-sm text-gray-700 transition-colors duration-200 ease-in-out gap-x-1 group'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600 group-hover:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className='text-[13px] text-gray-600 group-hover:text-gray-400'>View Live</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </PageSection>

        <PageSection margin="mt-16">
          <ProjectHeading>
            Recent Posts
          </ProjectHeading>
          <p className='mt-5 mb-5 text-[19px] leading-[1.65rem] tracking-[-0.015em] text-gray-700'>I publish a couple of times a month to my developer-oriented blog, Happy Healthy Techie.</p>

          <PostList />

        </PageSection>


        {/* Get In Touch Section */}
        <PageSection margin="mt-14">

          <ProjectHeading classes='mb-4'>
            Have A Question?
          </ProjectHeading>

          <p className='mb-6 text-lg tracking-tight text-gray-600'>To recruiters: I am <JobSearchStatus status={'searching'}>looking for a new role</JobSearchStatus>. To everyone else: feel free to get in touch about anything! Always happy to chat :)</p>

          <ContactForm />

        </PageSection>

      </PageContainer >
    </div >
  );
}



export async function getStaticProps() {

  let ytStats: number = await getYoutubeStats();
  let recentPlaybackTime = await getSpotifyPlayHistory();

  let commitData: GithubCommitDataResult = await getRecentCommitData();
  let count = commitData.commitCount

  return {
    props: { commitCount: count, playbackTime: recentPlaybackTime, youTubeStats: ytStats }
  }
}
