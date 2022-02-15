import Footer from '@/components/Navigation/Footer';
import NavBar from '@/components/Navigation/NavBar';
import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import SpecialLink from '@/components/SpecialLink';
import getLatestPosts from 'lib/wordpress-posts';

export default function Home({ latestPosts }) {
  return (
    <div className=''>
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
            <p>I'm currently working as a full-stack developer at <SpecialLink href='https://www.sponsor.com/' variant='blue'> Sponsorium, Inc</SpecialLink>. Integrate with <SpecialLink variant='yellow'>Goodreads</SpecialLink> to show how many books I'm reading and with <SpecialLink variant='green'>YouTube API</SpecialLink>, maybe also the  <SpecialLink variant='purple'>Github API as well.</SpecialLink> </p>
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

  console.log("in get static props")

  let latestPosts = await getLatestPosts();
  latestPosts = JSON.parse(JSON.stringify(latestPosts))
  return {
    props: { latestPosts }
  }
}
