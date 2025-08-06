import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Bronze',
      price: '14,999',
      audience: '10,200 – 29,500',
      color: 'from-purple-600 to-pink-600',
      content: {
        videos: 1,
        graphics: 1,
        images: 1
      },
      frequency: 'Ads run in every 10 days',
      popular: false
    },
    {
      name: 'Silver',
      price: '21,999',
      audience: '23,500 – 68,800',
      color: 'from-gray-500 to-gray-700',
      content: {
        videos: 2,
        graphics: 2,
        images: 2
      },
      frequency: 'Ads run in every 5 days',
      popular: false
    },
    {
      name: 'Gold',
      price: '39,999',
      audience: '33,200 – 96,000',
      color: 'from-yellow-500 to-orange-600',
      content: {
        videos: 3,
        graphics: 3,
        images: 3
      },
      frequency: 'Ads run in every 3 days',
      popular: true
    },
    {
      name: 'Diamond',
      price: '74,999',
      audience: '40,300 – 120,500',
      color: 'from-red-500 to-red-700',
      content: {
        videos: 6,
        graphics: 6,
        images: 6
      },
      frequency: 'Ads run in every 2 days',
      popular: false
    },
    {
      name: 'Platinum',
      price: '149,999',
      audience: '70,300 – 198,700',
      color: 'from-teal-500 to-green-600',
      content: {
        videos: 10,
        graphics: 7,
        images: 7
      },
      frequency: 'Ads run in every day',
      popular: false
    }
  ];

  return (
    <section id="pricing" className=" pt-36 md:pt-44 py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-teal-400">Pricing</span> Packages
          </h2>
          <p className="text-1xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect package for your business needs. All packages include professional content creation and strategic ad placement.
          </p>
          <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/20 rounded-full px-6 py-3">
            <Star size={20} className="text-teal-400" />
            <span className="text-teal-400 font-semibold">Custom pricing available based on your preference and capacity</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2.5">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-gradient-to-br ${pkg.color} p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 ${
                pkg.popular ? 'ring-4 ring-teal-400 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-teal-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                    <Zap size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-sm text-white/80 mb-4">Package</div>
                <div className="  text-4xl font-bold text-white mb-2">
                  {pkg.price}
                  <span className="text-lg font-normal">/mon</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-sm text-white/80 mb-1">Expected audience/day</div>
                  <div className="inline-flex items-center text-lg font-bold  text-white whitespace-nowrap">{pkg.audience}</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-lg font-bold text-white mb-3">Content</div>
                  <div className="text-sm text-white/90 mb-2">In this package we offer:</div>
                  <ul className="space-y-1 text-sm text-white/80">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-white" />
                      {pkg.content.videos} video{pkg.content.videos > 1 ? 's' : ''}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-white" />
                      {pkg.content.graphics} graphic{pkg.content.graphics > 1 ? 's' : ''}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-white" />
                      {pkg.content.images} image{pkg.content.images > 1 ? 's' : ''}
                    </li>
                  </ul>
                  <div className="text-sm text-white/80 mt-3">{pkg.frequency}</div>
                </div>
              </div>

              <button className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 backdrop-blur-sm">
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6">
              We offer flexible pricing based on your specific needs and capacity. 
              Contact us to discuss a personalized package that fits your business perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-teal-300 transition-colors">
                Get Custom Quote
              </button>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <a href="tel:+25101409689" className="flex items-center justify-center gap-2 text-teal-400 hover:underline">
                📞 +251 014 09689
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
