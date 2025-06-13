
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
        className="relative max-w-5xl w-full animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-yellow-400 transition-colors text-2xl"
          data-cursor="hover"
        >
          ✕
        </button>
        
        <img
          src={image.imageUrl}
          alt={image.title}
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 rounded-b-lg">
          <h3 className="text-2xl font-light text-white mb-2">{image.title}</h3>
          {image.caption && (
            <p className="text-gray-300">{image.caption}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
