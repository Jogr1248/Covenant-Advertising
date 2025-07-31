import React from 'react';
import { SiTiktok } from 'react-icons/si';
import { SiX } from 'react-icons/si'; 


import { Youtube, Instagram, Facebook, Linkedin, Twitter, BookText as TikTok } from 'lucide-react';

const Platforms = () => {
  const platforms = [
    { name: 'Facebook', icon: Facebook, color: 'text-blue-500' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { name: 'TikTok', icon: SiTiktok, color: 'text-white' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-400' },
    { name: 'X', icon: SiX, color: 'text-white' },
    { name: 'YouTube', icon: Youtube, color: 'text-red-500', featured: true }
  ];

  const youtubeStats = [
    { label: 'Subscribers Generated', value: '100K+' },
    { label: 'Hours Watched', value: '500k+' },
    { label: 'Viral Videos Created', value: '100+' },
    { label: 'Average View Rate', value: '85%' }
  ];

  return (
    <section id="platforms" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Platforms We <span className="text-teal-400">Master</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We dominate every major platform, with special expertise in YouTube marketing and video content
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-black rounded-3xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Facebook size={48} className="text-blue-500 mr-4" />
                  <h3 className="text-4xl font-bold">Facebook Specialists</h3>
                </div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We don't just create  content – we engineer viral success. Our team understands 
                  the algorithm, audience behavior, and optimization strategies that drive real results.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {youtubeStats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-teal-400 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg"
                  alt="Video production setup"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-black/50 p-6 rounded-2xl hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <platform.icon 
                size={48} 
                className={`${platform.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} 
              />
              <div className="text-white font-semibold">{platform.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-black/50 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Currently managing 200+ active campaigns</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;