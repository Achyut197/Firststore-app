import React from 'react'

const InventorySync = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Real-Time Inventory & Order Sync
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how our advanced inventory system ensures what you order is what you get, with real-time updates every 10 seconds.
          </p>
        </div>

        {/* Process Flow Diagram */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Step 1: User Browses App */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 w-full lg:w-1/4 h-48 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">User Browses App</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Customer opens FirstStore and browses products</p>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden lg:flex items-center justify-center">
              <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Step 2: Inventory Syncs in 10s */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 w-full lg:w-1/4 h-48 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Inventory Syncs in 10s</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Real-time stock updates from physical store</p>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden lg:flex items-center justify-center">
              <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Step 3: Item Locked */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 w-full lg:w-1/4 h-48 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Item Locked</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Product reserved instantly when added to cart</p>
              </div>
            </div>

            {/* Arrow 3 */}
            <div className="hidden lg:flex items-center justify-center">
              <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Step 4: Rider Assigned */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 w-full lg:w-1/4 h-48 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Rider Assigned</h3>
                <p className="text-gray-300 text-sm leading-relaxed">AI-optimized routing for fastest delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Displays */}
        <div className="bg-gray-800 rounded-xl p-10 border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Live Inventory Status */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
                <h3 className="text-white font-bold text-xl">Live Inventory Status</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white text-base">Milk (1L)</span>
                  <span className="px-4 py-2 bg-teal-400 text-white text-sm rounded-full font-medium">12 in Stock</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-base">Amul Butter (250 gm)</span>
                  <span className="px-4 py-2 bg-teal-400 text-white text-sm rounded-full font-medium">08 in Stock</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-base">Britannia Bread Loaf</span>
                  <span className="px-4 py-2 bg-teal-400 text-white text-sm rounded-full font-medium">05 in Stock</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-base">Eggs (12 Pack)</span>
                  <span className="px-4 py-2 bg-red-500 text-white text-sm rounded-full font-medium">Out Of Stock</span>
                </div>
              </div>
            </div>

            {/* Right Column: Order Processing */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
                <h3 className="text-white font-bold text-xl">Order Processing</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white text-base">Order #124581</span>
                  <span className="px-4 py-2 bg-teal-400 text-white text-sm rounded-full font-medium">Assigning Delivery Partner</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-base">Order #124580</span>
                  <span className="px-4 py-2 bg-gray-600 text-white text-sm rounded-full font-medium">Items being picked</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-base">Order #124579</span>
                  <span className="px-4 py-2 bg-gray-600 text-white text-sm rounded-full font-medium">Out for Delivery</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-base">Order #124578</span>
                  <span className="px-4 py-2 bg-red-500 text-white text-sm rounded-full font-medium">Canceled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InventorySync
