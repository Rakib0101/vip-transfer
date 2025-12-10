"use client";

import React, { useState } from "react";

interface Office {
  name: string;
  icon: React.ReactNode;
  address: string;
  email: string;
  phone: string;
}

const offices: Office[] = [
  {
    name: "Istanbul Office",
    icon: (
      <svg
        className="w-12 h-12 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Galata Tower representation */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2v20M12 2l-4 4M12 2l4 4M8 6h8M8 10h8M8 14h8M8 18h8"
        />
        <circle cx="12" cy="8" r="2" fill="currentColor" />
      </svg>
    ),
    address: "Torun Center D blok No:10 K:3 Mecidiyeköy Şişli/İstanbul",
    email: "info@viptransfer.com",
    phone: "+90 850 255 48 47",
  },
  {
    name: "Cyprus Office",
    icon: (
      <svg
        className="w-12 h-12 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Building with multiple windows */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    address: "Ankara Cd. Green Star Plaza No:11 Alsancak Girne/KKTC",
    email: "info@viptransfer.com",
    phone: "+90 850 255 48 47",
  },
  {
    name: "England Office",
    icon: (
      <svg
        className="w-12 h-12 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Big Ben representation */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2v20M12 2l-2 2M12 2l2 2M10 4h4M10 8h4M10 12h4M10 16h4M8 20h8"
        />
        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      </svg>
    ),
    address: "11 Coldbath Square London England",
    email: "info@viptransfer.com",
    phone: "+90 850 255 48 47",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container-wrapper py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contact
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We&apos;re here to help with your travel plans, bookings, or any
            questions. Reach out to the VIPTransfer.com team for prompt and
            professional assistance.
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offices.map((office, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-4">{office.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {office.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{office.address}</p>
              <p className="text-sm text-gray-600 mb-1">{office.email}</p>
              <p className="text-sm text-gray-600">{office.phone}</p>
            </div>
          ))}
        </div>

        {/* Turkey Operations Note */}
        <div className="mb-12">
          <p className="text-sm font-bold text-gray-900">
            Our Turkey operations are carried out by Türsab A-14186 Dilkar
            Travel.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="">
          <div className="mb-8">
            <h2 className="text-xl md:text-xl font-bold text-gray-900 mb-2">
              Get in Touch with Us
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl">
              Please complete the form below, and a member of our team will get
              back to you as soon as possible. We&apos;re ready to assist with
              bookings, enquiries, or any special requests.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name and Surname Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Message Row */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

