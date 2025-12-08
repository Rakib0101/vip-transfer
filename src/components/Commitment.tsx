import React from 'react';

export default function Commitment() {
  return (
    <section className="bg-white py-6 border-b border-gray-100">
      <div className="container-wrapper">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
              Uncompromising Commitment to Customer Satisfaction
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              We go above and beyond to ensure every journey is smooth, safe, and exceptional.
            </p>
          </div>
          
          {/* Social Proof Logos */}
          <div className="flex items-center gap-8 flex-shrink-0">
            <div className="text-gray-500 font-semibold text-sm">Tripadvisor</div>
            <div className="text-gray-500 font-semibold text-sm">Google Reviews</div>
            <div className="text-gray-500 font-semibold text-sm">KITSAB</div>
          </div>
        </div>
      </div>
    </section>
  );
}
