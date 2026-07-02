import React, { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const WaterRippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rippleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPosition.x;
      const dy = e.clientY - lastPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Throttled distance trigger for ultra-lightweight GPU mapping
      if (distance > 70) {
        const newRipple = {
          id: rippleId++,
          x: e.clientX,
          y: e.clientY,
        };
        setRipples((prev) => [...prev.slice(-8), newRipple]); // Cap at 8 active elements
        setLastPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastPosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="cursor-ripple-ring"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
          onAnimationEnd={() => {
            setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
          }}
        />
      ))}
    </div>
  );
};

export default WaterRippleEffect;
