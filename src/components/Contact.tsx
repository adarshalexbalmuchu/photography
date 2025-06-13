
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
      { threshold: 0.2 }
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
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent",
      description: "I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-black">
      <div className="max-w-4xl mx-auto px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 animate-text-reveal" style={{ fontFamily: 'Playfair Display, serif' }}>
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Ready to capture something extraordinary?
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <label>Name</label>
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
              <label>Email</label>
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
              rows={5}
              placeholder=" "
              data-cursor="hover"
              className="resize-none"
            />
            <label>Message</label>
          </div>

          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-10 py-4 bg-amber-400 text-black font-medium tracking-widest hover:bg-white transition-all duration-300 disabled:opacity-50 btn-hover"
              data-cursor="hover"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  SENDING
                </span>
              ) : (
                <span className="relative z-10">SEND MESSAGE</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
