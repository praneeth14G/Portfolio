import React from 'react';
import { FadeIn } from './FadeIn';
import Lanyard from './Lanyard/Lanyard';
import heroBg from '../assets/hero_bg.jpg';
import cardFront from '../assets/lanyard/card-front.png';
import cardBack from '../assets/lanyard/card-back.svg';
import gpBand from '../assets/lanyard/gp-band.svg';

export const HeroSection: React.FC = () => {
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

        {/* Foreground (Interactive 3D Lanyard ID Card) */}
        <div className="relative z-10 flex flex-col items-center select-none text-center">
          <FadeIn delay={0.2} y={30}>
            <div className="w-[320px] h-[420px] sm:w-[380px] sm:h-[480px] md:w-[420px] md:h-[520px] pointer-events-auto select-none">
              <Lanyard
                position={[0, 0, 20]}
                gravity={[0, -40, 0]}
                frontImage={cardFront}
                backImage={cardBack}
                imageFit="cover"
                lanyardImage={gpBand}
                lanyardWidth={1}
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
