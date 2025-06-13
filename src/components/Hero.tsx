
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

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[15s] ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=3634&q=80')`,
          transform: isVisible ? 'scale(1.1)' : 'scale(1.15)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

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
      </div>
    </section>
  );
};

export default Hero;
