import React from 'react'

const LiveCities = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Now Live Across India
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expanding rapidly to serve more customers. Check if FirstStore is available in your city.
          </p>
        </div>

        {/* City Listings - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
          
          {/* Left Column: Now Live In */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Now Live In
            </h3>
            <div className="space-y-2">
              {/* Mumbai */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium text-sm">Mumbai</h4>
                    <p className="text-gray-400 text-xs">Live & Delivering</p>
                  </div>
                </div>
              </div>

              {/* Bangalore */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium text-sm">Bangalore</h4>
                    <p className="text-gray-400 text-xs">Live & Delivering</p>
                  </div>
                </div>
              </div>

              {/* New Delhi */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium text-sm">New Delhi</h4>
                    <p className="text-gray-400 text-xs">Live & Delivering</p>
                  </div>
                </div>
              </div>

              {/* Kolkata */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium text-sm">Kolkata</h4>
                    <p className="text-gray-400 text-xs">Live & Delivering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Coming Soon */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Coming Soon
            </h3>
            <div className="space-y-2">
              {/* Delhi NCR */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium text-sm">Delhi NCR</h4>
                    <p className="text-gray-400 text-xs">Launching Q2 2026</p>
                  </div>
                </div>
              </div>

              {/* Hyderabad */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium text-sm">Hyderabad</h4>
                    <p className="text-gray-400 text-xs">Launching Q2 2026</p>
                  </div>
                </div>
              </div>

              {/* Jaipur */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium text-sm">Jaipur</h4>
                    <p className="text-gray-400 text-xs">Launching Q2 2026</p>
                  </div>
                </div>
              </div>

              {/* Chandigarh */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="text-white font-medium text-sm">Chandigarh</h4>
                    <p className="text-gray-400 text-xs">Launching Q2 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center">
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg border border-teal-400 hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2 mx-auto text-sm">
            See Full Coverage
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LiveCities
