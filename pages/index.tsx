import Footer from '@/components/Navigation/Footer';
import NavBar from '@/components/Navigation/NavBar';
import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import SpecialLink from '@/components/SpecialLink';
import getRecentCommitData from 'lib/github-data';
import { GithubCommitDataResult } from '@/types/DataTypes';
import getSpotifyPlayHistory from 'lib/spotify';
import getYoutubeStats from 'lib/youtube';
import Head from 'next/head'

export default function Home({ commitCount, playbackTime, youTubeStats }) {

  console.log(commitCount, playbackTime, youTubeStats)

  return (
    <div className=''>
      <Head>
        <title>Ben Gerlovin Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <PageContainer>
        {/* Intro With Name, Bio, Picture */}
        <PageSection>
          <h2 className='mb-4 text-[45px] md:text-[48px] font-bold leading-[1.08] tracking-tighter text-zinc-800 font-lato'>
            Hey, I'm Ben. <br className='md:hidden' /> I build websites.
          </h2>
        </PageSection>

        {/* Backstory / Timeline */}
        <PageSection>
          <div className='mt-3 text-xl text-gray-600'>
            <p>I'm currently working as a full-stack developer at <SpecialLink href='https://www.sponsor.com/' variant='blue'> Sponsorium, Inc</SpecialLink>. In the past month, I've pushed <SpecialLink variant='purple' href='https://github.com/bengerlovin'>{commitCount} commits to Github</SpecialLink>, watched <SpecialLink href='https://www.youtube.com/playlist?list=PL3iJPs0FCV3MC-R-BAfO2b7-VN9SaUpp9' variant='yellow'>{youTubeStats} minutes of coding tutorials</SpecialLink> on YouTube, listened to <SpecialLink variant='rose' href='https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recently-played'>{playbackTime} minutes of music on Spotify</SpecialLink>, and published <SpecialLink href='https://happyhealthytechie.com' variant='green'>4 articles to my developer blog.</SpecialLink></p>
            {/* <div className='my-4'>
              <p> Currently based in &rarr; Montreal</p>
            </div> */}
          </div>
        </PageSection>

        {/* Featured Project Cards */}
        <PageSection margin="mt-14">

          {/*  display screenshot of project like in madebyproxy.com */}
          <div className='flex flex-col w-full p-6 rounded-md shadow-soft'>
            <span>Project Card</span>
            <span>image</span>
          </div>


          {/* <div className="relative h-36 w-36">
              <Image className="rounded-full" src={'/../public/images/profile-pic.jpg'} layout="fill" />
            </div> */}


        </PageSection>

        <PageSection>

          {/* Latest Posts Section */}

          {/* {latestPosts && (
            <div>
              {latestPosts.map((postItem) => (
                <p key={postItem.id}>{postItem.title.rendered}</p>
              ))}
            </div>
          )} */}

        </PageSection>


        {/* About And Skills And Experience */}
        <PageSection>
          {/* <Link href='/projects/speedscanr' as='/projects/speedscanr'>
            <a className='px-2 py-1
            my-5 border-blue-500 rounded-md border-[0.5px]'>
              Speed Scanr
            </a>
          </Link> */}
        </PageSection>

        {/* Get In Touch Section */}
        <PageSection>

        </PageSection>

      </PageContainer>
      <Footer />
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
