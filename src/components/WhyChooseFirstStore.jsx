import React from 'react'

const WhyChooseFirstStore = () => {
  return (
    <section className="py-24" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose FirstStore?
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            We're not just another delivery app. We're building the future of local commerce with technology that actually works.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Franchise-first model */}
          <div className="bg-gray-800 rounded-xl p-8 border border-teal-400">
            <div className="w-12 h-12 bg-gray-700 rounded-lg border border-teal-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Franchise-first model
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We own the stores, so you get consistent quality and reliable service every time
            </p>
          </div>

          {/* Card 2: Live Inventory Sync */}
          <div className="bg-gray-800 rounded-xl p-8 border border-teal-400">
            <div className="w-12 h-12 bg-gray-700 rounded-lg border border-teal-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Live Inventory Sync
            </h3>
            <p className="text-gray-300 leading-relaxed">
              What you see is what's actually in stock—no more disappointments at checkout
            </p>
          </div>

          {/* Card 3: AI-Powered Routing */}
          <div className="bg-gray-800 rounded-xl p-8 border border-teal-400">
            <div className="w-12 h-12 bg-gray-700 rounded-lg border border-teal-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              AI-Powered Routing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Riders take optimized routes in real-time, ensuring fastest possible delivery
            </p>
          </div>

          {/* Card 4: Omni-channel Returns */}
          <div className="bg-gray-800 rounded-xl p-8 border border-teal-400">
            <div className="w-12 h-12 bg-gray-700 rounded-lg border border-teal-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Omni-channel Returns
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Return via store or app—your choice. Flexible returns that work for you
            </p>
          </div>

          {/* Card 5: Works in Low Bandwidth */}
          <div className="bg-gray-800 rounded-xl p-8 border border-teal-400">
            <div className="w-12 h-12 bg-gray-700 rounded-lg border border-teal-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Works in Low Bandwidth
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Built for Every city too, optimized for all network conditions
            </p>
          </div>

          {/* Card 6: Full Admin Control */}
          <div className="bg-gray-800 rounded-xl p-8 border border-teal-400">
            <div className="w-12 h-12 bg-gray-700 rounded-lg border border-teal-400 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Full Admin Control
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Every order is monitored end-to-end with complete transparency and tracking
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseFirstStore
