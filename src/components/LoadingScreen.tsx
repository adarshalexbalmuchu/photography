import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      <div className="relative">
        {/* Camera lens animation */}
        <div className="w-24 h-24 relative">
          {/* Outer lens ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-300 animate-pulse"></div>
          
          {/* Multiple lens aperture rings zooming out smoothly */}
          <div className="absolute inset-2 rounded-full border-2 border-gray-400 animate-zoom-out"></div>
          <div className="absolute inset-4 rounded-full border-2 border-gray-500 animate-zoom-out-delayed-1"></div>
          <div className="absolute inset-6 rounded-full border-2 border-gray-600 animate-zoom-out-delayed-2"></div>
          
          {/* Center lens element */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-600 to-black animate-pulse"></div>
          
          {/* Lens reflection */}
          <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/30 animate-pulse"></div>
        </div>
        
        {/* Loading text */}
        <div className="mt-6 text-center">
          <p className="text-white text-lg font-light animate-pulse">Loading Portfolio</p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes zoom-out {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(50);
            opacity: 0;
          }
        }
        
        .animate-zoom-out {
          animation: zoom-out 2s infinite linear;
        }
        
        .animate-zoom-out-delayed-1 {
          animation: zoom-out 2s infinite linear;
          animation-delay: 0.3s;
        }
        
        .animate-zoom-out-delayed-2 {
          animation: zoom-out 2s infinite linear;
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
