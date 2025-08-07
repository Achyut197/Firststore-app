import React from 'react';
import { CheckCircle, Edit, Calendar, Shield, BarChart3, GraduationCap, Store, Headphones, Building2, MapPin, Mail, Phone } from 'lucide-react';


const Help = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Your Journey with FirstStore Begins Here
        </h1>
        <div className="w-16 h-1 bg-teal-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Just 3 simple steps to get started. Let's bring the FirstStore experience to your city - together.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column - Steps */}
        <div className="lg:col-span-2 space-y-8">
          {/* Step 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 border-2 border-teal-400 rounded-full flex items-center justify-center">
                <Edit className="w-8 h-8 text-teal-400" />
              </div>
              <div className="w-0.5 h-16 bg-teal-400 mx-auto mt-4"></div>
            </div>
            <div className="pt-3">
              <div className="text-teal-400 text-sm font-semibold mb-2">STEP 1</div>
              <h3 className="text-2xl font-bold mb-4">Submit Interest Form</h3>
              <p className="text-gray-300 leading-relaxed">
                Fill a short application form with basic details about your background, investment range, and preferred city.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 border-2 border-teal-400 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-teal-400" />
              </div>
              <div className="w-0.5 h-16 bg-teal-400 mx-auto mt-4"></div>
            </div>
            <div className="pt-3">
              <div className="text-teal-400 text-sm font-semibold mb-2">STEP 2</div>
              <h3 className="text-2xl font-bold mb-4">Franchise Discovery Call</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team will reach out within 48 hours to schedule a video call and walk you through the business model, setup, and support.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 border-2 border-teal-400 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-teal-400" />
              </div>
            </div>
            <div className="pt-3">
              <div className="text-teal-400 text-sm font-semibold mb-2">STEP 3</div>
              <h3 className="text-2xl font-bold mb-4">Location & Agreement</h3>
              <p className="text-gray-300 leading-relaxed">
                We assist with location vetting and paperwork. Once confirmed, you'll begin onboarding and setup within 14-21 days.
              </p>
            </div>
          </div>

          {/* Success Badge */}
          <div className="mt-12">
            <div className="border border-teal-400 rounded-lg p-6 text-center bg-gray-800/50">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-teal-400" />
                <span className="text-teal-400 font-semibold">Already 50+ partners across India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - CTA Card */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-2xl p-8 h-fit sticky top-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to Become a FirstStore</h3>
              <h3 className="text-2xl font-bold mb-6">Partner?</h3>
              <p className="text-gray-300 mb-8">
                Let's get your dream outlet live.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-teal-400 hover:bg-teal-500 text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
                  Apply Now!
                </button>
                <button className="w-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
                  Book a Demo Call
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Applications are reviewed in 48 hours. Early applicants may receive exclusive location rights in Tier 2/3 cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-24">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Still have questions? Here's what other franchisees asked us before they joined.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* FAQ Item 1 */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold">What's the typical ROI timeline?</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Most franchisees recover their investment within 12 to 24 months, depending on location, store format, and performance. Our team actively helps you optimize operations.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold">Do I need retail experience?</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              No prior retail experience is required. We provide detailed training, digital SOPs, and live onboarding sessions for both you and your team.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Store className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold">Can I manage multiple stores?</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Yes! With our Regional Partner Model, you can run 3-5 stores in one city with central dashboards, unified inventory, and rider fleet sharing.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Headphones className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold">What kind of support do I get?</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              You get 24/7 tech support, live agent chat, real-time sync alerts, auto-replenishment tools, and access to the admin dashboard for full control.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Still have questions?</h3>
          <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Contact Footer Section */}
      <div className="mt-24 pt-16 border-t border-gray-800">
        {/* Footer Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build FirstStore - Together
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We're here to guide your franchise journey. Reach out today and let's create the future of local commerce.
          </p>
        </div>

        {/* Contact Info and CTA Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Company Name */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">NEWEDGE STORE PRIVATE LIMITED</h3>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">
                  Lodha Signet 1, Unit 815, Premier Colony Ground,<br />
                  Manpada, Kalyan, Thane - 421204
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <a href="mailto:care@firststore.io" className="text-gray-300 hover:text-teal-400 transition-colors underline">
                  care@firststore.io
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <a href="tel:+917011112866" className="text-gray-300 hover:text-teal-400 transition-colors underline">
                  +91 7011112866
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Final CTA */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="text-center">
              <div className="mb-6">
                <MapPin className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Book a discovery call to understand our franchise model, investment plans, and how you can be part of the FirstStore journey.
                </p>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-teal-400 hover:bg-teal-500 text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
                  Book a Discovery Call
                </button>
                <button className="w-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
                  Join Early Interest List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2025 FirstStore | Powered by NewEdge Store Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  </div>
                
  );
}

export default Help 