import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ShinyButton } from './ui/shiny-button';
import { DottedSurface } from './ui/dotted-surface';

// Custom 3D-styled glassmorphic AI Brain/Neural Network
const AIBrainIcon: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_10px_20px_rgba(0,229,255,0.15)]">
    <defs>
      <linearGradient id="brainGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#B600A8" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.1" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* Base Glass circle */}
    <circle cx="100" cy="100" r="80" fill="url(#brainGrad)" stroke="#D7E2EA" strokeOpacity="0.15" strokeWidth="1.5" />
    
    {/* Brain Nodes / Connections */}
    <g filter="url(#glow)">
      {/* Synaptic Lines */}
      <line x1="60" y1="80" x2="100" y2="50" stroke="#00E5FF" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="60" y1="80" x2="100" y2="100" stroke="#B600A8" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="100" y1="50" x2="140" y2="80" stroke="#00E5FF" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="140" y2="80" stroke="#B600A8" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="60" y1="120" x2="100" y2="100" stroke="#B600A8" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="60" y1="120" x2="100" y2="150" stroke="#00E5FF" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="100" y1="150" x2="140" y2="120" stroke="#00E5FF" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="140" y2="120" stroke="#B600A8" strokeOpacity="0.6" strokeWidth="1.5" />
      
      {/* Node Points */}
      <circle cx="60" cy="80" r="6" fill="#00E5FF" />
      <circle cx="100" cy="50" r="8" fill="#D7E2EA" />
      <circle cx="140" cy="80" r="6" fill="#00E5FF" />
      <circle cx="100" cy="100" r="10" fill="#B600A8" />
      <circle cx="60" cy="120" r="6" fill="#B600A8" />
      <circle cx="100" cy="150" r="8" fill="#00E5FF" />
      <circle cx="140" cy="120" r="6" fill="#B600A8" />
    </g>
  </svg>
);

// Custom 3D-styled glassmorphic Developer Code Brackets block
const CodeBracketsIcon: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_10px_20px_rgba(182,0,168,0.15)]">
    <defs>
      <linearGradient id="codeGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#B600A8" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect x="25" y="25" width="150" height="150" rx="28" fill="url(#codeGrad)" stroke="#D7E2EA" strokeOpacity="0.15" strokeWidth="1.5" />
    
    {/* Brackets symbols */}
    <path d="M70 70L45 100L70 130" stroke="#00E5FF" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M112 65L88 135" stroke="#D7E2EA" strokeWidth="5.5" strokeLinecap="round" />
    <path d="M130 70L155 100L130 130" stroke="#B600A8" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Custom 3D-styled AI Chip Core
const CPUMicrochipIcon: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_10px_20px_rgba(182,0,168,0.15)]">
    <defs>
      <linearGradient id="cpuGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#B600A8" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect x="25" y="25" width="150" height="150" rx="20" fill="url(#cpuGrad)" stroke="#D7E2EA" strokeOpacity="0.15" strokeWidth="1.5" />
    {/* Microchip Center Board */}
    <rect x="65" y="65" width="70" height="70" rx="10" fill="#121212" stroke="#00E5FF" strokeWidth="2" />
    <text x="100" y="106" fill="#D7E2EA" fontSize="17" fontWeight="900" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">CSE</text>
    
    {/* Bus lines */}
    <path d="M50 25V13M80 25V13M110 25V13M140 25V13M50 175V187M80 175V187M110 175V187M140 175V187M25 50H13M25 80H13M25 110H13M25 140H13M175 50H187M175 80H187M175 110H187M175 140H187" stroke="#D7E2EA" strokeOpacity="0.35" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Custom 3D-styled Server Database Cylinders
