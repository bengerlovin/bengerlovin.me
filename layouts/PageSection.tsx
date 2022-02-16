import React from 'react';

type PageSectionProps = {
  children: React.ReactNode;
  margin?: string;
  fullWidth?: boolean;
}

export default function PageSection({ children, margin, fullWidth }: PageSectionProps) {


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
