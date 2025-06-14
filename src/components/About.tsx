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
                 A passionate photographer specializing in wildlife and portrait photography. With a camera in hand and an eye for detail, I aim to capture moments that tell powerful stories, from the raw intensity of nature to the subtle depth in human expressions.
              </p>

           <p>
            Over the years, I’ve spent countless hours in forests, rural landscapes, and urban settings, honing my craft. My wildlife shots focus on the untamed beauty of animals in their natural habitat, while my portraits aim to reveal emotion, character, and authenticity through thoughtful composition and lighting.
           </p>
              
              <p>
              My work has connected with over 2.5 lakh+ viewers on Instagram, and I continue to explore new ways to blend art, storytelling, and emotion in every frame. Photography, for me, isn’t just a skill, it’s a way of seeing the world differently and helping others do the same.
            </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-light text-yellow-400 mb-2">6+</div>
                <div className="text-sm text-gray-400 tracking-wide">YEARS</div>
              </div>
            
              <div>
                <div className="text-3xl font-light text-yellow-400 mb-2">200K+</div>
                <div className="text-sm text-gray-400 tracking-wide">IMPRESSIONS</div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">

<img
  src={`${import.meta.env.BASE_URL}images/portraits/about-me.jpg`}
  alt="Photographer portrait"
  className="w-full h-96 object-cover object-[center_60%] rounded-lg shadow-2xl"
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
