import React from 'react';
import { Share2, PenTool, Target, Video } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Engaging content that drives results through storytelling, SEO optimization, and brand consistency.',
      features: ['Blog Writing', 'SEO Optimization', 'Brand Storytelling']
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Precision-targeted campaigns that maximize ROI through advanced audience segmentation and optimization.',
      features: ['PPC Campaigns', 'Audience Targeting', 'Conversion Optimization']
    },
    {
      icon: Video,
      title: 'Video Editing & Graphics',
      description: 'Professional video production and graphic design that captivates audiences and drives engagement.',
      features: ['Video Production', 'Motion Graphics', 'Brand Design']
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media strategy, content creation, and community management across all platforms.',
      features: ['Content Strategy', 'Community Building', 'Analytics & Reporting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What We <span className="text-teal-400">Do</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver comprehensive digital marketing solutions that drive real results for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-black/50 p-8 rounded-2xl hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <service.icon size={48} className="text-teal-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
