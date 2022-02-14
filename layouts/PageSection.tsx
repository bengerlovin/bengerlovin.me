import React from 'react';

export default function PageSection({ children, ...rest }) {

  let { margin } = rest;

  let marginStying: string = margin ?? 'my-0'

  return (
    <>
      <section className={`flex flex-col items-start justify-center ${marginStying}`}>
        {children}
      </section>
    </>
  );
}
