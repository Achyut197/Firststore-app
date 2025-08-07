import React from 'react';
import {
  CheckSquare,
  GraduationCap,
  Headphones,
  Smartphone,
  Monitor,
  Database,
  Settings,
  Route,
  RadioTower,
  RefreshCcw
} from 'lucide-react';

const Services = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-12 space-y-20">

      {/* Section 1: Support & Training */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Support & Training at Every Step</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Whether you're a first-time operator or a seasoned retailer, <span className="text-white font-semibold">FirstStore</span> provides a robust onboarding, training, and operational support system to ensure you succeed from Day One.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Smooth Onboarding */}
          <div className="bg-gray-900 rounded-xl p-6 space-y-4 shadow-lg">
            <CheckSquare className="text-teal-400 w-7 h-7" />
            <h3 className="font-semibold text-lg">Smooth Onboarding</h3>
            <p className="text-gray-400 text-sm">
              Receive complete assistance with licensing, KYC, branding, setup, and POS sync. Our digital onboarding dashboard ensures a guided step-by-step process for a successful store launch.
            </p>
          </div>

          {/* Staff Training */}
          <div className="bg-gray-900 rounded-xl p-6 space-y-4 shadow-lg">
            <GraduationCap className="text-teal-400 w-7 h-7" />
            <h3 className="font-semibold text-lg">Staff Training & Skill Upskilling</h3>
            <p className="text-gray-400 text-sm">
              Access detailed video modules, live webinars, and checklist-based documentation. Every store staff member receives dedicated platform training for operations, returns, packing, and dispatch.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-gray-900 rounded-xl p-6 space-y-4 shadow-lg">
            <Headphones className="text-teal-400 w-7 h-7" />
            <h3 className="font-semibold text-lg">24/7 Support Ecosystem</h3>
            <p className="text-gray-400 text-sm">
              Get real-time help via live chat, ticketing dashboard, callback requests, and agent escalation. Whether it’s inventory sync, refund handling, or system updates — we’ve got you covered.
            </p>
          </div>
        </div>

        <p className="text-gray-300 text-sm mt-8">
          All franchisees receive lifetime access to updated SOPs and feature training via our digital resource center.
        </p>
      </div>

      {/* Section 2: Technology & Operations */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Technology & Operations Built for Scale</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">
          At the heart of <span className="text-white font-semibold">FirstStore</span> is a proprietary tech ecosystem that connects inventory, logistics, storefront, support, and data — creating a seamless experience for you and your customers.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Smartphone className="text-teal-400 w-5 h-5" />
                <span className="text-white">Mobile App</span>
              </div>
              <span className="text-gray-500 text-sm">Customer Interface</span>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Monitor className="text-teal-400 w-5 h-5" />
                <span className="text-white">Admin Dashboard</span>
              </div>
              <span className="text-gray-500 text-sm">Store Management</span>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Database className="text-teal-400 w-5 h-5" />
                <span className="text-white">Backend Systems</span>
              </div>
              <span className="text-gray-500 text-sm">AI Engines & Analytics</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-3">
                <Settings className="text-teal-400 w-5 h-5" />
                <h4 className="text-white font-semibold">Live Inventory Engine</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Proprietary system that syncs your POS data with the app in real time — eliminating out-of-stock errors and improving customer trust.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-3">
                <Route className="text-teal-400 w-5 h-5" />
                <h4 className="text-white font-semibold">Dynamic Logistics</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Our AI engine auto-assigns the right rider and route to minimize delays and fuel cost — with 10–30 minute fulfillment even in dense cities.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-3">
                <RadioTower className="text-teal-400 w-5 h-5" />
                <h4 className="text-white font-semibold">Control Tower</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Manage orders, refunds, sync health, performance, payouts, and store activity — all from one secure, live dashboard.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-3">
                <RefreshCcw className="text-teal-400 w-5 h-5" />
                <h4 className="text-white font-semibold">Auto-Replenishment</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Low-stock triggers, AI forecast models, and PO generation automate backend procurement — helping you avoid manual restocking.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-300 text-sm mt-6 max-w-2xl mx-auto">
          Low-stock triggers, AI forecast models, and PO generation automate backend procurement — helping you avoid manual restocking.
        </p>
      </div>
    </section>
  );
};

export default  Services
