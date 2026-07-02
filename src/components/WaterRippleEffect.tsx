import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

      // Spawn a ripple only if the mouse has moved a threshold distance (e.g. 50px) to prevent over-crowding
      if (distance > 45) {
        const newRipple = {
          id: rippleId++,
          x: e.clientX,
          y: e.clientY,
        };
        setRipples((prev) => [...prev.slice(-15), newRipple]); // Cap the number of ripples active at 15
        setLastPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastPosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{
              position: 'absolute',
              left: ripple.x,
              top: ripple.y,
              x: '-50%',
              y: '-50%',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: '2px solid rgba(0, 229, 255, 0.45)', // Neon Cyan
              boxShadow: '0 0 10px rgba(0, 229, 255, 0.25)',
              opacity: 0.75,
              scale: 0.2,
            }}
            animate={{
              scale: 6,
              opacity: 0,
              borderWidth: '1px',
              borderColor: 'rgba(182, 0, 168, 0)', // Transition to Magenta fade
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default WaterRippleEffect;
