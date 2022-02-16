import PageSubHeading from '@/components/Navigation/PageSubHeading';
import PageContainer from '@/layouts/PageContainer';
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
      <PageContainer>
        <PageSubHeading>
          Speed Scanr
        </PageSubHeading>
        <div>Project page template</div>
      </PageContainer>
    </>
  );
}
