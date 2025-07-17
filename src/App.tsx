import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Platforms from './components/Platforms';
import Testimonials from './components/Testimonials';
import PreviousWorks from './components/PreviousWorks';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Workflow />
      <Platforms />
      <Testimonials />
      <PreviousWorks />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;