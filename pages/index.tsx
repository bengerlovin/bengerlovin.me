import Footer from '@/components/Navigation/Footer';
import NavBar from '@/components/Navigation/NavBar';
import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';

export default function Home() {
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
            <p>I'm currently working as a full-stack developer at <a className='transition-all ease-in-out underline duration-[205ms] rounded-sm decoration-2  decoration-blue-500 hover:bg-blue-100 hover:text-blue-800'>Sponsorium, Inc.</a> Integrate with <a className='underline decoration-yellow-500 decoration-2'>Goodreads</a> to show how many books I'm reading and with <a className='underline decoration-green-500 decoration-2'>YouTube API</a>, maybe also the  <a className='underline decoration-violet-500 decoration-2'>Github API</a> as well. </p>
            {/* <div className='my-4'>
              <p> Currently based in &rarr; Montreal</p>
            </div> */}
          </div>
        </PageSection>

        {/* Featured Project Cards */}
        <PageSection margin="mt-14">


          <div className='flex flex-col w-full p-6 rounded-md shadow-soft'>
            <span>Project Card</span>
            <span>image</span>
          </div>


          {/* <div className="relative h-36 w-36">
              <Image className="rounded-full" src={'/../public/images/profile-pic.jpg'} layout="fill" />
            </div> */}


        </PageSection>

        <PageSection>

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
