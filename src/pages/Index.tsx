
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import CategoryToggle from '../components/CategoryToggle';
import Gallery from '../components/Gallery';
import About from '../components/About';
import MinimalFooter from '../components/MinimalFooter';
import CustomCursor from '../components/CustomCursor';
import ScrollIndicator from '../components/ScrollIndicator';
import LoadingScreen from '../components/LoadingScreen';
import AdminPanel from '../components/AdminPanel';
import AuthModal from '../components/AuthModal';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<'wildlife' | 'portraits'>('wildlife');
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Professional camera lens animation timing - cinematic experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Perfect timing for the professional lens animation

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    // Check if user is admin
    if (user) {
      checkAdminStatus();
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const checkAdminStatus = async () => {
    if (!user) return;
    
    const { data } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    
    setIsAdmin(data?.role === 'admin');
  };

  const handleAdminKeyPress = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      if (!user) {
        setShowAuthModal(true);
      } else if (isAdmin) {
        setShowAdminPanel(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleAdminKeyPress);
    return () => window.removeEventListener('keydown', handleAdminKeyPress);
  }, [user, isAdmin]);

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
      <MinimalFooter />

      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => {
            setShowAuthModal(false);
            setTimeout(() => checkAdminStatus(), 1000);
          }}
        />
      )}

      {showAdminPanel && isAdmin && (
        <AdminPanel onClose={() => setShowAdminPanel(false)} />
      )}
    </div>
  );
};

export default Index;
