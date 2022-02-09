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
      <div>Speed scanr project</div>
      <button onClick={callHelloApi}>Call hello</button>
      <button onClick={() => setApiData(null)}>clear Data</button>

      {apiData && (
        <div>
          <p className='font-bold'>api data</p>
          <span className='font-semibold text-red-500'>{apiData.name}</span>
        </div>
      )}
    </>
  );
}
