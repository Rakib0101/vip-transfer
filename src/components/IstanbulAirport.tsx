import React from 'react';

export default function IstanbulAirport() {
  return (
    <section className="bg-white pb-12">
      <div className="container-wrapper">
        <div className="space-y-12">
          {/* Welcome Section */}
          <div>
            <h2 className="text-base md:text-xl font-bold text-gray-900 mb-2">Welcome to Istanbul!</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              Istanbul Airport (IST) serves as a gateway to Turkey&apos;s rich culture and commerce. 
              Book a reliable transfer to start your journey smoothly. Popular destinations include 
              Taksim Square, Sultanahmet, Besiktas, and Kadikoy. Avoid the stress of public transport 
              and long taxi queues by booking your airport drop-off transfer in advance.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              The airport offers world-class amenities including lounges, dining options, and shopping 
              facilities to make your wait comfortable.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About Istanbul Airport Transfers</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Pre-booked private or shared airport transfers provide instant confirmation, meet-and-greet 
              service, and door-to-door convenience. Our drivers will wait for you with a personalized sign, 
              ensuring a seamless experience from arrival to destination.
            </p>
            
            <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6 ml-4 text-base">
              <li>Private Sedans ideal for solo travelers or couples</li>
              <li>Minivans and Vans perfect for families and small groups</li>
              <li>Luxury SUVs or Limousines for premium comfort and style</li>
              <li>Shared Shuttle Transfers for budget-friendly travel</li>
            </ul>

            <p className="text-gray-600 leading-relaxed text-base">
              All vehicles are air-conditioned, fully licensed, and operated by experienced English-speaking 
              drivers who know the city&apos;s routes and traffic patterns. Your safe, comfortable journey is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
