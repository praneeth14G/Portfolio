import React from 'react';
import { FadeIn } from './FadeIn';
import { ShinyButton } from './ui/shiny-button';
import { InteractiveRobotSpline } from './ui/interactive-3d-robot';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col justify-between h-screen w-full overflow-hidden bg-[#0C0C0C]">
      {/* Spacer where the old navbar was */}
      <div className="h-10 w-full z-20 pointer-events-none" />

      {/* 1. Hero Heading (centered vertically behind the 3D model, resized dynamically) */}
      <div className="flex-grow flex items-center justify-center overflow-hidden w-full px-6 md:px-10 z-0">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[7.5vw] sm:text-[8vw] md:text-[9vw] lg:text-[9.5vw] mt-6 sm:mt-4 md:-mt-5 select-none opacity-45">
            Hi, i&apos;m praneeth
          </h1>
        </FadeIn>
      </div>

      {/* 2. Interactive 3D Spline Robot with futuristic glowing hues */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto pt-10 sm:pt-0">
        <div className="w-full h-full max-h-[75vh] md:max-h-[82vh] flex justify-center items-center relative">
          {/* Cyber glowing background spotlights */}
          <div className="absolute w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
          
          {/* Lazy-loaded Spline canvas with hue color shifts */}
          <InteractiveRobotSpline
            scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
            className="w-full h-full select-none hue-rotate-[240deg] saturate-[1.6] contrast-[1.1] scale-95 sm:scale-100"
          />
        </div>
      </div>

      {/* 3. Bottom bar */}
      <div className="flex justify-between items-end w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 pointer-events-none">
        {/* Left: Paragraph Text */}
        <FadeIn delay={0.35} y={20}>
          <p 
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a frontend & ai developer driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right: Shiny Button (clickable pointer-events-auto override) */}
        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
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
