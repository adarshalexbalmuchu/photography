
import React, { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "✓ Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-black">
      <div className="max-w-4xl mx-auto px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-6xl font-light text-white mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Let's Create
            <span className="block text-amber-400 mt-2">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for wildlife documentation, portrait sessions, 
            or licensing existing work, I'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="floating-label">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                data-cursor="hover"
              />
              <label>Your Name</label>
            </div>
            
            <div className="floating-label">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                data-cursor="hover"
              />
              <label>Email Address</label>
            </div>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder=" "
              data-cursor="hover"
            />
            <label>Subject</label>
          </div>

          <div className="floating-label">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder=" "
              data-cursor="hover"
              className="resize-none"
            />
            <label>Your Message</label>
          </div>

          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-12 py-5 bg-amber-400 text-black font-medium tracking-widest hover:bg-white transition-all duration-300 disabled:opacity-50 overflow-hidden"
              data-cursor="hover"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-3"></div>
                  SENDING...
                </span>
              ) : (
                <>
                  <span className="relative z-10">SEND MESSAGE</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
