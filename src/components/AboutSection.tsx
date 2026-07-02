import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ShinyButton } from './ui/shiny-button';
import { DottedSurface } from './ui/dotted-surface';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden scroll-mt-24 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] z-20 -mt-16 sm:-mt-20 md:-mt-24 border-t border-[#D7E2EA]/10 shadow-[0_-15px_30px_rgba(0,0,0,0.8)]">
      {/* 3D Wave Particle Background */}
      <DottedSurface className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none" />
      
      {/* Content wrapper */}
      <div className="relative flex flex-col items-center justify-center text-center z-10 max-w-4xl w-full">
        {/* About heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-14 md:mb-16">
            About me
          </h2>
        </FadeIn>

        {/* Animated paragraph character-by-character (With grammar capitalize fix) */}
        <div className="mb-8 w-full flex justify-center px-4">
          <AnimatedText
            text="With more than three years of experience in development and design, I focus on frontend web, machine learning, and user experience, I truly enjoy working with projects that aim to stand out and present their best functionality. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        {/* Scrolling Glassmorphic Education Marquee (Premium text style: removed emojis) */}
        <FadeIn delay={0.35} y={25} className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md relative select-none mb-12">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee whitespace-nowrap gap-12 font-semibold tracking-widest text-xs sm:text-sm uppercase text-[#D7E2EA] font-mono">
            <div className="flex gap-12 shrink-0">
              <span>SRM University-AP</span>
              <span className="text-[#00E5FF]">|</span>
              <span className="text-[#00E5FF]">B.Tech. Computer Science and Engineering</span>
              <span className="text-[#B600A8]">|</span>
              <span className="text-[#B600A8]">CGPA: 8.46 / 10</span>
              <span>|</span>
              <span>May 2023 - May 2027</span>
            </div>
            <div className="flex gap-12 shrink-0">
              <span>SRM University-AP</span>
              <span className="text-[#00E5FF]">|</span>
              <span className="text-[#00E5FF]">B.Tech. Computer Science and Engineering</span>
              <span className="text-[#B600A8]">|</span>
              <span className="text-[#B600A8]">CGPA: 8.46 / 10</span>
              <span>|</span>
              <span>May 2023 - May 2027</span>
            </div>
            <div className="flex gap-12 shrink-0">
              <span>SRM University-AP</span>
              <span className="text-[#00E5FF]">|</span>
              <span className="text-[#00E5FF]">B.Tech. Computer Science and Engineering</span>
              <span className="text-[#B600A8]">|</span>
              <span className="text-[#B600A8]">CGPA: 8.46 / 10</span>
              <span>|</span>
              <span>May 2023 - May 2027</span>
            </div>
          </div>
        </FadeIn>

        {/* Premium Shiny button to trigger scroll to Contact Section */}
        <FadeIn delay={0.45} y={20}>
          <ShinyButton onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get In Touch
          </ShinyButton>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
