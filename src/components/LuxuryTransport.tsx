import React from 'react';

interface Vehicle {
  name: string;
  passengers: number;
  luggage: number;
  image: string;
}

const vehicles: Vehicle[] = [
  {
    name: 'V Class Standart',
    passengers: 6,
    luggage: 6,
    image: '🚐'
  },
  {
    name: 'V Class Lux',
    passengers: 6,
    luggage: 6,
    image: '🚐'
  },
  {
    name: 'V Class Ultra Lux',
    passengers: 6,
    luggage: 5,
    image: '🚐'
  },
  {
    name: 'Sprinter Standart',
    passengers: 16,
    luggage: 16,
    image: '🚐'
  }
];

export default function LuxuryTransport() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-wrapper">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-0">
            Discover Our Luxury Transport Options
          </h2>
          <button className="text-green-600 font-bold hover:text-green-700 transition-colors text-lg">
            See all →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-56 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-7xl">
                {vehicle.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-5">{vehicle.name}</h3>
                <div className="flex flex-col gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium">{vehicle.passengers} Passenger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="font-medium">{vehicle.luggage} Luggage</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
