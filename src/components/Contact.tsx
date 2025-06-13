
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-6">
            Let's Create
            <span className="block text-yellow-400">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Whether you're looking for wildlife documentation, portrait sessions, 
            or licensing existing work, I'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-sm text-gray-400 mb-2 tracking-wide">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                data-cursor="hover"
              />
            </div>
            
            <div className="group">
              <label className="block text-sm text-gray-400 mb-2 tracking-wide">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                data-cursor="hover"
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm text-gray-400 mb-2 tracking-wide">SUBJECT</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300"
              data-cursor="hover"
            />
          </div>

          <div className="group">
            <label className="block text-sm text-gray-400 mb-2 tracking-wide">MESSAGE</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300 resize-none"
              data-cursor="hover"
            />
          </div>

          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-12 py-4 bg-yellow-400 text-black font-medium tracking-wide hover:bg-white transition-all duration-300 disabled:opacity-50"
              data-cursor="hover"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  SENDING...
                </span>
              ) : (
                'SEND MESSAGE'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
