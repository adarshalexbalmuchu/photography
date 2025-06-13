
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      setIsHovering(true);
      const target = e.target as HTMLElement;
      if (target.dataset.cursor === 'view') {
        setCursorText('VIEW');
      } else if (target.dataset.cursor === 'explore') {
        setCursorText('EXPLORE');
      } else {
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    window.addEventListener('mousemove', updatePosition);
    
    // Add cursor effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className={`fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 transition-transform duration-150 ease-out mix-blend-difference ${
          isHovering ? 'scale-0' : 'scale-100'
        }`}
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      />
      
      {/* Hover cursor */}
      <div 
        className={`fixed pointer-events-none z-50 transition-all duration-300 ease-out ${
          isHovering ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{
          left: position.x - 30,
          top: position.y - 30,
        }}
      >
        <div className="w-15 h-15 border border-white rounded-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          {cursorText && (
            <span className="text-white text-xs font-medium tracking-wider">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
