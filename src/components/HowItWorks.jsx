import React from 'react'

const HowItWorks = () => {
  return (
    <section className="py-24" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            How FirstStore Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Simple, fast, and reliable. Get your essentials delivered in minutes with our streamlined process.
          </p>
        </div>

        {/* Four-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Browse your local FirstStore
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Find products from stores near you with real-time availability
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              See what's in stock live
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Never face out-of-stock surprises with our live inventory system
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Get 10-30 min fast delivery
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AI-optimized routes ensure lightning-fast delivery to your door
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Easy returns via app/store
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Hassle-free returns through the app or visit any FirstStore location
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
