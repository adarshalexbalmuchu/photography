
import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="text-5xl font-light mb-8 text-white">
              Behind the
              <span className="block text-yellow-400">Lens</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                For over a decade, I've been capturing the untold stories of wildlife and the human spirit. 
                My journey began in the remote landscapes of Patagonia, where I discovered the profound 
                connection between nature and humanity.
              </p>
              
              <p>
                Each photograph is a moment of truth—whether it's the piercing gaze of a mountain lion 
                or the quiet contemplation in a portrait session. I believe in patient observation, 
                ethical practices, and the power of imagery to inspire conservation and empathy.
              </p>
              
              <p>
                My work has been featured in National Geographic, Smithsonian Magazine, and numerous 
                conservation publications. But beyond accolades, I'm driven by the responsibility 
                to tell stories that matter.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-light text-yellow-400 mb-2">12+</div>
                <div className="text-sm text-gray-400 tracking-wide">YEARS</div>
              </div>
              <div>
                <div className="text-3xl font-light text-yellow-400 mb-2">50+</div>
                <div className="text-sm text-gray-400 tracking-wide">COUNTRIES</div>
              </div>
              <div>
                <div className="text-3xl font-light text-yellow-400 mb-2">500K+</div>
                <div className="text-sm text-gray-400 tracking-wide">IMAGES</div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2787&q=80"
                alt="Photographer portrait"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
