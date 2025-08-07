import React from 'react'

const dashboardOrders = [
  { id: '124581', status: 'Assigning Delivery Partner', color: '#00BFA6' },
  { id: '124580', status: 'Items being picked', color: '#00BFA6', text: '#00BFA6' },
  { id: '124579', status: 'Out for Delivery', color: '#00BFA6', text: '#00BFA6' },
];

const monitoring = [
  {
    icon: (
      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" strokeWidth="2" />
      </svg>
    ),
    title: 'Rider Heatmap',
    desc: 'Real-time visualization of rider locations and delivery density across your service area',
  },
  {
    icon: (
      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <rect x="7" y="10" width="10" height="3" rx="1" strokeWidth="2" />
      </svg>
    ),
    title: 'Live Order Status',
    desc: 'Track every order from placement to delivery with detailed status updates',
  },
  {
    icon: (
      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
        <rect x="7" y="7" width="4" height="4" rx="2" strokeWidth="2" />
        <rect x="13" y="13" width="4" height="4" rx="2" strokeWidth="2" />
      </svg>
    ),
    title: 'City KPIs',
    desc: 'Monitor key performance indicators for each city including revenue and customer satisfaction',
  },
  {
    icon: (
      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'SLA Compliance Alerts',
    desc: 'Instant notifications when delivery times exceed targets or issues arise',
  },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8 mb-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <rect x="7" y="10" width="10" height="3" rx="1" strokeWidth="2" />
      </svg>
    ),
    title: 'Real-time Analytics',
    desc: 'Get instant insights into sales, inventory, and customer behavior',
  },
  {
    icon: (
      <svg className="w-8 h-8 mb-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Smart Alerts',
    desc: 'Proactive notifications for inventory, performance, and issues',
  },
  {
    icon: (
      <svg className="w-8 h-8 mb-4" fill="none" stroke="#00BFA6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
        <rect x="7" y="7" width="4" height="4" rx="2" strokeWidth="2" />
        <rect x="13" y="13" width="4" height="4" rx="2" strokeWidth="2" />
      </svg>
    ),
    title: 'Performance Tracking',
    desc: 'Monitor KPIs and track growth across all locations',
  },
];

const AdminControl = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Complete Admin Control</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Monitor every aspect of your FirstStore network with our comprehensive admin dashboard.<br />
            Real-time insights for better decision making.
          </p>
        </div>

        {/* Main Section: Dashboard + Monitoring */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          {/* Dashboard Card */}
          <div className="bg-[#16302b] rounded-2xl p-8 shadow-lg w-full max-w-lg mx-auto" style={{ minWidth: 320 }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">FirstStore Dashboard</h3>
              <span className="text-teal-400 text-xs font-semibold">• Live</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-black bg-opacity-60 rounded-lg p-4 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
                  </svg>
                  <span className="text-teal-400 font-bold text-lg">₹2.4L</span>
                </div>
                <span className="text-gray-300 text-xs">Today's Revenue</span>
              </div>
              <div className="bg-black bg-opacity-60 rounded-lg p-4 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h5" />
                    <circle cx="12" cy="7" r="4" strokeWidth="2" />
                  </svg>
                  <span className="text-teal-400 font-bold text-lg">1,247</span>
                </div>
                <span className="text-gray-300 text-xs">Active Users</span>
              </div>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00BFA6' }}></span>
              <span className="text-white font-semibold text-base">Live Order Status</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center rounded-lg overflow-hidden">
                <span className="bg-[#16302b] text-white px-4 py-2 text-sm font-medium w-40 text-left">Order #124581</span>
                <span className="flex-1 px-4 py-2 text-sm font-semibold text-teal-400 bg-[#1b4740]">Assigning Delivery Partner</span>
              </div>
              <div className="flex items-center rounded-lg overflow-hidden">
                <span className="bg-[#16302b] text-white px-4 py-2 text-sm font-medium w-40 text-left">Order #124580</span>
                <span className="flex-1 px-4 py-2 text-sm font-semibold text-teal-400 bg-[#1b4740]">Items being picked</span>
              </div>
              <div className="flex items-center rounded-lg overflow-hidden">
                <span className="bg-[#16302b] text-white px-4 py-2 text-sm font-medium w-40 text-left">Order #124579</span>
                <span className="flex-1 px-4 py-2 text-sm font-semibold text-teal-400 bg-[#1b4740]">Out for Delivery</span>
              </div>
            </div>
          </div>

          {/* Monitoring List + Button */}
          <div className="w-full max-w-xl mx-auto">
            <h3 className="text-white font-bold text-2xl mb-8">Comprehensive Monitoring</h3>
            <div className="space-y-7 mb-10">
              {monitoring.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  {item.icon}
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-sm max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full border-2 border-teal-400 text-teal-400 font-bold py-3 rounded-lg hover:bg-[#00BFA6] hover:text-white transition-colors duration-200">
              Request Admin Demo
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-12" style={{ borderColor: '#00BFA6' }}></div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {feature.icon}
              <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm max-w-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdminControl
