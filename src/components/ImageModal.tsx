
import React, { useEffect } from 'react';
import { PortfolioImage } from '../data/images';

interface ImageModalProps {
  image: PortfolioImage;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl w-full h-full flex items-center justify-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-yellow-400 transition-colors text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
          data-cursor="hover"
        >
          ✕
        </button>
        
        <div className="relative max-w-full max-h-full">
          <img
            src={image.imageUrl}
            alt={image.title}
            className={`max-w-full object-contain rounded-lg ${
              image.aspectRatio === '9:16' 
                ? 'w-auto h-[90vh] max-w-[90vw] sm:max-w-[75vw] md:max-w-[60vw] lg:max-w-[50vw]' 
                : image.aspectRatio === '16:9'
                ? 'w-full h-auto max-h-[80vh] sm:max-h-[85vh]'
                : image.aspectRatio === '4:5'
                ? 'w-auto h-[90vh] max-w-[85vw] sm:max-w-[70vw] md:max-w-[60vw]'
                : 'w-auto h-auto max-h-[85vh] max-w-[90vw]'
            }`}
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 rounded-b-lg">
            <h3 className="text-xl md:text-2xl font-light text-white mb-2">{image.title}</h3>
            {image.caption && (
              <p className="text-gray-300 text-sm md:text-base">{image.caption}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
