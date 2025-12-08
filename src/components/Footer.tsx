import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-wrapper">
        {/* Top Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-gray-800">
          {/* WhatsApp & Phone Number */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">+90 850 255 48 47</p>
              <p className="text-sm text-gray-400">WhatsApp & Phone Number</p>
            </div>
          </div>

          {/* Email Support */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">info@viptransfer.com</p>
              <p className="text-sm text-gray-400">Email Support</p>
            </div>
          </div>

          {/* Company Name */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Lebtur Transfer Inc.</p>
              <p className="text-sm text-gray-400">We carry the world</p>
            </div>
          </div>
        </div>

        {/* Main Navigation Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12 border-b border-gray-800">
          {/* VIPTransfer Branding */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-white">VİP</span>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">TRANSFER</span>
                <span className="text-sm text-yellow-400 font-semibold">.com</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              VIPTransfer.com delivers premium transfer services worldwide, combining luxury vehicles, 
              professional chauffeurs, and seamless experiences for travellers who expect more.
            </p>
          </div>

          {/* Corporate Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Corporate</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-white hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#vehicles" className="text-white hover:text-yellow-400 transition-colors">Our Vehicles</a></li>
              <li><a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#chauffeur" className="text-white hover:text-yellow-400 transition-colors">Chauffeur-driven Car</a></li>
              <li><a href="#intercity" className="text-white hover:text-yellow-400 transition-colors">Intercity Routes</a></li>
              <li><a href="#airport" className="text-white hover:text-yellow-400 transition-colors">Airport Transfer</a></li>
            </ul>
          </div>

          {/* Private Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Private Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#helicopter" className="text-white hover:text-yellow-400 transition-colors">Helicopter Charter</a></li>
              <li><a href="#jet" className="text-white hover:text-yellow-400 transition-colors">Private Jet Charter</a></li>
              <li><a href="#yacht" className="text-white hover:text-yellow-400 transition-colors">Yacht Charter</a></li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="py-8 border-b border-gray-800">
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="inline-block">
              <div className="bg-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-black font-semibold text-sm">Download on the App Store</span>
              </div>
            </a>
            <a href="#" className="inline-block">
              <div className="bg-black border border-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm-4.81-4.81L6.05 2.66l10.76 6.15-2.81 2.9zm1.19-1.19L17.95 2.66 3.84 2.66l8.35 5.46z" fill="#fff"/>
                </svg>
                <span className="text-white font-semibold text-sm">ANDROID APP ON Google play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="py-8 border-b border-gray-800">
          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-4 text-sm text-white">
                <a href="#cookies" className="hover:text-yellow-400 transition-colors">Cookies</a>
                <a href="#terms" className="hover:text-yellow-400 transition-colors">Terms</a>
                <a href="#privacy" className="hover:text-yellow-400 transition-colors">Privacy and Security</a>
              </div>
              <p className="text-sm text-white">
                © 2025 VIPTransfer.com. All rights reserved.
              </p>
              <p className="text-sm text-white">
                Unauthorised use or reproduction of any content is strictly prohibited.
              </p>
            </div>
            <div className="shrink-0">
              <div className="text-white">
                <p className="text-xl font-bold">DAKSİL</p>
                <p className="text-xs text-gray-400">Creative Digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
