import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { WaterRippleEffect } from './components/WaterRippleEffect';
import { NavBar } from './components/ui/tubelight-navbar';
import { User, Code2, Briefcase, Sparkles, FolderKanban, Phone } from 'lucide-react';

const navItems = [
  { name: 'About', url: '#about', icon: User },
  { name: 'Skills', url: '#skills', icon: Code2 },
  { name: 'Experience', url: '#experience', icon: Briefcase },
  { name: 'Services', url: '#services', icon: Sparkles },
  { name: 'Projects', url: '#projects', icon: FolderKanban },
  { name: 'Contact', url: '#contact', icon: Phone }
];

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (url: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Snap window viewport to target id halfway through the black hole collapse (500ms)
    setTimeout(() => {
      const targetId = url.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }, 500);

    // Conclude transition phase after full sequence completes (1000ms)
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div className="w-full bg-[#0C0C0C] overflow-x-clip min-h-screen relative">
      {/* 1. Global Water Ripple Mouse Cursor tracker */}
      <WaterRippleEffect />

      {/* 2. Glassmorphic Tubelight Navigation Bar */}
      <NavBar items={navItems} onNavigate={handleNavigate} />

      {/* 3. Vortex Gravitational Portal (Black Hole Transition Overlay) */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 10, 0], 
              opacity: [0, 1, 0],
              rotate: [0, 720, 0] 
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1.0, times: [0, 0.5, 1], ease: "easeInOut" }}
            className="fixed inset-0 m-auto w-32 h-32 rounded-full bg-black border-[3px] border-purple-500 shadow-[0_0_80px_#B600A8,0_0_120px_#00E5FF] z-[100] pointer-events-none flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-transparent border-t-2 border-b-2 border-cyan-400 animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Page Content Wrapper with Vortex scaling / rotation triggers */}
      <motion.div
        animate={isTransitioning ? {
          scale: [1, 0.05, 1],
          rotate: [0, 360, 0],
          opacity: [1, 0, 1]
        } : {}}
        transition={{
          duration: 1.0,
          times: [0, 0.5, 1],
          ease: "easeInOut"
        }}
        className="w-full origin-center"
      >
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </motion.div>
    </div>
  );
}

export default App;
export { App };
