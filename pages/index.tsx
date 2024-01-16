import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import SpecialLink from '@/components/SpecialLink';
import getSpotifyPlayHistory from 'lib/spotify';
import Head from 'next/head'
import PageHeading from '@/components/PageHeading';
import ContactForm from '@/components/ContactForm';
import JobSearchStatus from '@/components/JobSearchStatus';
import Image from 'next/image';
import ProjectHeading from '@/components/ProjectHeading';
import PostList from '@/components/PostList';
import profilePic from '../public/images/profile-pic-full-rounded.png'
import Link from 'next/link';

export default function Home({ commitCount, playbackTime, youTubeStats }) {

  return (
    <div>
      <Head>
        <title>Ben Gerlovin Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Personal portfolio site for Ben Gerlovin, full-stack developer, tech-blogger, cat-lover." />
      </Head>
      <PageContainer>

        {/* Intro With Name, Bio, Picture */}
        <PageSection margin='-mt-6 md:-mt-0 mb-6'>

          <div className="flex flex-col items-center gap-y-9 md:flex-row-reverse md:items-center md:gap-x-3">
            <div className='block p-1 rounded-full profile-pic-background'>
              <div className='flex-shrink-0 block w-[156px] h-[156px] p-1 bg-white rounded-full md:h-32 md:w-32'>
                <Image alt='Ben Gerlovin profile picture portrait photo' priority src={profilePic} height={2015} width={2015} className='rounded-full' placeholder='empty' layout='responsive' />
              </div>
            </div>
            <PageHeading>
              Hey, I'm Ben. I'm a full-stack developer / tech blogger currently working at <SpecialLink href='https://careers.google.com/locations/montreal/' variant='blue'>Google.</SpecialLink>
            </PageHeading>
          </div>


        </PageSection>

        {/* Current Updates = API Calls  */}
        <PageSection>
          <div className='mt-4 text-xl text-gray-700 md:mt-3'>
            <p>In the past month, I've pushed <SpecialLink variant='purple' href='https://github.com/bengerlovin'>{commitCount} commits to Github</SpecialLink>, watched <SpecialLink href='https://www.youtube.com/playlist?list=PL3iJPs0FCV3MC-R-BAfO2b7-VN9SaUpp9' variant='yellow'>{youTubeStats} minutes of coding tutorials</SpecialLink> on YouTube, listened to <SpecialLink variant='rose' href='https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recently-played'>{playbackTime} minutes of music on Spotify</SpecialLink>, and published <SpecialLink href='/' variant='green'>4 articles to my developer blog.</SpecialLink></p>
            {/* <div className='my-4'>
              <p> Currently based in &rarr; Montreal</p>
            </div> */}
          </div>
        </PageSection>


        {/* Featured Project Cards */}
        < PageSection margin="mt-12" >
          <ProjectHeading>
            Featured Projects
          </ProjectHeading>
          <p className='mt-5 text-[19px] tracking-[-0.015em] leading-[1.65rem] text-gray-700'>Side projects and coding adventures that I build in my spare time. </p>
        </PageSection >

        <PageSection margin="mt-7" fullWidth>

          <div className='flex flex-col items-stretch w-full py-12 rounded-lg px-9 md:py-12 md:px-14 shadow-soft bg-gradient-to-br from-yellow-300/20 via-yellow-500/20 to-rose-500/20 transition-colors duration-200 ease-in-out border-[2.5px] border-gray-100 md:p-2 hover:border-blue-500 cursor-pointer'>

            {/* Project Card Body (With Link To Project) */}
            <Link legacyBehavior href='/' passHref>
              <a className="flex flex-col md:mb-3" target={'_blank'}>
                <p className='mb-2.5 text-[13px] md:text-base tracking-tight  text-gray-500 leading-tight'>Developer Blog</p>
                <ProjectHeading classes='mb-7 text-zinc-800'>Happy Healthy Techie</ProjectHeading>

                {/* Desktop Image */}
                <div className='hidden md:inline-block'>
                  <Image layout='responsive' alt='hht project screnshot' height={982} width={1512} src={'/images/hht-screenshot.png'} className='rounded-md' />
                </div>

                <div className='inline-block md:hidden'>
                  <Image layout='responsive' alt='hht project screnshot' height={1765} width={1512} src={'/images/hht-screenshot-mobile.png'} className='rounded-md' />
                </div>
              </a>
            </Link>
          </div>

        </PageSection>

        <PageSection margin="mt-10" fullWidth>

          {/*  display screenshot of project like in madebyproxy.com */}
          <div className='w-full py-12 rounded-lg px-9 md:py-12 md:px-14 shadow-soft bg-gradient-to-br from-emerald-500/20 via-blue-300/30 to-indigo-500/20 transition-colors duration-200 ease-in-out border-[2.5px] border-gray-100 md:p-2 hover:border-blue-500 cursor-pointer'>

            {/* Project Card Body (With Link) */}
            <Link legacyBehavior href='https://github.com/bengerlovin/speed-scanr' passHref>
              <a className="flex flex-col md:mb-3" target={'_blank'}>
                <p className='mb-2.5 text-[13px] md:text-base tracking-tight  text-gray-500 leading-tight'>API-Powered App</p>
                <ProjectHeading classes='mb-7 text-zinc-800'>Speed Scanr</ProjectHeading>

                {/* Desktop Image */}
                <div className='hidden mb-0 md:block'>
                  <div className='flex flex-col'>
                    <Image layout='responsive' alt='speed scanner project' height={982} width={1512} src={'/images/speed-scanr-desktop-final.png'} className='rounded-md' />

                  </div>
                </div>
                <div className='block mb-0 md:hidden'>
                  <div className='flex flex-col'>
                    <Image layout='responsive' alt='speed scanner project' height={1765} width={1512} src={'/images/speed-scanr-mobile.png'} className='rounded-md' />
                  </div>
                </div>
              </a>
            </Link>
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

          <p className='mb-6 text-lg tracking-tight text-gray-600'>To recruiters: I am <JobSearchStatus status={'not-searching'} />. To everyone else: feel free to get in touch about anything! Always happy to chat :)</p>

          <ContactForm />

        </PageSection>

      </PageContainer >
    </div >
  );
}



export async function getStaticProps() {


  //  parallelize asynchronous calls with Promise.all
  let [recentPlaybackTime]: [number] = await Promise.all([
    getSpotifyPlayHistory()
  ])


  let youtubeCount = 306;
  let count = 43;

  return {
    props: { commits: count, commitCount: count, playbackTime: recentPlaybackTime, youTubeStats: youtubeCount }
  }
}
