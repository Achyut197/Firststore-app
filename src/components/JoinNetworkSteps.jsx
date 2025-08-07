import React from 'react'

const steps = [
  {
    number: 1,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
        <circle cx="11" cy="11" r="8" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
    title: 'Discover',
    desc: 'Browse local stores and products with live inventory updates',
  },
  {
    number: 2,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4" />
        <rect x="7" y="10" width="3" height="3" rx="1" strokeWidth="2" />
        <rect x="14" y="10" width="3" height="3" rx="1" strokeWidth="2" />
      </svg>
    ),
    title: 'Browse Inventory',
    desc: 'See real-time stock levels and add items to your cart',
  },
  {
    number: 3,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <rect x="7" y="10" width="10" height="3" rx="1" strokeWidth="2" />
      </svg>
    ),
    title: 'Order & Pay',
    desc: 'Secure checkout with multiple payment options available',
  },
  {
    number: 4,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
        <rect x="3" y="13" width="15" height="6" rx="2" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 13V7a2 2 0 012-2h2" />
      </svg>
    ),
    title: 'Fast Delivery',
    desc: 'AI-optimized routing ensures delivery in 10-30 minutes',
  },
  {
    number: 5,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.9-1.002L12 2.75l3.1 5.753 6.9 1.002-5.007 4.617 1.179 6.873z" />
      </svg>
    ),
    title: 'Return / Rate / Reorder',
    desc: 'Easy returns, rate your experience, and reorder favorites',
  },
];

const metrics = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    value: '18 Min',
    desc: 'Average delivery time',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.9-1.002L12 2.75l3.1 5.753 6.9 1.002-5.007 4.617 1.179 6.873z" />
      </svg>
    ),
    value: '4.8/5',
    desc: 'Customer satisfaction',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#00BFA6' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    value: '92%',
    desc: 'Customers reorder',
  },
];

const JoinNetworkSteps = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the FirstStore Network
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Become a franchise partner and tap into the growing demand for quick commerce. We provide the technology, you provide the location.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#00BFA6' }}>
                <span className="text-white text-lg font-bold">{step.number}</span>
              </div>
              <div className="mb-3">{step.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t" style={{ borderColor: '#00BFA6' }}></div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-3">{metric.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#00BFA6' }}>{metric.value}</div>
              <div className="text-white text-base">{metric.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JoinNetworkSteps
