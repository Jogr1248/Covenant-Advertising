import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className=" pt-36 md:pt-44 py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Grow Your <span className="text-teal-400">Brand</span>
          </h2>
          <p className="text-1xl text-gray-300 max-w-3xl mx-auto">
            Ready to take your digital marketing to the next level? Get in touch for a free strategy consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8">Get Started Today</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Mail size={24} className="text-teal-400 mr-4" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-gray-300">covenantadvertising1@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone size={24} className="text-teal-400 mr-4" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-gray-300">+25101409689</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={24} className="text-teal-400 mr-4" />
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-gray-300">Ras Abebe Aregay Street , Addis Ababa</div>
                </div>
              </div>
            </div>

            <div className="bg-black/50 p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">What to Expect:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Free 30-minute strategy consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Custom marketing plan proposal
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  No obligation, no pressure approach
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black/50 p-8 rounded-2xl">
            <form
              action="https://formspree.io/f/mldleaqe"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What are your marketing goals?"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-teal-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
