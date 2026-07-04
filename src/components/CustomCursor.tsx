import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const trigger = target.closest('[data-cursor-expand="true"]');
      if (trigger) {
        setIsHovered(true);
        setHoverText(trigger.getAttribute('data-cursor-text') || '');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className="fixed left-0 top-0 pointer-events-none z-[9999] flex items-center justify-start will-change-[left,top] -translate-x-1/2 -translate-y-1/2"
      style={{
        left: '-100px',
        top: '-100px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
    >
      <AnimatePresence initial={false}>
        {!isHovered ? (
          /* Normal state: small white circle with active color-inversion below it */
          <motion.div
            key="dot"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="w-7 h-7 rounded-full bg-white mix-blend-difference"
          />
        ) : (
          /* Hover state: green banner expanding width auto with left-to-right sliding text */
          <motion.div
            key="banner"
            initial={{ width: '28px', height: '28px', opacity: 0.5 }}
            animate={{ width: 'auto', height: 'auto', opacity: 1 }}
            exit={{ width: '28px', height: '28px', opacity: 0.5 }}
            transition={{ type: 'spring', damping: 20, stiffness: 180 }}
            className="px-6 py-3 bg-[#84C225] text-black rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
          >
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.25, ease: 'easeOut' }}
              className="text-[10px] sm:text-xs font-semibold tracking-wide whitespace-nowrap text-black uppercase"
            >
              {hoverText}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;
