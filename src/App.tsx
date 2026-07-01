import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="w-full bg-[#0C0C0C] overflow-x-clip min-h-screen relative">
      {/* 3D Creator Portfolio Sections (Praneeth Developer Portfolio) */}
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
export { App };
