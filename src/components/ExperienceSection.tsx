import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  timeline: string;
  location: string;
  bullets: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 'exp-01',
    company: 'Cyparta',
    role: 'Frontend Developer - Intern',
    timeline: 'June 2025 - July 2025',
    location: '6th Of October, Egypt',
    bullets: [
      'Developed responsive React applications using reusable components and JavaScript (ES6+).',
      'Reduced development time by 30% through modular component architecture.',
      'Tested and optimized interfaces across Chrome, Edge, Firefox, and Safari, optimizing layouts for desktop, tablet, and mobile devices.'
    ]
  },
  {
    id: 'exp-02',
    company: 'North Chiang Mai University',
    role: 'Virtual Summer Intern',
    timeline: 'Summer 2025',
    location: 'Remote',
    bullets: [
      'Preprocessed and analyzed multivariate healthcare datasets to identify key factors influencing Type-2 Diabetes progression.',
      'Developed and optimized machine learning models, improving predictive performance through feature selection and evaluation using accuracy, precision, and recall metrics.'
    ]
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 z-20 relative overflow-hidden scroll-mt-24"
    >
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        {/* Section Header (Enlarged) */}
        <FadeIn delay={0} y={40} className="text-center mb-20 sm:mb-24">
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,11vw,140px)] leading-none tracking-tight">
            Experience
          </h2>
          <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base mt-5 font-light">
            Internships & Professional History
          </p>
        </FadeIn>

        {/* Timeline Pipeline */}
        <div className="w-full relative flex flex-col gap-12">
          {/* Vertical central connection line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#B600A8]/30 via-[#00E5FF]/30 to-[#B600A8]/10 -translate-x-1/2 hidden md:block" />

          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div 
                key={exp.id}
                className={`w-full flex flex-col md:flex-row justify-between items-center relative ${isLeft ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual timeline node */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-black border-2 border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.4)] z-10 -translate-x-1/2 hidden md:block" />

                {/* Card Container (fades in from sides, enlarged layout) */}
                <div className="w-full md:w-[46%] pl-10 md:pl-0">
                  <FadeIn delay={index * 0.15} x={isLeft ? 40 : -40} y={0}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="bg-[#111111]/85 border border-[#D7E2EA]/15 rounded-2xl p-7 sm:p-9 hover:border-[#00E5FF]/40 transition-colors duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md relative overflow-hidden group"
                    >
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B600A8]/50 to-[#00E5FF]/50" />

                      {/* Header details (Enlarged) */}
                      <div className="flex flex-col gap-2 border-b border-[#D7E2EA]/10 pb-5 mb-5">
                        <div className="flex items-center gap-2 text-sm sm:text-base text-[#00E5FF] uppercase font-bold tracking-widest font-mono">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-[#D7E2EA] group-hover:text-white transition-colors duration-300">
                          {exp.role}
                        </h3>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs sm:text-sm text-[#D7E2EA]/50 mt-1.5 font-light">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.timeline}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Bullet Description (Enlarged and bold font size) */}
                      <ul className="flex flex-col gap-3.5">
                        {exp.bullets.map((bullet, i) => (
                          <li 
                            key={i} 
                            className="text-sm sm:text-base md:text-[1.05rem] text-[#D7E2EA]/75 font-light leading-relaxed flex items-start gap-3"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#B600A8] shrink-0 mt-2.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </FadeIn>
                </div>

                {/* Empty half block to align cards on desktop */}
                <div className="w-[46%] hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
