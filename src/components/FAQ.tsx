'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How can I get from Istanbul Airport to the city center?',
    answer: 'In addition to public transport, you can book private transfer options such as sedans, vans, SUVs, or coaches for direct and comfortable transportation to the city.'
  },
  {
    question: 'How much does a private transfer from Istanbul Airport cost?',
    answer: 'The cost of a private transfer from Istanbul Airport varies depending on the vehicle type, distance, and service level. Contact us for a personalized quote based on your specific needs.'
  },
  {
    question: 'How long does it take to reach the city from Istanbul Airport?',
    answer: 'The travel time from Istanbul Airport to the city center typically ranges from 45 minutes to 1.5 hours, depending on traffic conditions and your specific destination within the city.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container-wrapper">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-4 text-lg">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
