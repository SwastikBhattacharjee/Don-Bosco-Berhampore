import React from 'react';
import { Database, Globe, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Don Bosco School</h3>
            <p className="text-gray-400 mb-4">
              Empowering minds, building character, and fostering excellence since 1960.
            </p>
            <div className="flex space-x-4">
              <a href="http://www.donboscoberhampore.in/" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Database className="h-5 w-5" />
              </a>
              <a target="_blank" href="https://donboscosouthasia.org/What-we-do/Education/Schools-Info?id=126" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a target="_blank" href="https://www.facebook.com/people/Don-Bosco-School-Berhampore/100076902582384/" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a target="_blank" href="https://www.youtube.com/@dbsb" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                About Us
                </a>
              </li>
              <li>
                <a href="#academics" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Academics
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                Panchanantala, PO - Boaliadanga, Berhampore, Murshidabad West Bengal, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">+91 8420295770</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">donboscoberhampore@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-purple-400 text-white"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4B0082] to-[#2D1B69] text-white py-2 rounded-lg hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Swastik Bhattacharjee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;