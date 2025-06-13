
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updatePosition);
    
    // Add cursor effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor="hover"]');
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
      <div 
        className={`fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 transition-transform duration-100 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transform: `translate3d(0, 0, 0) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div 
        className="fixed w-8 h-8 border border-white rounded-full pointer-events-none z-50 transition-all duration-300"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transform: `translate3d(0, 0, 0) scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0.5 : 0.3,
        }}
      />
    </>
  );
};

export default CustomCursor;
