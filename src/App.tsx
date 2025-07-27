import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Platforms from './components/Platforms';
import Testimonials from './components/Testimonials';
import PreviousWorks from './components/PreviousWorks';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop'; 
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/previous-works" element={<PreviousWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
