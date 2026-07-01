import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  children: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ children, index, total, progress }) => {
  // Map this character's index to start and end scroll progress ranges
  const start = index / total;
  const end = Math.min(1, (index + 6) / total); 
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{children}</span>
      <motion.span style={{ opacity }} className="absolute top-0 left-0">
        {children}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const total = text.length;
  
  // Track global index of characters for animation timing alignment
  let globalCharIndex = 0;

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center row-gap-2 column-gap-1 text-center`}>
      {words.map((word, wIdx) => {
        const chars = word.split('');
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap mx-[0.22em]">
            {chars.map((char, cIdx) => {
              const charIndex = globalCharIndex;
              globalCharIndex++;
              return (
                <Character 
                  key={`${wIdx}-${cIdx}`} 
                  index={charIndex} 
                  total={total} 
                  progress={scrollYProgress}
                >
                  {char}
                </Character>
              );
            })}
            {/* Account for the trailing space in progress index calculation */}
            {(() => {
              globalCharIndex++;
              return null;
            })()}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
