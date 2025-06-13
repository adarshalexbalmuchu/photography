
import React from 'react';

interface CategoryToggleProps {
  activeCategory: 'wildlife' | 'portraits';
  onCategoryChange: (category: 'wildlife' | 'portraits') => void;
}

const CategoryToggle: React.FC<CategoryToggleProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex justify-center mb-16">
      <div className="relative bg-gray-900 rounded-full p-2">
        <div 
          className={`absolute top-2 h-12 bg-yellow-400 rounded-full transition-all duration-500 ease-out ${
            activeCategory === 'wildlife' ? 'left-2 w-32' : 'left-36 w-32'
          }`}
        />
        
        <button
          onClick={() => onCategoryChange('wildlife')}
          className={`relative z-10 px-8 py-3 rounded-full text-lg font-medium tracking-wide transition-colors duration-300 ${
            activeCategory === 'wildlife' ? 'text-black' : 'text-white hover:text-yellow-400'
          }`}
          data-cursor="hover"
        >
          WILDLIFE
        </button>
        
        <button
          onClick={() => onCategoryChange('portraits')}
          className={`relative z-10 px-8 py-3 rounded-full text-lg font-medium tracking-wide transition-colors duration-300 ${
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
