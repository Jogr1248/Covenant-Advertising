import React from 'react';
import { SiInstagram, SiTiktok } from 'react-icons/si';
import { SiX } from 'react-icons/si'; 


import { Youtube, Instagram, Facebook, Linkedin, BookText as Tiktok } from 'lucide-react';

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
    <section id="platforms" className="pt-36 md:pt-44 py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Platforms We <span className="text-teal-400">Master</span>
          </h2>
          <p className="text-1xl text-gray-300 max-w-3xl mx-auto">
            We dominate every major platform, with special expertise in Facebook marketing and video content
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
                <div className="flex items-center mb-6">
  {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="currentColor"
    className="text-pink-500 mr-6"
    viewBox="0 0 24 24"
  >
    <Facebook size={48} className="text-blue-500 mr-4" />
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.646.07 4.84 0 3.195-.012 3.574-.07 4.84-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.07-4.85.07-3.195 0-3.574-.012-4.84-.07-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608C2.175 15.574 2.163 15.195 2.163 12c0-3.194.012-3.574.07-4.84.062-1.366.343-2.633 1.318-3.608C4.526 2.576 5.793 2.295 7.159 2.233 8.425 2.175 8.805 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.773.131 4.638.388 3.68 1.345 2.723 2.303 2.466 3.438 2.407 4.717 2.348 5.997 2.335 6.406 2.335 12s.013 6.003.072 7.283c.059 1.279.316 2.414 1.273 3.372.958.958 2.093 1.215 3.372 1.273 1.28.059 1.689.072 7.283.072s6.003-.013 7.283-.072c1.279-.059 2.414-.316 3.372-1.273.958-.958 1.215-2.093 1.273-3.372.059-1.28.072-1.689.072-7.283s-.013-6.003-.072-7.283c-.059-1.279-.316-2.414-1.273-3.372C19.699.388 18.564.131 17.285.072 16.005.013 15.596 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
  </svg> */}
  <SiInstagram size={48} className="text-red-500 mr-4" />
  <h3 className="text-4xl font-bold">Instagram Experts</h3>
</div>
<p className="text-xl text-gray-300 mb-8 leading-relaxed">
  We craft visually stunning, trend-driven content that resonates with your audience.
  From Reels to Stories, our team ensures maximum engagement and growth.
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
                  loading="lazy"
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