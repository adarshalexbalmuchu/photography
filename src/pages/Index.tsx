
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import CategoryToggle from '../components/CategoryToggle';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import ScrollIndicator from '../components/ScrollIndicator';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<'wildlife' | 'portraits'>('wildlife');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Camera lens animation timing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <ScrollIndicator />
      
      <Hero />
      
      <section className="py-20" data-section="gallery">
        <CategoryToggle 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        <Gallery category={activeCategory} />
      </section>
      
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
