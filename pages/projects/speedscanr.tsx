import PageSubHeading from '@/components/Navigation/PageSubHeading';
import PageContainer from '@/layouts/PageContainer';
import Head from 'next/head';
import React, { useState } from 'react';

export default function SpeedScanrProject() {
  const [apiData, setApiData] = useState(null);

  async function callHelloApi() {
    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.json();
    setApiData(data);
  }

  return (
    <>
      <Head>
        <title>Speed Scanr Project | Ben Gerlovin Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageContainer>
        <PageSubHeading>
          Speed Scanr
        </PageSubHeading>
        <div>Project page template</div>
      </PageContainer>
    </>
  );
}
