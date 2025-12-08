import React from 'react';

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    icon: (
      <svg className="w-14 h-14 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Trusted Professionals',
    description: 'Our experienced drivers deliver safe, courteous journeys, ensuring you travel in confidence wherever you go.'
  },
  {
    icon: (
      <svg className="w-14 h-14 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Bespoke Travel Options',
    description: 'From private cars to air and sea charters, enjoy tailored solutions that fit your unique travel plans and preferences.'
  },
  {
    icon: (
      <svg className="w-14 h-14 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Premium Comfort',
    description: 'Relax in stylish vehicles equipped for comfort, giving you a smooth ride and a truly first-class experience every time.'
  }
];

export default function ValueProposition() {
  return (
    <section className="bg-white pt-0 pb-16">
      <div className="container-wrapper">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                {prop.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{prop.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
