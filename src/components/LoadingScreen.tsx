
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Camera aperture animation */}
        <div className="w-24 h-24 border-4 border-white rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-white transform-gpu animate-[aperture_2s_ease-in-out]"></div>
        </div>
        <div className="mt-6 text-center">
          <div className="text-white text-sm tracking-[0.3em] font-light animate-pulse">
            LOADING
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
