import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    id: '01',
    title: 'Frontend Development',
    description: 'Building responsive, modular React applications using modern design systems, clean code architectures, and optimized performance.',
  },
  {
    id: '02',
    title: 'AI & Deep Learning',
    description: 'Developing and optimizing machine learning models, neural networks, and computer vision systems for advanced data analysis and pattern recognition.',
  },
  {
    id: '03',
    title: 'UI/UX Design',
    description: 'Designing intuitive, high-fidelity prototypes, wireframes, and layouts in Figma that focus on user experience and brand identity.',
  },
  {
    id: '04',
    title: 'Data Analytics',
    description: 'Preprocessing and analyzing complex multivariate datasets, utilizing feature selection and rigorous metrics to extract actionable insights.',
  },
  {
    id: '05',
    title: 'Software Engineering',
    description: 'Engineering robust, scalable software solutions with a solid foundation in programming languages like C++, Python, TypeScript, and Java.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full flex flex-col items-center z-20 relative"
    >
      <div className="max-w-5xl w-full">
        {/* Title */}
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {servicesData.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={30}
              className="border-b border-[#0C0C0C]/15 w-full overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.02, x: 12 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="py-8 sm:py-10 md:py-12 flex flex-row items-center gap-6 sm:gap-10 md:gap-16 w-full cursor-pointer group"
              >
                {/* Number on left */}
                <div 
                  className="font-black text-[#0C0C0C]/25 group-hover:text-purple-600 transition-colors duration-300 leading-none shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </div>

                {/* Title & Description stacked on right */}
                <div className="flex flex-col gap-2 md:gap-3">
                  <h3 
                    className="font-medium uppercase text-[#0C0C0C] group-hover:text-purple-700 transition-colors duration-300"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl group-hover:text-[#0C0C0C]/85 transition-colors duration-300"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
