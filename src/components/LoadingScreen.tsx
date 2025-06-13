
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Camera lens opening animation */}
        <div className="w-40 h-40 relative overflow-hidden">
          <div className="w-full h-full relative">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-600 animate-lens-open">
              {/* Inner lens */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center animate-lens-open" style={{ animationDelay: '0.3s' }}>
                {/* Center aperture */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-500 to-gray-800 flex items-center justify-center animate-lens-open" style={{ animationDelay: '0.6s' }}>
                  {/* Light reflection */}
                  <div className="w-4 h-4 bg-white rounded-full opacity-60 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
