
import React, { useState, useEffect, useRef } from 'react';
import ImageModal from './ImageModal';

interface GalleryProps {
  category: 'wildlife' | 'portraits';
}

const wildlifeImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=3634&q=80',
    title: 'Mountain Deer',
    location: 'Colorado',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=4221&q=80',
    title: 'Savanna Wildlife',
    location: 'Tanzania',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=5472&q=80',
    title: 'Forest Guardian',
    location: 'Yellowstone',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=5146&q=80',
    title: 'Primate',
    location: 'Borneo',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=3722&q=80',
    title: 'Ocean Hunter',
    location: 'Australia',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80',
    title: 'Arctic Explorer',
    location: 'Norway',
  },
];

const portraitImages = [
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=3057&q=80',
    title: 'Innocence',
    location: 'Studio',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2976&q=80',
    title: 'Natural Beauty',
    location: 'Golden Hour',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2787&q=80',
    title: 'Character',
    location: 'Environmental',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2787&q=80',
    title: 'Contemplation',
    location: 'Urban',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=2987&q=80',
    title: 'Heritage',
    location: 'Documentary',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2787&q=80',
    title: 'Strength',
    location: 'Athletic',
  },
];

const Gallery: React.FC<GalleryProps> = ({ category }) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const images = category === 'wildlife' ? wildlifeImages : portraitImages;

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
      { threshold: 0.1, rootMargin: '100px' }
    );

    const imageElements = galleryRef.current?.querySelectorAll('[data-index]');
    imageElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-8 py-20" data-section="gallery" ref={galleryRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={image.id}
            data-index={index}
            className={`group cursor-pointer overflow-hidden transition-all duration-700 image-hover-effect ${
              visibleImages.has(index) 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
            onClick={() => setSelectedImage(image)}
            data-cursor="view"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-900 rounded-sm">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-light mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-300 tracking-wide">{image.location}</p>
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
