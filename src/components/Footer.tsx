
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-light text-white mb-4">WILDLIFE & PORTRAITS</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Capturing the essence of life through the lens of conservation and humanity.
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-2xl"
            data-cursor="hover"
          >
            <span className="sr-only">Instagram</span>
            📷
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-2xl"
            data-cursor="hover"
          >
            <span className="sr-only">Facebook</span>
            📘
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-2xl"
            data-cursor="hover"
          >
            <span className="sr-only">Twitter</span>
            🐦
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-2xl"
            data-cursor="hover"
          >
            <span className="sr-only">Email</span>
            ✉️
          </a>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Wildlife & Portraits. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-400 transition-colors" data-cursor="hover">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors" data-cursor="hover">
                Terms of Use
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors" data-cursor="hover">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
