import React from 'react';

export default function PageSection({ children, ...rest }) {

  let { margin, fullWidth } = rest;

  let marginStying: string = margin ?? 'my-0'
  let widthStyling: string = null

  if (fullWidth) {
    widthStyling = 'w-full';
  }

  return (
    <>
      <section className={`flex flex-col ${widthStyling} items-start justify-center ${marginStying}`}>
        {children}
      </section>
    </>
  );
}
