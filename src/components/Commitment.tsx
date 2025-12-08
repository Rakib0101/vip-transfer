import React from 'react';
import Image from 'next/image';

export default function Commitment() {
  return (
    <section className="bg-white py-2">
      <div className="container-wrapper">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
          <div className="flex-1">
            <h2 className="text-base md:text-lg font-bold text-gray-900 mb-1">
              Uncompromising Commitment to Customer Satisfaction
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              We go above and beyond to ensure every journey is smooth, safe, and exceptional.
            </p>
          </div>
          
          {/* Social Proof Logos */}
          <div className="flex items-center gap-8 shrink-0">
            <Image src="/images/TripAdvisor_Logo.svg" alt="Tripadvisor" width={100} height={100} />
            <Image src="/images/Google-Review.png" alt="Google Reviews" width={100} height={100} />
            <Image src="/images/kitsablogo.png" alt="KITSAB" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
}
