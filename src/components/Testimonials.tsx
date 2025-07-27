import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Hotto Restaurant',
      role: 'Restaurant Chain, Addis Ababa',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      text: 'Working with Covenant Advertising for 6 consecutive months has been incredible. Our social media presence and customer engagement have grown significantly across all our locations.',
      results: '6 Months Partnership'
    },
    {
      name: 'Ktas Kitchen',
      role: 'Restaurant, Jimma',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 5,
      text: 'The team at Covenant Advertising understood our local market in Jimma perfectly. Their content strategy helped us reach more customers and build a strong online presence.',
      results: '6 Months Success'
    },
    {
      name: 'Mafi Restaurant',
      role: 'Restaurant, Adama',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
      rating: 5,
      text: 'Covenant Advertising delivered exceptional results for our restaurant in Adama. Their creative content and strategic approach helped us connect with our target audience effectively.',
      results: 'Outstanding Results'
    }
  ];

  const currentClients = [
    {
      name: 'Cloud Sun Cafe',
      role: 'Currently Active Project',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
      rating: 5,
      text: 'Currently working with Covenant Advertising and already seeing amazing progress. Their professional approach and creative solutions are exactly what we needed.',
      results: 'Ongoing Success'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-teal-400">Happy Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by restaurants across Ethiopia - see what our happy clients say about their results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-teal-400/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-400">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <Quote size={40} className="text-teal-400 opacity-50" />
              </div>
              
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">{testimonial.results}</div>
                  <div className="text-sm text-gray-400">Results Achieved</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="text-teal-400">Current</span> Active Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {currentClients.map((client, index) => (
              <div
                key={client.name}
                className="bg-gradient-to-r from-teal-900/30 to-gray-900 p-8 rounded-2xl border border-teal-400/20 relative group"
              >
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <Quote size={40} className="text-teal-400 mb-6 opacity-50" />
                
                <div className="flex items-center mb-4">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{client.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-white">{client.name}</div>
                      <div className="text-sm text-teal-400">{client.role}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{client.results}</div>
                    <div className="text-sm text-gray-400">Project Status</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-2xl p-8 inline-block">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">5+</div>
                <div className="text-gray-300">Restaurant Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">2+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;