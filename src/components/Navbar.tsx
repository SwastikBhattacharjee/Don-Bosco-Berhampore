import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Detect when the page is scrolled past a certain point
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define menu items
  const menuItems = ['Home', 'About', 'Academics', 'Gallery', 'Contact'];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-opacity-90 bg-[#1a1a1a] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-purple-500" />
            <span className="ml-3 text-2xl font-semibold text-white">
              Don Bosco School
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`} // Link to corresponding section ID
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition duration-200 ease-in-out"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-purple-900 bg-opacity-80 backdrop-blur-lg transition-transform duration-500 ${
          isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Close Menu"
          >
            <X className="h-8 w-8" />
          </button>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`} // Link to corresponding section ID
              className="text-gray-300 hover:text-purple-400 text-2xl font-medium transition duration-200"
              onClick={() => setIsOpen(false)} // Close menu after clicking
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
