
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 animate-screen-fade-out">
      <div className="relative">
        {/* Professional camera lens */}
        <div className="w-32 h-32 relative animate-lens-entrance">
          {/* Outer lens barrel */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 shadow-2xl animate-barrel-rotate">
            {/* Inner lens housing */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-inner">
              {/* Aperture mechanism */}
              <div className="absolute inset-4 rounded-full overflow-hidden">
                {/* Aperture blades */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 animate-aperture-blade"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                      animationDelay: `${i * 0.05}s`
                    }}
                  >
                    <div className="absolute top-0 left-1/2 w-0 h-0 transform -translate-x-1/2 animate-blade-expand"
                         style={{
                           borderLeft: '8px solid transparent',
                           borderRight: '8px solid transparent',
                           borderTop: '16px solid #374151',
                           animationDelay: `${0.8 + i * 0.05}s`
                         }}>
                    </div>
                  </div>
                ))}
                
                {/* Center aperture opening */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-black animate-aperture-open relative overflow-hidden">
                    {/* Light rays */}
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute inset-0 animate-light-ray"
                          style={{
                            transform: `rotate(${i * 60}deg)`,
                            animationDelay: `${1.2 + i * 0.1}s`
                          }}
                        >
                          <div className="absolute top-0 left-1/2 w-px h-4 bg-gradient-to-b from-white to-transparent transform -translate-x-1/2 opacity-0"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Center highlight */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-center-glow"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Lens reflections */}
              <div className="absolute inset-6 rounded-full border border-white/10 animate-reflection-1"></div>
              <div className="absolute inset-8 rounded-full border border-white/5 animate-reflection-2"></div>
            </div>
            
            {/* Lens markings */}
            <div className="absolute inset-0 rounded-full animate-markings-appear">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full"
                  style={{ transform: `rotate(${i * 30}deg)` }}
                >
                  <div className="absolute top-0.5 left-1/2 w-0.5 h-2 bg-white/60 transform -translate-x-1/2 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Focus ring */}
          <div className="absolute -inset-1 rounded-full border-2 border-white/20 animate-focus-ring"></div>
        </div>
        
        {/* Subtle loading indicator */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1 animate-dots-appear">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white/60 rounded-full animate-dot-pulse"
                style={{ animationDelay: `${1.5 + i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
