'use client';

import React, { useState } from 'react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'transfer' | 'hourly'>('transfer');
  const [pickupDate, setPickupDate] = useState('Tue, Dec 9, 2025, 12:15');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  return (
    <section className="relative min-h-[700px] flex items-center bg-gradient-to-br from-green-900 via-green-800 to-green-700">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEgxOTIwVjgwMEgwVjB6IiBmaWxsPSIjMDY1ZjM0Ii8+PHBhdGggZD0iTTAgNDAwTDE5MjAgNTAwTDAgNjAwVjQwMHoiIGZpbGw9IiMwODc4NDUiIG9wYWNpdHk9IjAuNCIvPjwvc3ZnPg==')] bg-cover bg-center opacity-40"></div>
      
      <div className="container-wrapper py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Luxury Airport Transfers<br />Chauffeur Services
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-xl">
              Experience the perfect blend of comfort, style, and reliability with VIPTransfer.com. 
              From private airport transfers to chauffeur driven journeys, we deliver seamless travel 
              tailored to your needs. Arrive on time, every time and always in style.
            </p>
          </div>

          {/* Right Booking Form */}
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md mx-auto lg:mx-0">
            {/* Tabs */}
            <div className="flex gap-1 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('transfer')}
                className={`px-6 py-3 font-semibold text-sm transition-colors relative ${
                  activeTab === 'transfer'
                    ? 'text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Transfer
                {activeTab === 'transfer' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('hourly')}
                className={`px-6 py-3 font-semibold text-sm transition-colors relative ${
                  activeTab === 'hourly'
                    ? 'text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Hourly
                {activeTab === 'hourly' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></span>
                )}
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-5">
              {/* Pickup Date & Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pickup date & time
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3.5 hover:border-green-500 transition-colors">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="text"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    placeholder="Select date & time"
                  />
                </div>
              </div>

              {/* From Where */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  From Where
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3.5 hover:border-green-500 transition-colors">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    type="text"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    placeholder="Address, airport, hotel, ...."
                  />
                </div>
              </div>

              {/* To Where */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  To Where
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3.5 hover:border-green-500 transition-colors">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    type="text"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                    placeholder="Address, airport, hotel, ...."
                  />
                  <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Search Button */}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors text-base">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
