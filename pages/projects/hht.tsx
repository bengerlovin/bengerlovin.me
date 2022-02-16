import PageSubHeading from '@/components/Navigation/PageSubHeading';
import PageContainer from '@/layouts/PageContainer';
import Head from 'next/head';
import React from 'react';

export default function HHTProject() {
  return (
    <>
      <Head>
        <title>HHT Project | Ben Gerlovin Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageContainer>
        <PageSubHeading>
          Happy Healthy Techie
        </PageSubHeading>
        <div>Project page template</div>
      </PageContainer>
    </>
  )
}
