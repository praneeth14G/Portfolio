import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { WaterRippleEffect } from './components/WaterRippleEffect';
import { CustomCursor } from './components/CustomCursor';
import { NavBar } from './components/ui/tubelight-navbar';
import { User, Code2, Briefcase, Sparkles, FolderKanban, Phone } from 'lucide-react';

const navItems = [
  { name: 'About', url: '#about', icon: User },
  { name: 'Experience', url: '#experience', icon: Briefcase },
  { name: 'Skills', url: '#skills', icon: Code2 },
  { name: 'Services', url: '#services', icon: Sparkles },
  { name: 'Projects', url: '#projects', icon: FolderKanban },
  { name: 'Contact', url: '#contact', icon: Phone }
];

function App() {
  const handleNavigate = (url: string) => {
    const targetId = url.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#0C0C0C] overflow-x-clip min-h-screen relative">
      {/* 1. Global Custom Color-Inverting Cursor */}
      <CustomCursor />

      {/* 2. Global GPU-Accelerated Water Ripple Mouse Cursor tracker */}
      <WaterRippleEffect />

      {/* 2. Glassmorphic Tubelight Navigation Bar */}
      <NavBar items={navItems} onNavigate={handleNavigate} />

      {/* 3. Page Content Pipeline (Clean scroll structure) */}
      <div className="w-full">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
export { App };
