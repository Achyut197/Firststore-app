import React from 'react'

const AIPoweredSystems = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            AI-Powered Smart Systems
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our advanced AI algorithms work behind the scenes to optimize every aspect of your delivery experience.
          </p>
        </div>

        {/* Four Feature Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Top-Left Card: Routing Optimizer */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 relative h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-teal-400 font-bold text-xl mb-3">Routing Optimizer</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Assigns riders dynamically based on traffic patterns, weather conditions, and delivery density for optimal efficiency
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 absolute bottom-6 left-8">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-gray-300 text-sm">AI-Powered</span>
            </div>
          </div>

          {/* Top-Right Card: Inventory Locking */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 relative h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-teal-400 font-bold text-xl mb-3">Inventory Locking</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Prevents overselling and automatically syncs with fallback stores when items are temporarily unavailable
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 absolute bottom-6 left-8">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-gray-300 text-sm">AI-Powered</span>
            </div>
          </div>

          {/* Bottom-Left Card: Demand Forecasting */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 relative h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-teal-400 font-bold text-xl mb-3">Demand Forecasting</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Helps stores reorder stock automatically based on historical data, seasonal trends, and local events
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 absolute bottom-6 left-8">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-gray-300 text-sm">AI-Powered</span>
            </div>
          </div>

          {/* Bottom-Right Card: Return Rules Engine */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 relative h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-teal-400 font-bold text-xl mb-3">Return Rules Engine</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Auto-approves eligible refund cases and flags complex returns for human review to speed up processing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 absolute bottom-6 left-8">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-gray-300 text-sm">AI-Powered</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Metric 1: Faster Delivery Routes */}
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">25%</div>
            <div className="text-gray-300 text-sm">Faster Delivery Routes</div>
          </div>

          {/* Metric 2: Inventory Accuracy */}
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">99.2%</div>
            <div className="text-gray-300 text-sm">Inventory Accuracy</div>
          </div>

          {/* Metric 3: Demand Prediction */}
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">87%</div>
            <div className="text-gray-300 text-sm">Demand Prediction</div>
          </div>

          {/* Metric 4: Faster Returns */}
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">3X</div>
            <div className="text-gray-300 text-sm">Faster Returns</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIPoweredSystems
