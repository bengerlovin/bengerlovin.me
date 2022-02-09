import Footer from '@/components/Navigation/Footer';
import NavBar from '@/components/Navigation/NavBar';
import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <NavBar />
      <PageContainer>
        {/* Intro With Name, Bio, Picture */}
        {/* <PageSection>
          <h1 className='mb-4 text-2xl font-bold tracking-tight text-gray-800 font-lora'>
            This is a title in Lora
          </h1>
        </PageSection>

        <PageSection>
          <h1 className='mb-4 text-2xl font-bold tracking-tight text-gray-800 font-pt_serif'>
            This is a title in PT Serif
          </h1>
        </PageSection> */}

        <PageSection>
          <h1 className='mb-4 text-5xl font-bold text-gray-800 tracking-tightest md:tracking-tight font-heading'>
            Hey. I'm Ben.
          </h1>
        </PageSection>

        {/* Backstory / Timeline */}
        <PageSection>
          <div className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
            morbi tristique senectus et netus. Convallis posuere morbi leo urna
            molestie. Vitae nunc sed velit dignissim. Amet nisl suscipit
            adipiscing bibendum. At in tellus integer feugiat scelerisque varius
            morbi enim. Nunc congue nisi vitae suscipit tellus mauris a. Duis ut
            diam quam nulla porttitor massa id neque aliquam. In massa tempor
            nec feugiat nisl. Id volutpat lacus laoreet non curabitur gravida
            arcu ac. Sapien nec sagittis aliquam malesuada bibendum arcu.
            Imperdiet sed euismod nisi porta lorem mollis. Aliquet nibh praesent
            tristique magna sit amet purus gravida quis. Sodales neque sodales
            ut etiam sit amet. Vitae elementum curabitur vitae nunc sed velit
            dignissim sodales ut. Elementum nisi quis eleifend quam.
          </div>
        </PageSection>

        <PageSection>
          <Link passHref href='/projects/hht' as='/projects/hht'>
            <a className='px-2 py-1 m-4 border-blue-500 rounded-md border-[0.5px]'>
              HHT Project Test
            </a>
          </Link>
        </PageSection>

        {/* Skills And Experience */}
        <PageSection>
          <Link href='/projects/speedscanr' as='/projects/speedscanr'>
            <a className='px-2 py-1 m-4 border-blue-500 rounded-md border-[0.5px]'>
              Speed Scanr
            </a>
          </Link>
        </PageSection>

        {/* Projects */}
        <PageSection>
          {/* <Link href='/projects/hht' as='/projects/hht'>
            <a>HHt Project</a>
          </Link>
          <Link href='/projects/speedscanr' as='/projects/speedscanr'>
            <a>Speed scanr Project</a>
          </Link> */}
        </PageSection>
      </PageContainer>
      <Footer />
    </div>
  );
}
