
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Lens opening animation */}
        <div className="w-32 h-32 relative overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center animate-lens-open">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-900 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-700 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="text-white text-sm tracking-[0.5em] font-light animate-pulse">
            LOADING
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
