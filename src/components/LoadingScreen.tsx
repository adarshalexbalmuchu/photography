import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Simple elegant loader */}
        <div className="w-16 h-16 relative">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <div className="mt-6 text-center">
          <p className="text-white text-lg font-light animate-pulse">Loading Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
