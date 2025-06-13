
import React from 'react';

const MinimalFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-xl font-light text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            ADARSH
          </h3>
          <p className="text-gray-400 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
