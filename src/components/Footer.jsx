import React from 'react'
import logo from '../assets/logo.png'

const footerLinks = [
  {
    heading: 'About',
    links: ['Our Story', 'Careers', 'Press', 'Investors', 'Blog'],
  },
  {
    heading: 'Franchise',
    links: ['Become a Partner', 'Partner Benefits', 'Application Process', 'Partner Support', 'Training'],
  },
  {
    heading: 'Help',
    links: ['Customer Support', 'Track Order', 'Return & Refunds', 'FAQs', 'Contact Us'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Cancellation Policy', 'Data Protection'],
  },
];

const Footer = () => {
  return (
    <footer className="pt-16 pb-6" style={{ backgroundColor: '#121212' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-8">
          {/* Left: Logo, description, contact */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              {/* Logo Image */}
              <img src={logo} alt="FirstStore Logo" className="w-10 h-10 object-contain brightness-0 invert opacity-100" />
              <span className="text-white text-2xl font-bold">FirstStore</span>
            </div>
            <div className="text-white text-base leading-relaxed">
              Essential deliveries. Redefined. Get groceries and essentials from nearby FirstStores in 10–30 minutes with real-time inventory.
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v1a4 4 0 01-8 0v-1m8 0V8a4 4 0 00-8 0v4m8 0H8" />
                </svg>
                <span className="text-white text-base">info@firststore.io</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm8-8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span className="text-white text-base">+91 7011112666</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <circle cx="12" cy="11" r="3" strokeWidth="2" />
                </svg>
                <span className="text-white text-base">Lodha Signet 1, Unit 815, Premier Colony Ground,<br/>Manpada, Kalyan, Thane – 421204</span>
              </div>
            </div>
          </div>

          {/* Right: Four Columns of Links */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-white font-bold text-lg mb-4">{col.heading}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i} className="text-white text-base hover:text-teal-400 transition-colors cursor-pointer">{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="border-t mb-4" style={{ borderColor: '#00BFA6' }}></div>
        {/* Copyright */}
        <div className="text-center text-sm" style={{ color: '#00BFA6' }}>
          © 2025 FirstStore Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
