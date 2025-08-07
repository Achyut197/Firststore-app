import React from 'react'
import campaignImg from '../assets/Ecommerce-campaign-bro-1.png'
import logo from '../assets/logo.png'
// Placeholder for the second illustration
import trustImg from '../assets/Ecommerce-webpage-pana-1@2x.png'
import storeBg from '../assets/c8cd44c7d0b45588179bee9094fbd5eb181736fa.jpg'
import networkBg from '../assets/187c74d402d87cb8889619e6881515afa861e5a1.jpg'

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4" />
      </svg>
    ),
    title: 'One-Time Franchise Fee',
    desc: '₹10 Lakhs Only',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
        <rect x="7" y="7" width="4" height="4" rx="2" strokeWidth="2" />
        <rect x="13" y="13" width="4" height="4" rx="2" strokeWidth="2" />
      </svg>
    ),
    title: 'Low Royalty',
    desc: '0–7% Based on Performance',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <rect x="7" y="10" width="10" height="3" rx="1" strokeWidth="2" />
      </svg>
    ),
    title: 'Initial Investment',
    desc: '₹30–50 Lakhs',
  },
]

const trustFeatures = [
  {
    icon: (
      <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
        <rect x="7" y="7" width="4" height="4" rx="2" strokeWidth="2" />
        <rect x="13" y="13" width="4" height="4" rx="2" strokeWidth="2" />
      </svg>
    ),
    title: 'Tech-Powered Retail Stack',
    desc: 'POS, Analytics & Inventory in One',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4" />
      </svg>
    ),
    title: 'Full Onboarding & Store Training',
    desc: 'Even for First-Time Owners',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Flexible Store Models',
    desc: 'From 500 to 5000+ sq. ft. Footprints',
  },
]

