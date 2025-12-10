"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Vehicle {
  name: string;
  passengers: number;
  luggage: number;
  image: string;
}

const vehicles: Vehicle[] = [
  {
    name: "V Class Standart",
    passengers: 6,
    luggage: 6,
    image: "/images/vehicles/v-01.jpg",
  },
  {
    name: "V Class Lux",
    passengers: 6,
    luggage: 6,
    image: "/images/vehicles/v-02.jpg",
  },
  {
    name: "V Class Ultra Lux",
    passengers: 6,
    luggage: 5,
    image: "/images/vehicles/v-03.jpg",
  },
  {
    name: "Sprinter Standart",
    passengers: 16,
    luggage: 16,
    image: "/images/vehicles/v-04.jpg",
  },
  {
    name: "Mercedes S-Class",
    passengers: 4,
    luggage: 3,
    image: "/images/vehicles/v-01.jpg",
  },
  {
    name: "BMW 7 Series",
    passengers: 4,
    luggage: 3,
    image: "/images/vehicles/v-02.jpg",
  },
  {
    name: "Audi A8",
    passengers: 4,
    luggage: 3,
    image: "/images/vehicles/v-03.jpg",
  },
  {
    name: "Sprinter Lux",
    passengers: 16,
    luggage: 16,
    image: "/images/vehicles/v-04.jpg",
  },
];

export default function OurVehiclesPage() {
  const [activeTab, setActiveTab] = useState<"transfer" | "hourly">("transfer");
  const [pickupDate, setPickupDate] = useState("Wed, Dec 10, 2025, 15:15");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('/images/our-vehicle-banner.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="container-wrapper py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Explore Our Premium Vehicle Fleet
            </h1>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              Discover our diverse range of vehicles, each offering exceptional comfort, style, and capacity to suit every journey. From elegant sedans to spacious vans, VIPTransfer.com ensures your ride matches your needs perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Grid Section with Booking Form */}
      <section className="py-16">
        <div className="container-wrapper">
            <div className="">
              <div className="max-w-4xl mb-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                At VIPTransfer.com, we take pride in our curated fleet of premium vehicles, ensuring safety, comfort, and elegance on every journey. Whether you’re booking an airport transfer, a corporate ride, or transport for a special occasion, our selection from sophisticated sedans to spacious luxury vans is meticulously maintained to deliver a flawless experience. Each vehicle offers generous capacity and refined interiors, reflecting our dedication to exceptional service. Choose the ideal car for your needs and travel with confidence, knowing VIPTransfer.com provides top-quality transportation solutions wherever you go.
                </p>
              </div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Our Exclusive Vehicle Collection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {vehicles.map((vehicle, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-medium text-gray-900 mb-5">
                      {vehicle.name}
                    </h3>
                    <div className="mb-4">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        width={290}
                        height={72}
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="flex justify-between py-3 gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="font-medium">
                          {vehicle.passengers} Passenger
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <span className="font-medium">
                          {vehicle.luggage} Luggage
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}

