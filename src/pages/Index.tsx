import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import CategoryToggle from '../components/CategoryToggle';
import Gallery from '../components/Gallery';
import About from '../components/About';
import MinimalFooter from '../components/MinimalFooter';
import CustomCursor from '../components/CustomCursor';
import ScrollIndicator from '../components/ScrollIndicator';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<'wildlife' | 'portraits'>('wildlife');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fast loading for better user experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Much faster loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <ScrollIndicator />
      
      <Hero />
      
      {/* Gallery Section with proper spacing */}
      <section data-section="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <CategoryToggle 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
          
          <Gallery activeCategory={activeCategory} />
        </div>
      </section>
      
      <About />
      
      <MinimalFooter />
    </div>
  );
};

export default Index;
