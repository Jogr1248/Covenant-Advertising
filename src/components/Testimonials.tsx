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
    name: 'California Training Institute',
    role: 'Currently Active Project',
    image: 'https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/475240632_960421769518344_731347323528315987_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGcC6T8uXpvqw-MzlttNL5EiNz3ZYr3FOmI3PdlivcU6ehYgoGXt96XSICqWLEvQ9mWHObRfdLA2VflEnXLOhzP&_nc_ohc=NqJM1Nn8el0Q7kNvwGg-amG&_nc_oc=AdnGchsoKuiSLAHhyUj47Sgt1TxTxYIf5zh7D5rGXKV9f1LGU3FzRgR5ql1AkaEYEOY&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=CHAZeI3yq_n1uI_hLvYF-A&oh=00_AfVIn1Q-MayglZ_CqXk5xh3U0gkCCKNVbjI0FtmQsp2SRQ&oe=68B4CF13', // replace with better logo if available
    rating: 5,
    text: 'Currently working with Covenant Advertising and already seeing remarkable improvements. Their innovative approach and digital expertise are exactly what we needed.',
    results: 'Ongoing Success'
  }
  ];

const currentClients = [
 {
    name: 'Beautiko College',
    role: 'Training Institute, Pretoria, South Africa',
    image: 'https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/273671227_2067560383408588_8747290490942697536_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeETa77waN-u1aU-1CePEWrIgQWm1ZOslhqBBabVk6yWGsXiukheKl_cEVX1Ywxs-PYDDPvJ7VRxQTVrT6QoPgK_&_nc_ohc=gmRLycscFVwQ7kNvwHQi85O&_nc_oc=Adm4QLrcBjNv2IVTtY-r3ET3gutRUmk39K7zCgd4wy25uRRY6rMFZCLMokm_ZBtLnrM&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=TTqLoFdd0WOdylAxqmTnqg&oh=00_AfUSSgSWOKz__G0TZ3Pg6bhtZ0KI3Lza0z4f1ly77dI4zQ&oe=68B4DD98', // replace with actual logo/thumbnail if needed
    rating: 5,
    text: 'Covenant Advertising enhanced our brand presence with creative strategies and impactful campaigns. Their support helped us grow our student base and strengthen our online visibility.',
    results: 'Outstanding Results'
  }
];

  return (
    <section id="testimonials" className=" pt-36 md:pt-44 py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-teal-400">Happy Clients</span>
          </h2>
          <p className="text-1xl text-gray-300 max-w-3xl mx-auto">
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