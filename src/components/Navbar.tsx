import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'How We Work', href: '#workflow' },
    { name: 'Platforms', href: '#platforms' },
    { name: 'Happy Clients', href: '#testimonials' },
    { name: 'Previous Works', href: '#previous-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
   <nav
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-black/95 backdrop-blur-md py-[0.8rem] px-0' : 'bg-transparent py-[1.2rem]'
  }`}
>
  <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center gap-3">
        <div className="backdrop-blur-sm rounded-lg w-36 h-full transition-all duration-500 hover:scale-105">
          <img
            src="/log.png"
            alt="Logo"
            className="h-24 w-full object-contain"
          />
        </div>
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:text-teal-400 transition-colors duration-200 font-medium"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-teal-400 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Nav */}
    {isMobileMenuOpen && (
  <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black z-40 pt-24 px-6 space-y-6">

        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block py-2 text-gray-300 hover:text-teal-400 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    )}
  </div>
</nav>

  );
};

export default Navbar;
