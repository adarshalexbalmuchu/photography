import React, { useState, useEffect, useRef } from 'react';
import ImageModal from './ImageModal';
import { getImagesByCategory, organizeImagesForLayout, PortfolioImage } from '../data/images';

interface GalleryProps {
  category: 'wildlife' | 'portraits';
}

const Gallery: React.FC<GalleryProps> = ({ category }) => {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load images from local data based on category
    const categoryImages = getImagesByCategory(category);
    // Organize images for optimal layout with mixed aspect ratios
    const organizedImages = organizeImagesForLayout(categoryImages);
    setImages(organizedImages);
    setVisibleImages(new Set());
  }, [category]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const imageElements = galleryRef.current?.querySelectorAll('.gallery-image');
    imageElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [images]);

  return (
    <div ref={galleryRef}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light mb-6 animate-text-reveal">
          {category === 'wildlife' ? 'Wildlife Collection' : 'Portrait Collection'}
        </h2>
        <div className="w-24 h-0.5 bg-white mx-auto opacity-30"></div>
      </div>

        {images.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No images available for {category}. 
              <br />
              Add images to <code className="bg-gray-800 px-2 py-1 rounded">public/images/{category}/</code> 
              <br />
              and update <code className="bg-gray-800 px-2 py-1 rounded">src/data/images.ts</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {images.map((image, index) => {
              // Determine aspect ratio class based on image orientation
              const getAspectRatioClass = (aspectRatio: string) => {
                switch (aspectRatio) {
                  case '16:9':
                    return 'aspect-[16/9]';
                  case '9:16':
                    return 'aspect-[9/16]';
                  case '4:5':
                    return 'aspect-[4/5]';
                  case '1:1':
                    return 'aspect-square';
                  default:
                    return 'aspect-[4/5]';
                }
              };

              // Enhanced grid span for more balanced layout with mixed aspect ratios
              const getGridSpan = (aspectRatio: string, index: number) => {
                // Special handling for mixed aspect ratios
                if (aspectRatio === '16:9') {
                  // Make some landscape images full width for visual interest
                  return index % 5 === 0 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-2' : 'sm:col-span-2';
                } else if (aspectRatio === '9:16') {
                  // Vertical images get normal width but can be taller
                  return '';
                }
                return ''; // Default for other aspect ratios
              };

              return (
                <div
                  key={image.id}
                  data-index={index}
                  className={`gallery-image group cursor-pointer transition-all duration-700 ${
                    visibleImages.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  } ${getGridSpan(image.aspectRatio, index)}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className={`relative overflow-hidden rounded-lg bg-gray-900 ${getAspectRatioClass(image.aspectRatio)}`}>
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg md:text-xl font-light mb-2">{image.title}</h3>
                        {image.caption && (
                          <p className="text-sm text-gray-300">{image.caption}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

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
