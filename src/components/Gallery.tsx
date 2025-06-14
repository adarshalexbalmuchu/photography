import React, { useState, useEffect } from 'react';
import { portfolioImages, PortfolioImage } from '../data/images';
import ImageModal from './ImageModal';

interface GalleryProps {
  activeCategory: 'wildlife' | 'portraits';
}

const Gallery: React.FC<GalleryProps> = ({ activeCategory }) => {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [visibleImages, setVisibleImages] = useState<PortfolioImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const filteredImages = portfolioImages.filter(image => image.category === activeCategory);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleImages(filteredImages);
      setIsLoading(false);
    }, 300);
  }, [activeCategory]);

  const openModal = (image: PortfolioImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-800 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg bg-gray-900 transition-all duration-700 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                onClick={() => openModal(image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      {image.caption && (
                        <p className="text-gray-300 text-sm">{image.caption}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {visibleImages.length === 0 && !isLoading && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Gallery;