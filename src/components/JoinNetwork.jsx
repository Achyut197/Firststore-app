import React from 'react'

const JoinNetwork = () => {
  return (
    <section className="py-24" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Join the FirstStore Network
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Become a franchise partner and tap into the growing demand for quick commerce. We provide the technology, you provide the location.
          </p>
        </div>

        {/* Four-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          
          {/* Step 1: Apply Online */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00BFA6' }}>
              <span className="text-white text-lg font-bold">1</span>
            </div>
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Apply Online
            </h3>
            <p className="text-gray-300 text-sm">
              Submit your application with basic details and business plan
            </p>
          </div>

          {/* Step 2: KYC & Setup */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00BFA6' }}>
              <span className="text-white text-lg font-bold">2</span>
            </div>
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              KYC & Setup
            </h3>
            <p className="text-gray-300 text-sm">
              Complete verification and get assistance with store setup
            </p>
          </div>

          {/* Step 3: Inventory Sync */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00BFA6' }}>
              <span className="text-white text-lg font-bold">3</span>
            </div>
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Inventory Sync
            </h3>
            <p className="text-gray-300 text-sm">
              Connect your inventory with our real-time management system
            </p>
          </div>

          {/* Step 4: Go Live in 15 Days */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00BFA6' }}>
              <span className="text-white text-lg font-bold">4</span>
            </div>
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Go Live in 15 Days
            </h3>
            <p className="text-gray-300 text-sm">
              Start accepting orders and serving customers in your area
            </p>
          </div>
        </div>

        {/* Testimonial and Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Testimonial Section */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#00BFA6' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00BFA6', border: '2px solid white' }}>
                <span className="text-white font-bold">MK</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Manoj Kumar</h4>
                <p className="text-white text-sm opacity-80">FirstStore Partner, Mumbai</p>
              </div>
            </div>
            <p className="text-white leading-relaxed mb-6">
              "Joining FirstStore was the best business decision I made. Over 1,200 orders in my first month, and the technology makes everything so easy to manage. The support team is always there when I need help."
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-sm">5.0 rating</span>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Why Partner With Us?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#00BFA6' }}></div>
                <p className="text-white">No franchise fees for the first 6 months</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#00BFA6' }}></div>
                <p className="text-white">Complete technology and inventory management</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#00BFA6' }}></div>
                <p className="text-white">Marketing support and customer acquisition</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#00BFA6' }}></div>
                <p className="text-white">24/7 technical and operational support</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#00BFA6' }}></div>
                <p className="text-white">Revenue sharing from day one</p>
              </div>
            </div>

            <button className="px-8 py-4 text-white font-bold rounded-xl hover:opacity-90 transition-opacity duration-200 flex items-center gap-2" style={{ backgroundColor: '#00BFA6' }}>
              Apply
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <p className="text-gray-300 text-sm">
              Investment starting from ₹5 lakhs. ROI within 12-18 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinNetwork
