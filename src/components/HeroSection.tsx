import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import heroBg from '../assets/hero_bg.jpg';
import avatarBw from '../assets/avatar_bw.jpg';

export const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      id="home" 
      className="relative flex flex-col justify-between min-h-screen w-full overflow-hidden hero-mesh-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Invisible spacer to match vertical padding now that local header is removed */}
      <div className="h-10 sm:h-12 md:h-16 w-full shrink-0" />

      {/* 2. Middle display block (Big background typography & Centered Avatar Card) */}
      <div className="flex-grow flex flex-col items-center justify-center relative w-full z-10 py-6 shrink-0">
        {/* Massive background name display (Translated downward to fully clear the top navigation bar) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden z-0 translate-y-4 sm:translate-y-6">
          <h1 className="display-name-font font-black uppercase text-[#E2DFD3] leading-[0.8] text-center select-none opacity-90 tracking-normal" style={{ fontSize: 'clamp(5.5rem, 19vw, 15.5rem)' }}>
            <span className="block">Praneeth</span>
            <span className="block">Gadipudi</span>
          </h1>
        </div>

        {/* Foreground (Illustration Card showing Grayscale Portrait) */}
        <div className="relative z-10 flex flex-col items-center select-none text-center">
          {/* Centered Avatar Portrait Card with custom cursor trigger & interactive hover slide-down */}
          <FadeIn delay={0.2} y={30}>
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] md:w-[270px] md:h-[270px] bg-transparent rounded-[36px] overflow-hidden flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative group pointer-events-auto cursor-none select-none transition-transform duration-500 ease-out ${
                isHovered 
                  ? 'translate-y-40 sm:translate-y-48 md:translate-y-54' 
                  : 'translate-y-28 sm:translate-y-36 md:translate-y-40'
              }`}
              data-cursor-expand="true"
              data-cursor-text="Hey, I'm open to work or book a call now.."
            >
              {/* Grayscale Base Image (Always visible) */}
              <img 
                src={avatarBw} 
                alt="Praneeth Grayscale Avatar" 
                className="w-full h-full object-cover select-none pointer-events-none" 
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 3. Bottom Information block (Descriptions matching your details) */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-12 z-10 px-6 pb-10 sm:pb-12 md:pb-14 shrink-0 text-[#D7E2EA]/70 text-xs sm:text-sm font-light leading-relaxed select-none">
        <FadeIn delay={0.3} y={20} className="max-w-[320px]">
          <p>
            I currently work as a Frontend Developer Intern at Cyparta, currently available for work.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.35} y={20} className="max-w-[320px] text-left sm:text-right">
          <p>
            Focused on interfaces and experiences, studying at SRM University-AP.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
