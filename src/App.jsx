import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import WhyChooseFirstStore from './components/WhyChooseFirstStore'
import JoinNetwork from './components/JoinNetwork'
import LiveCities from './components/LiveCities'
import InventorySync from './components/InventorySync'
import ReturnsRefunds from './components/ReturnsRefunds'
import AIPoweredSystems from './components/AIPoweredSystems'
import JoinNetworkSteps from './components/JoinNetworkSteps'
import AdminControl from './components/AdminControl'
import NewsletterSubscription from './components/NewsletterSubscription'
import Footer from './components/Footer'
import Franchise from './components/Franchise'
import About from './components/About'
import Coverage from './components/Coverage'
import Help from './components/Help'
import Services from './components/Services'  


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <HowItWorks />
            <WhyChooseFirstStore />
            <JoinNetwork />
            <LiveCities />
            <InventorySync />
            <ReturnsRefunds />
            <AIPoweredSystems />
            <JoinNetworkSteps />
            <AdminControl />
            <NewsletterSubscription />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/services" element={<Services />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  )
}

export default App
