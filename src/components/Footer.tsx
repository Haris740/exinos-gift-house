import React from 'react';
import { Mail, Phone, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-exinos-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-exinos-gold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-exinos-gold" />
                <span>exinoscreations@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-exinos-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <Star className="w-5 h-5 mr-3 text-exinos-gold mt-1" />
                <div>
                  <p>123 Artisan Lane</p>
                  <p>Craft District, CD 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-exinos-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-exinos-gold transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-exinos-gold transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-exinos-gold transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-exinos-gold transition-colors">About</a></li>
              <li><a href="#" className="hover:text-exinos-gold transition-colors">Custom Orders</a></li>
              <li><a href="#" className="hover:text-exinos-gold transition-colors">Bulk Pricing</a></li>
              <li><a href="#" className="hover:text-exinos-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-exinos-gold">Stay Connected</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                Subscribe to our newsletter for updates on new products and exclusive offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-gray-600 rounded-l-lg focus:outline-none focus:border-exinos-gold"
                />
                <button className="bg-exinos-gold hover:bg-exinos-gold/90 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-exinos-gold transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-exinos-gold transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-exinos-gold transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-exinos-gold transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Exinos Gift House. Crafted with ❤️ — Where stories begin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
