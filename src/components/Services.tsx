import React from 'react';

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'Chauffeur-driven Car',
    description: 'Travel in luxury vehicles driven by experts for comfort and peace of mind.',
    image: '🚗'
  },
  {
    title: 'Intercity Routes',
    description: 'Enjoy smooth, private journeys between cities with comfort and total flexibility.',
    image: '🏙️'
  },
  {
    title: 'Airport Transfer',
    description: 'Seamless airport rides delivered with comfort, punctuality, and reliability.',
    image: '✈️'
  },
  {
    title: 'Helicopter Charter',
    description: 'Fly swiftly over city traffic in a private helicopter for time-saving travel.',
    image: '🚁'
  },
  {
    title: 'Private Jet Charter',
    description: 'Experience tailored jet flights offering privacy, speed, and absolute comfort.',
    image: '🛩️'
  },
  {
    title: 'Yacht Charter',
    description: 'Relax on luxury yachts perfect for leisure, private events, or coastal escapes.',
    image: '🛥️'
  },
  {
    title: 'Airport Taxi',
    description: 'Secure timely rides from the airport with fixed fares and courteous drivers.',
    image: '🚕'
  },
  {
    title: 'Airport Shuttle',
    description: 'Travel affordably with shared rides that remain safe, quick, and efficient.',
    image: '🚐'
  }
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-wrapper">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our services</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Discover a range of premium transfer solutions designed for comfort, reliability, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-7xl">
                {service.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
