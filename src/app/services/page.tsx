"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Chauffeur-driven Car",
    description:
      "Travel in luxury vehicles driven by experts for comfort and peace of mind.",
    image: "/images/services/service-01.jpg",
  },
  {
    title: "Intercity Routes",
    description:
      "Enjoy smooth, private journeys between cities with comfort and total flexibility.",
    image: "/images/services/service-02.jpg",
  },
  {
    title: "Airport Transfer",
    description:
      "Seamless airport rides delivered with comfort, punctuality, and reliability.",
    image: "/images/services/service-03.jpg",
  },
  {
    title: "Helicopter Charter",
    description:
      "Fly swiftly over city traffic in a private helicopter for time-saving travel.",
    image: "/images/services/service-04.jpg",
  },
  {
    title: "Private Jet Charter",
    description:
      "Experience tailored jet flights offering privacy, speed, and absolute comfort.",
    image: "/images/services/service-05.jpg",
  },
  {
    title: "Yacht Charter",
    description:
      "Relax on luxury yachts perfect for leisure, private events, or coastal escapes.",
    image: "/images/services/service-06.jpg",
  },
  {
    title: "Airport Taxi",
    description:
      "Secure timely rides from the airport with fixed fares and courteous drivers.",
    image: "/images/services/service-07.jpg",
  },
  {
    title: "Airport Shuttle",
    description:
      "Travel affordably with shared rides that remain safe, quick, and efficient.",
    image: "/images/services/service-08.jpg",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"transfer" | "hourly">("transfer");
  const [pickupDate, setPickupDate] = useState("Wed, Dec 10, 2025, 15:15");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('/images/our-services-banner.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="container-wrapper py-20 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Professional Transfer Services
            </h1>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              Experience the perfect blend of comfort, style, and reliability
              with VIPTransfer.com. From private airport transfers to chauffeur
              driven journeys, we deliver seamless travel tailored to your
              needs. Arrive on time, every time and always in style.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section with Booking Form */}
      <section className="py-16">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
            {/* Services Grid - Takes 8 columns */}
            <div className="lg:col-span-5">
              <div className="max-w-4xl mb-6">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">
                  Tailored Solutions for Every Journey
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  At VIPTransfer.com, we understand that every journey is
                  unique. That&apos;s why we offer bespoke transport solutions
                  designed to meet your specific travel needs. Whether
                  you&apos;re traveling for business or pleasure, our range of
                  premium services ensures you arrive in comfort and style.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-24 bg-gray-200">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <a
                        href={`/services/${service.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-gray-900 font-medium text-sm hover:text-green-600 transition-colors inline-flex items-center gap-1"
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form - Takes 4 columns, sticky on scroll */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-xl shadow-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Reserve Your Transfer Now
                  </h3>

                  {/* Tabs */}
                  <div className="flex gap-1 mb-6 border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab("transfer")}
                      className={`px-4 py-2 font-semibold text-sm transition-colors relative ${
                        activeTab === "transfer"
                          ? "text-green-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      Transfer
                      {activeTab === "transfer" && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></span>
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab("hourly")}
                      className={`px-4 py-2 font-semibold text-sm transition-colors relative ${
                        activeTab === "hourly"
                          ? "text-green-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      Hourly
                      {activeTab === "hourly" && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></span>
                      )}
                    </button>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    {/* Pickup Date & Time */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Pickup date & time
                      </label>
                      <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 hover:border-green-500 transition-colors">
                        <svg
                          className="w-5 h-5 text-gray-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <input
                          type="text"
                          value={pickupDate}
                          onChange={(e) => setPickupDate(e.target.value)}
                          className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
                          placeholder="Select date & time"
                        />
                      </div>
                    </div>

                    {/* From Where */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        From Where
                      </label>
                      <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 hover:border-green-500 transition-colors">
                        <svg
                          className="w-5 h-5 text-green-600 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          value={fromLocation}
                          onChange={(e) => setFromLocation(e.target.value)}
                          className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
                          placeholder="Address, airport, hot..."
                        />
                      </div>
                    </div>

                    {/* To Where */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        To Where
                      </label>
                      <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 hover:border-green-500 transition-colors">
                        <svg
                          className="w-5 h-5 text-red-500 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          value={toLocation}
                          onChange={(e) => setToLocation(e.target.value)}
                          className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
                          placeholder="Address, airport, ..."
                        />
                        <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Search Button */}
                    <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition-colors text-sm">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
