import React from 'react'
import logo from '../assets/logo.png'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Section - Hero Content */}
          <div className="space-y-12">
            {/* Headline */}
            <div className="space-y-8">
              <h1 className="text-7xl lg:text-8xl font-bold text-white leading-tight">
                Essential Deliveries.
                <br />
                <span className="text-teal-400">Redefined.</span>
              </h1>
              
              {/* Description */}
              <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Get groceries and essentials from nearby FirstStores in 10-30 minutes, real-time inventory, no delays.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 bg-teal-400 text-white font-bold rounded-xl hover:bg-teal-500 transition-colors duration-200 text-xl">
                Get The App
              </button>
              <button className="px-10 py-5 border-2 border-teal-400 text-white font-bold rounded-xl hover:bg-teal-400 hover:text-white transition-all duration-200 text-xl">
                Become a Franchise Partner
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-16">
              <div className="flex items-center gap-5">
                <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-semibold text-xl">10-30 Min Delivery</span>
              </div>
              
              <div className="flex items-center gap-5">
                <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white font-semibold text-xl">Live Inventory</span>
              </div>
              
              <div className="flex items-center gap-5">
                <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-white font-semibold text-xl">AI-Powered Routing</span>
              </div>
            </div>
          </div>

          {/* Right Section - UI Mockup Card */}
          <div className="relative">
            <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700 relative max-w-lg mx-auto">
              {/* Teal Circle Element */}
              <div className="absolute -top-5 -right-5 w-10 h-10 bg-teal-400 rounded-full shadow-lg"></div>
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-10">
                <img src={logo} alt="FirstStore Logo" className="w-10 h-10 brightness-0 invert opacity-100" />
                <span className="text-white font-bold text-xl">FirstStore</span>
              </div>

              {/* Order Status List */}
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-5 h-5 bg-teal-400 rounded-full"></div>
                  <span className="text-white text-lg">Order Placed</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-5 h-5 bg-teal-400 rounded-full"></div>
                  <span className="text-white text-lg">Items Locked</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-5 h-5 bg-teal-400 rounded-full"></div>
                  <span className="text-white text-lg">Rider Assigned</span>
                </div>
                <div className="flex items-center gap-5 bg-teal-400 rounded-xl p-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-white text-lg font-bold">Order Delivered</span>
                </div>
              </div>

              {/* Estimated Delivery */}
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400">18:42</div>
                <div className="text-white text-lg">Estimated Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
