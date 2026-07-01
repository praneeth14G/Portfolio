import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { CardStack } from './ui/card-stack';

interface SkillItem {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

const skillItems: SkillItem[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core languages used for systems engineering, backend logic development, scripting, and dataset queries.',
    skills: ['C', 'C++', 'Java', 'Python', 'TypeScript', 'SQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern web interface development specializing in modular components, responsive screens, and optimized client layouts.',
    skills: ['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    id: 'ai-data',
    title: 'AI & Data Science',
    description: 'Developing neural networks, deep learning classifiers, real-time messaging services, and multivariate dataset analytics.',
    skills: ['TensorFlow.js', 'PyTorch', 'OpenCV', 'Scikit-Learn', 'Flask-SocketIO'],
  },
  {
    id: 'design-tools',
    title: 'Design & Tools',
    description: 'UI/UX layout ideation, prototype wireframing, version control repositories, and system administration workflows.',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Adobe Photoshop', 'Git', 'Linux'],
  },
];

export const SkillsSection: React.FC = () => {
  const [cardWidth, setCardWidth] = useState(520);
  const [cardHeight, setCardHeight] = useState(350);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setCardWidth(300);
        setCardHeight(285);
      } else if (window.innerWidth < 768) {
        // Small screens
        setCardWidth(420);
        setCardHeight(320);
      } else {
        // Desktop
        setCardWidth(520);
        setCardHeight(350);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderSkillCard = (item: SkillItem) => {
    return (
      <div className="w-full h-full bg-[#0C0C0C]/90 rounded-2xl border-2 border-[#D7E2EA]/15 p-6 sm:p-8 flex flex-col justify-between shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-md relative overflow-hidden group">
        {/* Glow Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -z-10 group-hover:bg-indigo-500/15 transition-all duration-300" />
        
        {/* Card Title Row */}
        <div className="flex justify-between items-start border-b border-[#D7E2EA]/10 pb-4">
          <h3 className="text-lg sm:text-2xl font-bold uppercase tracking-wider text-[#D7E2EA]">
            {item.title}
          </h3>
          <span className="text-[9px] uppercase tracking-widest text-[#D7E2EA]/40 font-mono">
            Tech Card
          </span>
        </div>

        {/* Description */}
        <p className="text-[11px] sm:text-sm text-[#D7E2EA]/60 font-light leading-relaxed my-3">
          {item.description}
        </p>

        {/* Badges Container (Increased font size and padding) */}
        <div className="flex flex-wrap gap-2.5 mt-auto">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 text-[#D7E2EA] transition-all duration-300 hover:scale-105 hover:bg-[#D7E2EA]/10 select-none"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-24 pb-20 z-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-16 items-center">
        {/* Header */}
        <FadeIn delay={0} y={40} className="text-center">
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Skills
          </h2>
          <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm mt-4 font-light">
            Technical Expertise & Tools
          </p>
        </FadeIn>

        {/* Interactive 3D Stack */}
        <FadeIn delay={0.2} y={30} className="w-full flex justify-center">
          <CardStack
            items={skillItems}
            initialIndex={0}
            autoAdvance={true}
            intervalMs={3000}
            showDots={true}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            renderCard={renderSkillCard as any}
            spreadDeg={36}
            overlap={0.5}
            className="flex flex-col items-center"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default SkillsSection;
