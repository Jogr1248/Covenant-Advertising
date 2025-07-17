import React from 'react';
import { SiTiktok, SiX, SiWhatsapp, SiDiscord, SiTelegram, SiFacebook } from 'react-icons/si';
import { ArrowUp, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How We Work', href: '#workflow' },
    { name: 'Platforms', href: '#platforms' },
    { name: 'Happy Clients', href: '#testimonials' },
    { name: 'Previous Works', href: '#previous-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Content Marketing',
    'Paid Advertising',
    'Video Editing & Graphics',
    'Social Media Management'
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/covenant_advertising1?igsh=MWJqcXZhZHZoamFzaQ==', label: 'Instagram' },
    { icon: SiX, href: 'https://x.com/CovenantAd?t=gUqs2yHynbWxK2NmoOw6lQ&s=35', label: 'X' }, 
    { icon: Linkedin, href: 'https://www.linkedin.com/in/covenant-advertising-439700373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: SiTiktok, href: 'tiktok.com/@covenant_ad', label: 'Tiktok' },
    { icon: SiWhatsapp, href: 'https://wa.me/251901409689', label: 'WhatsApp' },
    { icon: SiDiscord, href: 'https://discordapp.com/users/1394779442718707732', label: 'Discord' },
      { icon: SiTelegram, href: 'https://t.me/Covenantadvertising', label: 'Telegram' },
  { icon: SiFacebook, href: 'https://www.facebook.com/share/1B6LWaisn4/', label: 'Facebook' }

  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/photo_2025-07-13_16-26-34.jpg" 
                alt="Covenant Advertising Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We're passionate about helping businesses grow through strategic digital marketing. 
              Ready to transform your online presence?
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-400 hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Covenant Advertising. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-teal-400 text-black rounded-full flex items-center justify-center hover:bg-teal-300 transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
