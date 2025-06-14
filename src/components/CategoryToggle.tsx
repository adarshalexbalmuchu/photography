import React from 'react';

interface CategoryToggleProps {
  activeCategory: 'wildlife' | 'portraits';
  onCategoryChange: (category: 'wildlife' | 'portraits') => void;
}

const CategoryToggle: React.FC<CategoryToggleProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex justify-center my-8 sm:my-12 md:my-16 lg:my-20">
      <div className="relative bg-gray-900 rounded-full p-1 sm:p-2 shadow-2xl">
        <div
          className={`absolute top-1 sm:top-2 h-10 sm:h-12 bg-yellow-400 rounded-full transition-all duration-500 ease-out ${
            activeCategory === 'wildlife'
              ? 'left-1 sm:left-2 w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.5rem)]' // Adjusted for padding
              : 'left-[calc(50%+0.25rem)] sm:left-[calc(50%+0.5rem)] w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.5rem)]' // Adjusted for padding
          }`}
        />
        
        <button
          onClick={() => onCategoryChange('wildlife')}
          className={`relative z-10 px-4 py-2 sm:px-6 md:px-8 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium tracking-wide transition-colors duration-300 w-1/2 ${
            activeCategory === 'wildlife' ? 'text-black' : 'text-white hover:text-yellow-400'
          }`}
          data-cursor="hover"
        >
          WILDLIFE
        </button>
        
        <button
          onClick={() => onCategoryChange('portraits')}
          className={`relative z-10 px-4 py-2 sm:px-6 md:px-8 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium tracking-wide transition-colors duration-300 w-1/2 ${
            activeCategory === 'portraits' ? 'text-black' : 'text-white hover:text-yellow-400'
          }`}
          data-cursor="hover"
        >
          PORTRAITS
        </button>
      </div>
    </div>
  );
};

export default CategoryToggle;
