
import React, { useState, useEffect, useRef } from 'react';
import ImageModal from './ImageModal';
import { supabase } from '@/integrations/supabase/client';

interface GalleryProps {
  category: 'wildlife' | 'portraits';
}

interface PortfolioImage {
  id: string;
  title: string;
  caption: string | null;
  category: string;
  image_url: string;
  created_at: string;
}

const Gallery: React.FC<GalleryProps> = ({ category }) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchImages();
  }, [category]);

  const fetchImages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('portfolio_images')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setImages(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    setVisibleImages(new Set());
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const imageElements = galleryRef.current?.querySelectorAll('[data-index]');
    imageElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [images]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="aspect-[4/5] bg-gray-800 rounded-sm animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-20" data-section="gallery" ref={galleryRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={image.id}
            data-index={index}
            className={`group cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
              visibleImages.has(index) 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
            onClick={() => setSelectedImage({
              src: image.image_url,
              title: image.title,
              location: image.caption || ''
            })}
            data-cursor="view"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-900 rounded-sm">
              <img
                src={image.image_url}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl font-light mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {image.title}
                  </h3>
                  {image.caption && (
                    <p className="text-sm text-gray-300 tracking-wide">{image.caption}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
