import React from 'react';
import { FadeIn } from './FadeIn';
import { ShinyButton } from './ui/shiny-button';
import { InteractiveRobotSpline } from './ui/interactive-3d-robot';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col items-center min-h-screen w-full overflow-hidden bg-[#0C0C0C]">
      {/* 1. Top spacing for fixed navbar */}
      <div className="h-20 sm:h-24 md:h-28 w-full shrink-0" />

      {/* 2. Hero Heading (Sized to fit in single line responsive) */}
      <div className="w-full text-center z-20 px-4 sm:px-6 pointer-events-none select-none shrink-0">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[clamp(2.2rem,7.8vw,7rem)]">
            Hi, i&apos;m praneeth
          </h1>
        </FadeIn>
      </div>

      {/* 3. Interactive 3D Robot with white / blue / red ambient backlights */}
      <div className="flex-1 flex items-center justify-center relative w-full min-h-0 z-10 pointer-events-auto px-4 my-4">
        {/* Blue spot — left side */}
        <div className="absolute w-[200px] sm:w-[320px] md:w-[420px] h-[200px] sm:h-[320px] md:h-[420px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none -translate-x-[30%] sm:-translate-x-[40%]" />
        {/* Red spot — right side */}
        <div className="absolute w-[200px] sm:w-[320px] md:w-[420px] h-[200px] sm:h-[320px] md:h-[420px] bg-red-500/15 rounded-full blur-[120px] pointer-events-none translate-x-[30%] sm:translate-x-[40%]" />
        {/* White spot — center */}
        <div className="absolute w-[160px] sm:w-[260px] md:w-[340px] h-[160px] sm:h-[260px] md:h-[340px] bg-white/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full h-full max-w-5xl max-h-[60vh] sm:max-h-[65vh] md:max-h-[70vh] flex justify-center items-center relative">
          <InteractiveRobotSpline
            scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
            className="w-full h-full select-none"
          />
        </div>
      </div>

      {/* 4. Absolute Bottom-Right: Contact Me Button (Positioned above the AboutSection overlap boundary) */}
      <div className="absolute right-4 bottom-24 sm:right-6 sm:bottom-28 md:right-10 md:bottom-32 z-30 pointer-events-auto">
        <FadeIn delay={0.35} y={20}>
          <ShinyButton onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact Me
          </ShinyButton>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
