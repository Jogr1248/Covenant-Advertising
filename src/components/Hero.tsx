import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-36 md:pt-44 relative min-h-screen flex items-center justify-center overflow-hidden">
      
    

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="Creative agency workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            In the heart of every campaign,
            <span className="text-teal-400 block">our goal is simple:</span>
            Help your business grow
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We craft data-driven marketing strategies that turn your vision into viral success. 
            From social media mastery to conversion optimization, we're your growth partners.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="inline-block">
  <button className="bg-teal-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-300 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
    Book a Strategy Call
    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
  </button>
</a>

<a href="/previous-works" className="inline-block">
  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
    <Play size={20} />
    Watch Our Work
  </button>
</a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-teal-400 mb-2">500+</div>
            <div className="text-gray-300">Campaigns Launched</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-teal-400 mb-2">300%</div>
            <div className="text-gray-300">Average ROI Increase</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-bold text-teal-400 mb-2">50M+</div>
            <div className="text-gray-300">Views Generated</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
