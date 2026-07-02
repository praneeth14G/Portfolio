import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { InteractiveFolderGallery } from '@/components/ui/interactive-folder-gallery';

interface ProjectDescription {
  id: string | number;
  text: string;
}

interface Project {
  id: string;
  category: string;
  title: string;
  url?: string;
  buttonLabel?: string;
  descriptions: ProjectDescription[];
}

const projectsData: Project[] = [
  {
    id: '01',
    category: 'Research / AI & Networks',
    title: 'Signal Intel System',
    url: 'https://github.com/praneeth14G/AI-Wireless-Signal-Intelligence-System',
    buttonLabel: 'GitHub',
    descriptions: [
      { id: 'p1_1', text: 'Engineered a real-time wireless signal intelligence system using Python raw sockets and BLE scanning, monitoring 150+ active WiFi/Bluetooth sessions per hour through protocol-level traffic analysis.' },
      { id: 'p1_2', text: 'Composed a 1D CNN in TensorFlow using the RadioML 2018.01A dataset to classify 24 wireless modulation types, achieving 86% training accuracy.' },
      { id: 'p1_3', text: 'Integrated Isolation Forest-based anomaly detection, reducing false-positive alerts by 22% through session tracking, protocol analysis, and real-time behavioral monitoring.' }
    ]
  },
  {
    id: '02',
    category: 'Deep Learning / CV',
    title: 'Deepfake Detection',
    descriptions: [
      { id: 'p2_1', text: 'Built a multi-stage image forgery and deepfake detection system using computer vision, frequency-domain analysis, and deep learning.' },
      { id: 'p2_2', text: 'Implemented noise residual, edge artifact, and FFT-based techniques to identify and localize image manipulations.' },
      { id: 'p2_3', text: 'Fine-tuned EfficientNet-B0 on the CASIA 2.0 dataset, achieving an AUC-ROC of 0.92 for forgery classification.' }
    ]
  },
];

interface ProjectCardProps {
  index: number;
  project: Project;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this card wrapper to calculate scale
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[80vh] md:h-[75vh] min-h-[460px] flex items-start justify-center w-full sticky top-0"
      style={{
        paddingTop: `${index * 28}px`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="rounded-3xl border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-6 md:p-8 w-full flex flex-col justify-between h-[90%] shadow-2xl relative"
      >
        {/* Top Row: Info and Live link */}
        <div className="flex flex-row justify-between items-center w-full border-b border-[#D7E2EA]/10 pb-4 md:pb-5">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <div 
              className="font-black text-[#D7E2EA] leading-none shrink-0"
              style={{ fontSize: 'clamp(2.4rem, 8vw, 90px)' }}
            >
              {project.id}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium mb-1.5">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold uppercase text-[#D7E2EA] leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {project.url && (
            <LiveProjectButton url={project.url} label={project.buttonLabel} />
          )}
        </div>

        {/* Bottom Row: Interactive Folder Gallery (containing resume bullet descriptions) */}
        <div className="w-full flex-grow flex justify-center items-center overflow-visible">
          <InteractiveFolderGallery
            photos={project.descriptions}
            folderName={`${project.title.toLowerCase().replace(/\s+/g, '_')}.gallery`}
            dragHintText="Drag any card down to close folder"
            className="py-1 sm:py-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 pb-32 z-20 relative overflow-visible scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-20 md:mb-28">
            Projects
          </h2>
        </FadeIn>

        {/* Stacking Cards Column */}
        <div className="flex flex-col gap-0 relative">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              project={project}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
