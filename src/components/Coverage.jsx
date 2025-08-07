import React from 'react';
import { Store, Zap, RefreshCw, Headphones } from 'lucide-react';

const Coverage = () => {
  const features = [
    {
      icon: (
        <div className="w-8 h-8 text-emerald-400 flex items-center justify-center">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M3 9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89L8.85 4.22A2 2 0 0 1 10.515 3.5h2.97a2 2 0 0 1 1.664.72l1.257 1.89A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/>
          </svg>
        </div>
      ),
      title: "Own Your Territory",
      description: "FirstStore doesn't rely on third-party shops or warehouses. Instead, you get exclusive control of a branded retail unit in your locality — with end-to-end tech and operational playbooks to win your zone."
    },
    {
      icon: (
        <div className="w-8 h-8 text-emerald-400 flex items-center justify-center">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M8 2L3 7l5 5 1.5-1.5L6 8h8a6 6 0 0 1 0 12H8v2h6a8 8 0 0 0 0-16H6l3.5-2.5L8 2z"/>
          </svg>
        </div>
      ),
      title: "10-30 Minute Delivery",
      description: "AI-powered rider routing and clustered batching help you fulfill orders in 10-30 minutes — even in dense city areas or Tier 2 towns — boosting repeat usage and loyalty."
    },
    {
      icon: (
        <div className="w-8 h-8 text-emerald-400 flex items-center justify-center">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
      ),
      title: "Real-Time Inventory Sync",
      description: "Our proprietary sync engine connects your POS with the app in real-time, ensuring customers see only available items — reducing cancellations and improving trust."
    },
    {
      icon: (
        <div className="w-8 h-8 text-emerald-400 flex items-center justify-center">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      ),
      title: "Omni Return & Support System",
      description: "From app-based returns to in-store exchanges, FirstStore offers a modern, frictionless support system that enhances credibility and increases customer retention."
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose FirstStore?
          </h1>
          <div className="w-16 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of hyperlocal retail with cutting-edge technology,
            <br />
            proven business models, and unmatched support system.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-400/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table Section */}
        <div className="mt-24">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How FirstStore Stands Apart
            </h2>
            <div className="w-16 h-1 bg-emerald-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A platform built to fix what existing delivery and q-commerce players can't
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-gray-800/30 rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-gray-800/50">
                <div className="p-6 font-semibold text-white text-lg border-r border-gray-700/50">
                  Feature/Capability
                </div>
                <div className="p-6 font-semibold text-white text-lg text-center border-r border-gray-700/50">
                  Blinkit / Dunzo / Instamart
                </div>
                <div className="p-6 font-semibold text-white text-lg text-center border-r border-gray-700/50">
                  Local Aggregators
                </div>
                <div className="p-6 font-semibold text-white text-lg text-center bg-emerald-500 rounded-tl-2xl">
                  FirstStore
                </div>
              </div>

              {/* Table Rows */}
              {[
                { feature: "Real-Time Inventory Sync", blinkit: "cross", local: "cross", firststore: "check" },
                { feature: "Franchise-First Model", blinkit: "cross", local: "cross", firststore: "check" },
                { feature: "30-Min Delivery SLA", blinkit: "check", local: "cross", firststore: "check" },
                { feature: "Returns via Store & App", blinkit: "cross", local: "cross", firststore: "check" },
                { feature: "POS System Integration", blinkit: "cross", local: "cross", firststore: "check" },
                { feature: "Rider Autonomy & Routing", blinkit: "warning", blinkitText: "(Centralized only)", local: "cross", firststore: "check" },
                { feature: "Pan-India Scalability", blinkit: "warning", blinkitText: "(Metro-focused)", local: "cross", firststore: "check" },
                { feature: "Franchisee Dashboards", blinkit: "cross", local: "cross", firststore: "check" },
                { feature: "Standard to Premium Category", blinkit: "cross", local: "cross", firststore: "check" },
                { feature: "Buy Back Options", blinkit: "cross", local: "cross", firststore: "check" },
                { feature: "Risk Free", blinkit: "cross", local: "cross", firststore: "check" }
              ].map((row, index) => (
                <div key={index} className={`grid grid-cols-4 border-t border-gray-700/50 ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/10'}`}>
                  <div className="p-4 text-white font-medium border-r border-gray-700/50">
                    {row.feature}
                  </div>
                  <div className="p-4 text-center border-r border-gray-700/50">
                    {row.blinkit === "check" && (
                      <div className="text-emerald-400 text-xl">✓</div>
                    )}
                    {row.blinkit === "cross" && (
                      <div className="text-red-400 text-xl">✕</div>
                    )}
                    {row.blinkit === "warning" && (
                      <div className="flex items-center justify-center">
                        <div className="text-yellow-400 text-xl mr-2">⚠</div>
                        <span className="text-yellow-400 text-sm">{row.blinkitText}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 text-center border-r border-gray-700/50">
                    {row.local === "check" && (
                      <div className="text-emerald-400 text-xl">✓</div>
                    )}
                    {row.local === "cross" && (
                      <div className="text-red-400 text-xl">✕</div>
                    )}
                  </div>
                  <div className="p-4 text-center bg-emerald-500/10">
                    <div className="text-emerald-400 text-xl">✓</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coverage;
