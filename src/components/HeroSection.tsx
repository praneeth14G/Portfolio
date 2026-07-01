import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import praneethImg from '../assets/praneeth.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-between h-screen w-full overflow-hidden bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] z-20">
        <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
        <a href="#skills" className="hover:opacity-70 transition-opacity duration-200">Skills</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
      </FadeIn>

      {/* 2. Hero Heading (centered vertically, resized dynamically so "praneeth" fits perfectly) */}
      <div className="flex-grow flex items-center justify-center overflow-hidden w-full px-6 md:px-10 z-0">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[7.5vw] sm:text-[8vw] md:text-[9vw] lg:text-[9.5vw] mt-6 sm:mt-4 md:-mt-5 select-none">
            Hi, i&apos;m praneeth
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait (using the uploaded image cutout) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[320px] md:w-[380px] lg:w-[460px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full h-full">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full h-full flex justify-center items-end"
          >
            <img
              src={praneethImg}
              alt="Praneeth Portrait"
              className="w-full object-contain select-none pointer-events-none"
              style={{ maxHeight: '72vh' }}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="flex justify-between items-end w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        {/* Left: Paragraph Text */}
        <FadeIn delay={0.35} y={20}>
          <p 
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a frontend & ai developer driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right: Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
