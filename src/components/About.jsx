import React from 'react';
import logo from '../assets/logo.png';
import rajeshImg from '../assets/187c74d402d87cb8889619e6881515afa861e5a1.jpg';
import sachinImg from '../assets/c8cd44c7d0b45588179bee9094fbd5eb181736fa.jpg';
import alkaImg from '../assets/Business Plan-amico 1.png';
import appMockup from '../assets/Home Screen.png';

const About = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#161616] to-[#111314]">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <img src={logo} alt="FirstStore Logo" className="w-14 h-14 brightness-0 invert opacity-100" />
            <span className="text-white text-3xl font-semibold tracking-tight">FirstStore</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Welcome to FirstStore!</h1>
          <div className="w-16 h-1 bg-teal-400 rounded-full mb-2"></div>
          <p className="text-lg text-gray-300 text-center">Franchising the Future of Fast Retail</p>
          <button className="mt-6 px-8 py-3 bg-teal-400 text-white font-semibold rounded-full text-lg hover:bg-teal-500 transition-colors duration-200">Let's Get Started</button>
        </div>
      </section>
      {/* What is FirstStore Section */}
      <section className="min-h-[70vh] flex flex-col justify-center bg-[#161616] px-4 md:px-0">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center py-24">
          {/* Left: Text */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What is FirstStore?</h2>
            <div className="w-16 h-1 bg-teal-400 rounded-full mb-6"></div>
            <p className="text-lg text-white font-medium max-w-xl">
              FirstStore is a hyperlocal commerce platform built on a franchise-first model. We empower partners to operate digitally integrated stores capable of delivering essentials within 10–30 minutes, powered by AI logistics and real-time inventory sync.
            </p>
          </div>
          {/* Right: Dashboard Card */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-[#191b1c] border border-teal-400 rounded-2xl p-8 w-full max-w-md shadow-xl relative">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white font-semibold text-lg flex items-center gap-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12l2 2 4-4"/></svg>
                  FirstStore Dashboard
                </span>
                <span className="bg-teal-400 text-white text-xs font-bold px-4 py-1 rounded-full">Live</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#232627] rounded-xl flex flex-col items-center justify-center py-6">
                  <span className="text-teal-400 text-3xl font-bold">47</span>
                  <span className="text-white text-sm mt-1">Orders Today</span>
                </div>
                <div className="bg-[#232627] rounded-xl flex flex-col items-center justify-center py-6">
                  <span className="text-teal-400 text-3xl font-bold">12 min</span>
                  <span className="text-white text-sm mt-1">Avg. Delivery</span>
                </div>
              </div>
              <div>
                <div className="text-white font-semibold mb-3">Recent Orders</div>
                <div className="space-y-3">
                  <div className="bg-[#232627] rounded-lg flex items-center justify-between px-4 py-3">
                    <div>
                      <div className="text-white font-medium">Grocery Essentials</div>
                      <div className="text-gray-400 text-xs">2 min ago</div>
                    </div>
                    <span className="bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded-full">Delivered</span>
                  </div>
                  <div className="bg-[#232627] rounded-lg flex items-center justify-between px-4 py-3">
                    <div>
                      <div className="text-white font-medium">Fresh Vegetables</div>
                      <div className="text-gray-400 text-xs">5 min ago</div>
                    </div>
                    <span className="bg-yellow-600/80 text-white text-xs font-bold px-3 py-1 rounded-full">In Transit</span>
                  </div>
                  <div className="bg-[#232627] rounded-lg flex items-center justify-between px-4 py-3">
                    <div>
                      <div className="text-white font-medium">Dairy Products</div>
                      <div className="text-gray-400 text-xs">8 min ago</div>
                    </div>
                    <span className="bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">Preparing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Vision & Mission Section */}
      <section className="bg-[#161616] py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <div className="bg-[#1b2220] rounded-2xl shadow-xl p-10 flex flex-col min-h-[420px]">
            <div className="mb-6">
              <svg className="w-12 h-12 text-teal-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3" strokeWidth="2"/></svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Our Vision</h3>
            <div className="w-16 h-1 bg-teal-400 rounded-full mb-6"></div>
            <p className="text-white text-base mb-4">We envision a future where every neighborhood in India has instant access to quality essentials through intelligent, tech-powered retail.</p>
            <p className="text-white text-base mb-4">FirstStore aims to redefine hyperlocal commerce by building India’s most scalable, reliable, and owner-driven delivery ecosystem — powered by speed, technology, and trust.</p>
            <p className="text-teal-400 text-base font-semibold mt-auto">We’re not just building stores; we’re building the future of retail accessibility.</p>
          </div>
          {/* Mission Card */}
          <div className="bg-[#1b2220] rounded-2xl shadow-xl p-10 flex flex-col min-h-[420px]">
            <div className="mb-6">
              <svg className="w-12 h-12 text-teal-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7m-2 0V5a2 2 0 00-2-2H8a2 2 0 00-2 2v2"/></svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Our Mission</h3>
            <div className="w-16 h-1 bg-teal-400 rounded-full mb-6"></div>
            <p className="text-white text-base mb-4">Our mission is to empower franchise entrepreneurs with the tools, technology, and playbooks to succeed in fast-moving local commerce.</p>
            <p className="text-white text-base mb-4">Through AI-driven operations, real-time inventory sync, and seamless omni-channel experiences, we help our partners fulfill 10–30 minute deliveries at scale — while ensuring customer satisfaction and business profitability.</p>
            <p className="text-teal-400 text-base font-semibold mt-auto">We’re committed to enabling inclusive retail growth, one store at a time.</p>
          </div>
        </div>
      </section>
      {/* Meet the Team Section */}
      <section className="bg-[#161616] py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Meet the Team Behind FirstStore</h2>
          <div className="w-24 h-1 bg-teal-400 rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-2xl">Backed by experience, driven by purpose — our leadership combines product, finance, and ops to deliver seamless franchise success.</p>
          <div className="grid md:grid-cols-3 gap-10 w-full">
            {/* Rajesh Kumar */}
            <div className="bg-[#1b2220] rounded-2xl shadow-xl p-8 flex flex-col min-h-[420px] max-w-sm mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <img src={rajeshImg} alt="Rajesh Kumar" className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">Rajesh Kumar</h3>
                  <div className="text-sm text-gray-300 italic font-semibold">Chief Executive Officer (CEO)</div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.255M12 14v7.5m0 0l-3.5-2.1m3.5 2.1l3.5-2.1"/></svg>
                    Guru Jambheshwar University
                  </div>
                </div>
              </div>
              <p className="text-white text-base mt-2">Founder of FirstStore, driving tech-led retail innovation. With a strong grasp of operations, product, and growth, he brings startup agility and strategic vision to help brands scale faster and smarter in today’s competitive commerce landscape.</p>
            </div>
            {/* Sachin Sharma */}
            <div className="bg-[#1b2220] rounded-2xl shadow-xl p-8 flex flex-col min-h-[420px] max-w-sm mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <img src={sachinImg} alt="Sachin Sharma" className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">Sachin Sharma</h3>
                  <div className="text-sm text-gray-300 italic font-semibold">Chief Operating Officer (COO)</div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.255M12 14v7.5m0 0l-3.5-2.1m3.5 2.1l3.5-2.1"/></svg>
                    IIM Kolkata
                  </div>
                </div>
              </div>
              <p className="text-white text-base mt-2">An Operations mastermind, growth enabler, and P&amp;L strategist. Held senior leadership roles at industry giants like, TATA, TVS, and Maersk delivering results through strategic execution, operation rigor, and scalable growth models.</p>
            </div>
            {/* Alka Singh */}
            <div className="bg-[#1b2220] rounded-2xl shadow-xl p-8 flex flex-col min-h-[420px] max-w-sm mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <img src={alkaImg} alt="Alka Singh" className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">Alka Singh</h3>
                  <div className="text-sm text-gray-300 italic font-semibold">Chief People &amp; Finance Officer (CFO &amp; CHRO)</div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.255M12 14v7.5m0 0l-3.5-2.1m3.5 2.1l3.5-2.1"/></svg>
                    ILEAD Kolkata
                  </div>
                </div>
              </div>
              <p className="text-white text-base mt-2">Financial leader and people-first strategist at FirstStore, managing capital efficiency and organizational strength. With a balanced lens on numbers and culture, she ensures every store runs profitably while scaling responsibly with empowered teams.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Experience the FirstStore App Section */}
      <section className="bg-[#161616] py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: App Mockup */}
          <div className="flex justify-center md:justify-start">
            <div className="relative flex items-center justify-center">
              <div className="absolute -z-10 w-[340px] md:w-[400px] h-[520px] md:h-[600px] rounded-[2.5rem] bg-teal-400 opacity-20 blur-2xl" style={{filter:'blur(60px)'}}></div>
              <img src={appMockup} alt="FirstStore App Mockup" className="w-[320px] md:w-[380px] rounded-[2.5rem] shadow-2xl border-4 border-[#232627]" style={{boxShadow: '0 8px 40px 0 rgba(0,0,0,0.45)'}} />
            </div>
          </div>
          {/* Right: Steps */}
          <div className="flex flex-col justify-center items-start md:pl-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience the FirstStore App</h2>
            <div className="w-20 h-1 bg-teal-400 rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 mb-12 max-w-xl">A fast, intuitive beautifully designed app - built to make local shopping feel global, Here’s a preview of the experience your customers will love.</p>
            <div className="flex flex-col gap-12 w-full">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-12 h-12 flex items-center justify-center border-2 border-teal-400 rounded-full text-teal-400 text-2xl font-bold mb-2"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></span>
                </div>
                <div>
                  <div className="text-teal-400 font-bold text-sm mb-1">STEP 1</div>
                  <div className="text-white font-semibold text-lg mb-1">Browse & Search</div>
                  <div className="text-gray-300 text-sm">Explore trending products and nearby stores from the Home screen.</div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-12 h-12 flex items-center justify-center border-2 border-teal-400 rounded-full text-teal-400 text-2xl font-bold mb-2"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg></span>
                </div>
                <div>
                  <div className="text-teal-400 font-bold text-sm mb-1">STEP 2</div>
                  <div className="text-white font-semibold text-lg mb-1">Add to Cart</div>
                  <div className="text-gray-300 text-sm">Tap "Add +" to include items in your cart, directly from your local stores.</div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-12 h-12 flex items-center justify-center border-2 border-teal-400 rounded-full text-teal-400 text-2xl font-bold mb-2"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3v4M8 3v4"/></svg></span>
                </div>
                <div>
                  <div className="text-teal-400 font-bold text-sm mb-1">STEP 3</div>
                  <div className="text-white font-semibold text-lg mb-1">Confirm & Pay</div>
                  <div className="text-gray-300 text-sm">Review your order, select address, and pay securely via UPI, Wallet, or COD.</div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-12 h-12 flex items-center justify-center border-2 border-teal-400 rounded-full text-teal-400 text-2xl font-bold mb-2"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13l4 4L21 7"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></span>
                </div>
                <div>
                  <div className="text-teal-400 font-bold text-sm mb-1">STEP 4</div>
                  <div className="text-white font-semibold text-lg mb-1">Get It Delivered</div>
                  <div className="text-gray-300 text-sm">Enjoy quick delivery from the nearest store with available stock.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
