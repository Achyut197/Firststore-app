import React from 'react'

const NewsletterSubscription = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Section: Two Rows */}
          <div className="flex flex-col justify-center h-full">
            {/* First Row: Two Columns */}
            <div className="flex flex-row justify-center gap-24 mb-16">
              {/* Exclusive Offers */}
              <div className="flex flex-col items-center text-center min-w-[180px]">
                <svg className="w-8 h-8 mb-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                </svg>
                <h3 className="text-white font-semibold text-xl">Exclusive Offers</h3>
              </div>
              {/* New City Launches */}
              <div className="flex flex-col items-center text-center min-w-[180px]">
                <svg className="w-8 h-8 mb-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-white font-semibold text-xl">New City Launches</h3>
              </div>
            </div>
            {/* Second Row: Centered App Updates */}
            <div className="flex flex-col items-center text-center">
              <svg className="w-8 h-8 mb-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
                <rect x="7" y="10" width="10" height="3" rx="1" strokeWidth="2" />
              </svg>
              <h3 className="text-white font-semibold text-xl">App Updates</h3>
            </div>
          </div>

          {/* Right Column: Subscription Form */}
          <div className="bg-gray-800 rounded-2xl p-10 border border-gray-700 max-w-md mx-auto w-full">
            <div className="text-center mb-8">
              {/* Email Icon */}
              <div className="w-16 h-16 bg-teal-400 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-4">Stay Updated with FirstStore</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Get the latest offers, updates & launch alerts delivered to your inbox
              </p>
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-4 bg-gray-700 border border-teal-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-base"
              />
            </div>
            <button className="w-full bg-teal-400 text-white font-bold py-4 rounded-lg hover:bg-teal-500 transition-colors duration-200 mb-4 text-base">
              Subscribe
            </button>
            <p className="text-gray-400 text-xs text-center">
              We don't spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSubscription
