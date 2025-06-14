import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToGallery = () => {
    const gallerySection = document.querySelector('[data-section="gallery"]');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Use the new elephant wildlife image as hero background
const heroBackground = `${import.meta.env.BASE_URL}images/hero-background.jpg`;
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-8">
        <h1 
          className={`text-8xl md:text-9xl font-light mb-6 transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          } animate-text-reveal`}
          style={{ 
            fontFamily: 'Playfair Display, serif',
            animationDelay: '0.3s'
          }}
        >
          <span className="block text-white leading-none">CAPTURED</span>
          <span className="block text-amber-400 text-6xl md:text-7xl font-light mt-2">
            MOMENTS
          </span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl font-light text-gray-200 mb-12 max-w-xl mx-auto leading-relaxed transition-all duration-1500 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          } animate-text-reveal`}
          style={{ animationDelay: '0.8s' }}
        >
          Where wilderness meets humanity
        </p>

        <button 
          onClick={scrollToGallery}
          className={`group relative px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-500 tracking-widest font-light text-sm overflow-hidden btn-hover animate-button-glow ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{ 
            transitionDelay: '1.2s',
            animationDelay: '1.2s'
          }}
          data-cursor="explore"
        >
          <span className="relative z-10">VIEW WORK</span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 animate-gentle-float ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="flex flex-col items-center">
          <div className="w-px h-12 bg-white opacity-60 relative overflow-hidden">
            <div className="w-full h-3 bg-amber-400 absolute top-0 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