const Franchise = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-[#161616] px-4 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Launch Your <span className="text-teal-400">Retail<br className="hidden md:block" />Dream</span> with FirstStore
              </h1>
              <p className="text-gray-300 text-lg mb-10 max-w-xl">
                India’s Smartest Franchise Opportunity for Modern Retail Entrepreneurs
              </p>
            </div>
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                  <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-300 text-base">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <button className="w-full md:w-auto px-10 py-4 bg-teal-400 text-[#161616] font-bold text-lg rounded-xl hover:bg-teal-500 transition-colors duration-200">
                Schedule a Discovery Call
              </button>
            </div>
          </div>
          {/* Right Column - Logo + Illustration Image */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-xl flex flex-col">
              <div className="flex justify-end items-center gap-6 mb-4">
                <img src={logo} alt="FirstStore Logo" className="w-10 h-10 brightness-0 invert opacity-100" />
                <span className="text-white text-2xl font-bold">FirstStore</span>
              </div>
              <div className="aspect-square flex items-center justify-center">
                <img src={campaignImg} alt="Ecommerce Campaign" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="min-h-screen flex items-center justify-center bg-[#161616] px-4 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Why Smart Entrepreneurs <span className="text-teal-400">Trust<br className="hidden md:block" />FirstStore</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-xl">
                A Future-Ready Franchise Backed by Technology, Training & Growth
              </p>
            </div>
            <div className="space-y-6">
              {trustFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                  <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-300 text-base">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <button className="w-full md:w-auto px-10 py-4 bg-teal-400 text-[#161616] font-bold text-lg rounded-xl hover:bg-teal-500 transition-colors duration-200">
                Explore Franchise Benefits
              </button>
            </div>
          </div>
          {/* Right Column - Illustration Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl aspect-square flex items-center justify-center relative">
              {/* Logo in top right */}
              <div className="absolute top-8 right-4 flex items-center gap-6 p-2 z-10">
                <img src={logo} alt="FirstStore Logo" className="w-10 h-10 brightness-0 invert opacity-100" />
                <span className="text-white text-2xl font-bold">FirstStore</span>
              </div>
              <img src={trustImg} alt="Ecommerce Webpage Illustration" className="w-full h-full object-contain rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Profit Retail Venture Section */}
      <section className="min-h-screen flex items-center justify-center bg-[#161616] px-4 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Build a Profitable Retail Venture<br />with <span className="text-teal-400">FirstStore</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-xl">
                Smart Investments. Transparent Operations. Scalable Growth.
              </p>
            </div>
            <div className="space-y-6">
              {/* Feature Card 1 */}
              <div className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <text x="8" y="17" fontSize="10" fill="#14e0c7">₹</text>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">High ROI Potential</h3>
                  <p className="text-gray-300 text-base">Break Even in 18–24 Months</p>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                    <path d="M8 10h8M8 14h8" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Zero Hidden Charges</h3>
                  <p className="text-gray-300 text-base">Transparent Financial Model</p>
                </div>
              </div>
              {/* Feature Card 3 */}
              <div className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 12h16M12 4v16" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Scalable Store Formats</h3>
                  <p className="text-gray-300 text-base">Expand as You Grow</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button className="w-full md:w-auto px-10 py-4 bg-teal-400 text-[#161616] font-bold text-lg rounded-xl hover:bg-teal-500 transition-colors duration-200">
                See Profit Projections
              </button>
            </div>
          </div>
          {/* Right Column - Illustration + Logo */}
          <div className="relative flex items-center justify-center">
            {/* Logo in top right */}
            <div className="absolute top-0 right-0 flex items-center gap-2 p-4">
              <img src={logo} alt="FirstStore Logo" className="w-8 h-8 brightness-0 invert opacity-100" />
              <span className="text-white text-xl font-bold">FirstStore</span>
            </div>
            <img src={trustImg} alt="Business Plan Illustration" className="w-full max-w-xl aspect-square object-contain rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Fourth Section: Franchise Support */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundImage: `url(${storeBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="max-w-7xl w-full relative z-10">
          {/* Logo in top right */}
          <div className="absolute top-4 right-4 flex items-center gap-4">
            <img src={logo} alt="FirstStore Logo" className="w-10 h-10 brightness-0 invert opacity-100" />
            <span className="text-white text-2xl font-bold">FirstStore</span>
          </div>
          <div className="flex flex-col items-start justify-center min-h-screen">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              We’re With <span className="text-teal-400">You</span><br />From Setup to Success
            </h2>
            <p className="text-white text-lg mb-10 max-w-2xl">
              Get Complete Franchise Support to Launch & Run Your Store Seamlessly
            </p>
            <div className="space-y-6 w-full max-w-lg mb-8">
              {/* Feature Card 1 */}
              <div className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                    <path d="M7 12h10M12 7v10" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">End-to-End Setup Assistance</h3>
                  <p className="text-gray-300 text-base">From Interiors to Tech Integration</p>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                    <path d="M7 16l5-5 5 5" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Logistics & Inventory Support</h3>
                  <p className="text-gray-300 text-base">Powered by Smart Supply Chain</p>
                </div>
              </div>
              {/* Feature Card 3 */}
              <div className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                    <path d="M8 12h8M12 8v8" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Dedicated Franchise Manager</h3>
                  <p className="text-gray-300 text-base">Your Success Partner</p>
                </div>
              </div>
            </div>
            <button className="w-full max-w-lg px-10 py-4 bg-teal-400 text-[#161616] font-bold text-lg rounded-xl hover:bg-teal-500 transition-colors duration-200">
              Talk to Our Franchise Consultant
            </button>
          </div>
        </div>
      </section>

      {/* Fifth Section: Network Availability */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundImage: `url(${networkBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="max-w-7xl w-full relative z-10">
          {/* Logo in top right */}
          <div className="absolute top-4 right-4 flex items-center gap-4">
            <img src={logo} alt="FirstStore Logo" className="w-10 h-10 brightness-0 invert opacity-100" />
            <span className="text-white text-2xl font-bold">FirstStore</span>
          </div>
          <div className="flex flex-col items-start justify-center min-h-screen">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Your <span className="text-teal-400">Store</span>.<br />Your <span className="text-teal-400">City</span>.<br />Our <span className="text-teal-400">Network</span>.
            </h2>
            <p className="text-white text-lg mb-10 max-w-2xl">
              Join a Growing Franchise Movement Across INDIA
            </p>
            <div className="space-y-6 w-full max-w-lg mb-8">
              {/* Feature Card 1 */}
              <div className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.91z" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Launch in Your Hometown or Metro</h3>
                  <p className="text-gray-300 text-base">Flexible Location Options</p>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M8 12h8M12 8v8" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Pan-India Supply & Tech Network</h3>
                  <p className="text-gray-300 text-base">Even in Remote Areas</p>
                </div>
              </div>
              {/* Feature Card 3 */}
              <div className="flex items-center gap-5 bg-[#181A1B] bg-opacity-80 rounded-2xl px-6 py-5 shadow border border-[#232323]">
                <div className="bg-[#232323] rounded-xl p-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                    <path d="M8 12h8M12 8v8" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Location-Specific Logistics Models</h3>
                  <p className="text-gray-300 text-base">Optimized for Speed & Cost</p>
                </div>
              </div>
            </div>
            <button className="w-full max-w-lg px-10 py-4 bg-teal-400 text-[#161616] font-bold text-lg rounded-xl hover:bg-teal-500 transition-colors duration-200">
              Check Availability in Your City
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Franchise
