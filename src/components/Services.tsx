import React from 'react';
import Image from 'next/image';
interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'Chauffeur-driven Car',
    description: 'Travel in luxury vehicles driven by experts for comfort and peace of mind.',
    image: '/images/services/service-01.jpg'
  },
  {
    title: 'Intercity Routes',
    description: 'Enjoy smooth, private journeys between cities with comfort and total flexibility.',
    image: '/images/services/service-02.jpg'
  },
  {
    title: 'Airport Transfer',
    description: 'Seamless airport rides delivered with comfort, punctuality, and reliability.',
    image: '/images/services/service-03.jpg'
  },
  {
    title: 'Helicopter Charter',
    description: 'Fly swiftly over city traffic in a private helicopter for time-saving travel.',
    image: '/images/services/service-04.jpg'
  },
  {
    title: 'Private Jet Charter',
    description: 'Experience tailored jet flights offering privacy, speed, and absolute comfort.',
    image: '/images/services/service-05.jpg'
  },
  {
    title: 'Yacht Charter',
    description: 'Relax on luxury yachts perfect for leisure, private events, or coastal escapes.',
    image: '/images/services/service-06.jpg'
  },
  {
    title: 'Airport Taxi',
    description: 'Secure timely rides from the airport with fixed fares and courteous drivers.',
    image: '/images/services/service-07.jpg'
  },
  {
    title: 'Airport Shuttle',
    description: 'Travel affordably with shared rides that remain safe, quick, and efficient.',
    image: '/images/services/service-08.jpg'
  }
];

export default function Services() {
  return (
    <section className="pt-12 pb-16">
      <div className="container-wrapper">
        <div className="mb-10">
          <h2 className="text-base md:text-xl font-bold text-gray-900 mb-1">Our services</h2>
          <p className="text-sm md:text-base text-gray-600">
            Discover a range of premium transfer solutions designed for comfort, reliability, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className=""
            >
              <Image src={service.image} alt={service.title} width={290} height={72} className="w-full h-auto rounded-xl" />
              <div className="">
                <h3 className="text-xl font-bold text-gray-900 mb-1.5">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
