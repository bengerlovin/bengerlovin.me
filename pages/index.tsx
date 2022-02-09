import Navigation from '@/components/Navigation';
import PageContainer from '@/layouts/PageContainer';
import PageSection from '@/layouts/PageSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <PageContainer>
        <PageSection>
          <div className='text-blue-600'>another section</div>
        </PageSection>
        <Link href='/projects/hht' as='/projects/hht'>
          <a>HHt Project</a>
        </Link>
        <Link href='/projects/speedscanr' as='/projects/speedscanr'>
          <a>Speed scanr Project</a>
        </Link>
      </PageContainer>
    </div>
  );
}