const DatabaseCylinderIcon: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_10px_20px_rgba(0,229,255,0.15)]">
    <defs>
      <linearGradient id="dbGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#100030" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    {/* Cylinder 1 (Top) */}
    <path d="M55 58C55 50 75 44 100 44C125 44 145 50 145 58V76C145 84 125 90 100 90C75 90 55 84 55 76V58Z" fill="url(#dbGrad)" stroke="#00E5FF" strokeWidth="1.5" />
    <ellipse cx="100" cy="58" rx="45" ry="12" fill="none" stroke="#D7E2EA" strokeOpacity="0.2" strokeWidth="1" />
    <circle cx="72" cy="70" r="3" fill="#00E5FF" />
    
    {/* Cylinder 2 (Middle) */}
    <path d="M55 98C55 90 75 84 100 84C125 84 145 90 145 98V116C145 126 125 132 100 132C75 132 55 126 55 116V98Z" fill="url(#dbGrad)" stroke="#B600A8" strokeWidth="1.5" />
    <ellipse cx="100" cy="98" rx="45" ry="12" fill="none" stroke="#D7E2EA" strokeOpacity="0.2" strokeWidth="1" />
    <circle cx="72" cy="110" r="3" fill="#B600A8" />
    
    {/* Cylinder 3 (Bottom) */}
    <path d="M55 138C55 130 75 124 100 124C125 124 145 130 145 138V156C145 166 125 172 100 172C75 172 55 166 55 156V138Z" fill="url(#dbGrad)" stroke="#00E5FF" strokeWidth="1.5" />
    <ellipse cx="100" cy="138" rx="45" ry="12" fill="none" stroke="#D7E2EA" strokeOpacity="0.2" strokeWidth="1" />
    <circle cx="72" cy="150" r="3" fill="#00E5FF" />
  </svg>
);

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      {/* 3D Wave Particle Background */}
      <DottedSurface className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none" />
      
      {/* Corner Decorative CSE/AI/ML Glassmorphic Icons with Spring Floating Loops */}
      
      {/* Top Left: Neural Network / AI Brain */}
      <div className="absolute top-[5%] left-[2%] sm:left-[4%] md:left-[6%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[110px] sm:w-[150px] md:w-[190px] h-[110px] sm:h-[150px] md:h-[190px]"
          >
            <AIBrainIcon />
          </motion.div>
        </FadeIn>
      </div>

      {/* Bottom Left: Code Brackets block */}
      <div className="absolute bottom-[6%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[95px] sm:w-[130px] md:w-[160px] h-[95px] sm:h-[130px] md:h-[160px]"
          >
            <CodeBracketsIcon />
          </motion.div>
        </FadeIn>
      </div>

      {/* Top Right: AI Microchip / CPU */}
      <div className="absolute top-[5%] right-[2%] sm:right-[4%] md:right-[6%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[110px] sm:w-[150px] md:w-[190px] h-[110px] sm:h-[150px] md:h-[190px]"
          >
            <CPUMicrochipIcon />
          </motion.div>
        </FadeIn>
      </div>

      {/* Bottom Right: Server Database Cylinder stack */}
      <div className="absolute bottom-[6%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[110px] sm:w-[150px] md:w-[190px] h-[110px] sm:h-[150px] md:h-[190px]"
          >
            <DatabaseCylinderIcon />
          </motion.div>
        </FadeIn>
      </div>

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

        {/* Scrolling Glassmorphic Education Marquee */}
        <FadeIn delay={0.35} y={25} className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md relative select-none mb-12">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee whitespace-nowrap gap-12 font-medium tracking-wide text-xs sm:text-sm uppercase text-[#D7E2EA] font-mono">
            <div className="flex gap-12 shrink-0">
              <span>🎓 SRM University-AP</span>
              <span className="text-[#00E5FF]">⚡ B.Tech. Computer Science and Engineering</span>
              <span className="text-[#B600A8]">📊 CGPA: 8.46 / 10</span>
              <span>📅 May 2023 - May 2027</span>
            </div>
            <div className="flex gap-12 shrink-0">
              <span>🎓 SRM University-AP</span>
              <span className="text-[#00E5FF]">⚡ B.Tech. Computer Science and Engineering</span>
              <span className="text-[#B600A8]">📊 CGPA: 8.46 / 10</span>
              <span>📅 May 2023 - May 2027</span>
            </div>
            <div className="flex gap-12 shrink-0">
              <span>🎓 SRM University-AP</span>
              <span className="text-[#00E5FF]">⚡ B.Tech. Computer Science and Engineering</span>
              <span className="text-[#B600A8]">📊 CGPA: 8.46 / 10</span>
              <span>📅 May 2023 - May 2027</span>
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
