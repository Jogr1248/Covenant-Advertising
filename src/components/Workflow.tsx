import React from 'react';
import { Search, TestTube, BarChart3 } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      icon: Search,
      title: 'Strategic Targeting',
      description: 'We analyze your audience, competitors, and market opportunities to create laser-focused targeting strategies.',
      stats: '98% Accuracy Rate'
    },
    {
      icon: TestTube,
      title: 'A/B Testing & Optimization',
      description: 'Continuous testing of creative elements, copy, and targeting to maximize campaign performance.',
      stats: '40% Performance Boost'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Real-time analytics and detailed reporting to track ROI and optimize for maximum results.',
      stats: '24/7 Monitoring'
    }
  ];

  return (
    <section id="workflow" className="pt-36 md:pt-44 py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How We <span className="text-teal-400">Work</span>
          </h2>
          <p className="text-1xl text-gray-300 max-w-3xl mx-auto">
            Our proven methodology ensures consistent results and measurable growth for every campaign
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                  <step.icon size={32} className="text-black" />
                </div>
                <div className="text-sm font-bold text-teal-400 mb-2">{step.stats}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 transform translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-teal-400 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Sample Campaign Results</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Reach</span>
                  <span className="text-2xl font-bold text-teal-400">2.5M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Engagement Rate</span>
                  <span className="text-2xl font-bold text-teal-400">12.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Conversion Rate</span>
                  <span className="text-2xl font-bold text-teal-400">8.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">ROI</span>
                  <span className="text-2xl font-bold text-teal-400">340%</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
                alt="Analytics dashboard"
                className="rounded-2xl"
                 loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;