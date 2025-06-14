import React, { useState, useEffect, useCallback } from 'react';
import { portfolioImages, PortfolioImage } from '../data/images';
import ImageModal from './ImageModal';
import { Button } from './ui/button'; // Assuming you have a Button component

interface GalleryProps {
  activeCategory: 'wildlife' | 'portraits';
}

const INITIAL_LOAD_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Gallery: React.FC<GalleryProps> = ({ activeCategory }) => {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [allCategoryImages, setAllCategoryImages] = useState<PortfolioImage[]>([]);
  const [visibleImages, setVisibleImages] = useState<PortfolioImage[]>([]);
  const [displayCount, setDisplayCount] = useState(INITIAL_LOAD_COUNT);
  const [isLoading, setIsLoading] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setStartAnimation(false);
    const filtered = portfolioImages.filter(image => image.category === activeCategory);
    setAllCategoryImages(filtered);
    setVisibleImages(filtered.slice(0, INITIAL_LOAD_COUNT));
    setDisplayCount(INITIAL_LOAD_COUNT); // Reset display count

    const timer = setTimeout(() => {
      setIsLoading(false);
      const animationTimer = setTimeout(() => setStartAnimation(true), 50);
      return () => clearTimeout(animationTimer);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleLoadMore = useCallback(() => {
    setStartAnimation(false); // Reset animation trigger for new items
    const newDisplayCount = displayCount + LOAD_MORE_COUNT;
    setDisplayCount(newDisplayCount);
    setVisibleImages(allCategoryImages.slice(0, newDisplayCount));
    // Trigger animation for newly added items after they are in the DOM
    const animationTimer = setTimeout(() => setStartAnimation(true), 50);
    return () => clearTimeout(animationTimer);
  }, [displayCount, allCategoryImages]);

  const openModal = (image: PortfolioImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (isLoading && visibleImages.length === 0) { // Show full skeleton only on initial category load
    return (
      <section className="py-12 sm:py-20 bg-black min-h-screen" data-section="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Adjusted grid for larger placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(INITIAL_LOAD_COUNT)].map((_, i) => (
              <div 
                key={i} 
                className={`bg-gray-800 animate-pulse rounded-lg ${
                  // Mobile heights
                  i % 3 === 0 ? 'h-[300px] sm:h-[500px]' : 
                  i % 3 === 1 ? 'h-[250px] sm:h-[400px]' : 
                  'h-[280px] sm:h-[450px]'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-12 sm:py-20 bg-black min-h-screen" data-section="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {visibleImages.length > 0 ? (
            // Adjusted grid for larger images: 1 col mobile, 2 sm, 3 lg
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visibleImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group cursor-pointer rounded-lg overflow-hidden
                             transition-all duration-500 ease-in-out
                             hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] hover:scale-105
                             ${startAnimation || index < displayCount - LOAD_MORE_COUNT ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  // Apply animation delay only to initially loaded or newly loaded items
                  style={{ 
                    transitionDelay: `${(index % LOAD_MORE_COUNT) * 75}ms`
                  }}
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-auto block rounded-lg shadow-md" // Maintain aspect ratio
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            !isLoading && ( // Only show "No images" if not loading and no images
              <div className="text-center py-16 sm:py-20">
                <p className="text-gray-400 text-lg sm:text-xl">No images found in this category.</p>
              </div>
            )
          )}

          {/* Load More Button */}
          {visibleImages.length < allCategoryImages.length && (
            <div className="text-center mt-12 sm:mt-16">
              <Button
                onClick={handleLoadMore}
                variant="outline"
                className="px-8 py-3 text-lg bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Load More
              </Button>
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