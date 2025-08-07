import React from 'react'

const ReturnsRefunds = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Hassle-Free Returns & Refunds
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Return products your way—through the app or by visiting any FirstStore location. We make returns as easy as ordering.
          </p>
        </div>

        {/* Two-Column Return Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Left Card: App-Based Return */}
          <div className="bg-gray-800 rounded-xl p-8 border-b-2 border-teal-400">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl">App-Based Return</h3>
            </div>
            <p className="text-gray-300 text-sm mb-8">Return from the comfort of your home</p>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">Select item in app</h4>
                  <p className="text-gray-300 text-sm">Choose the product you want to return from your order history</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">Upload image (optional)</h4>
                  <p className="text-gray-300 text-sm">Add photos to help us process your return faster</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">Schedule pickup</h4>
                  <p className="text-gray-300 text-sm">Choose a convenient time for our team to collect the item</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: In-Store Drop-off */}
          <div className="bg-gray-800 rounded-xl p-8 border-b-2 border-teal-400">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl">In-Store Drop-off</h3>
            </div>
            <p className="text-gray-300 text-sm mb-8">Visit any nearby FirstStore location</p>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">Visit nearby FirstStore</h4>
                  <p className="text-gray-300 text-sm">Locate the nearest store using our app's store finder</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">Staff verifies item</h4>
                  <p className="text-gray-300 text-sm">Our trained staff will quickly verify your return request</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1">Instant refund/exchange</h4>
                  <p className="text-gray-300 text-sm">Get immediate refund or exchange on the spot</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-12">Additional Benefits</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Instant UPI Refund */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">UPI</span>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Instant UPI Refund</h4>
              <p className="text-gray-300 text-sm">Get your money back instantly via UPI where applicable</p>
            </div>

            {/* Feature 2: Track Return Status */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Track Return Status</h4>
              <p className="text-gray-300 text-sm">Monitor your return progress in real-time through the app</p>
            </div>

            {/* Feature 3: 7-Day Return Policy */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">7-Day Return Policy</h4>
              <p className="text-gray-300 text-sm">Return eligible items within 7 days of delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReturnsRefunds
