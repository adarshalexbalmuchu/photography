
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToGallery = () => {
    const gallerySection = document.querySelector('[data-section="gallery"]');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with subtle parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=3634&q=80')`,
          transform: isVisible ? 'scale(1.05) translateY(-20px)' : 'scale(1.1) translateY(0px)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-8">
        <h1 
          className={`text-7xl md:text-9xl font-light mb-8 transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="block text-white leading-tight">WILDLIFE</span>
          <span className="block text-amber-400 text-5xl md:text-7xl font-light mt-2">
            & PORTRAITS
          </span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl font-light text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed transition-all duration-1500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          Capturing the raw essence of life through conservation and humanity
        </p>

        <button 
          onClick={scrollToGallery}
          className={`group relative px-10 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest font-light text-lg overflow-hidden ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '600ms' }}
          data-cursor="explore"
        >
          <span className="relative z-10">EXPLORE WORK</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </button>
      </div>

      {/* Refined scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="flex flex-col items-center">
          <span className="text-white text-xs tracking-widest mb-4 font-light">SCROLL</span>
          <div className="w-px h-16 bg-white opacity-50 relative overflow-hidden">
            <div className="w-full h-4 bg-amber-400 absolute top-0 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
