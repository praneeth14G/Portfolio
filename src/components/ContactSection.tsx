import React from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-10 py-24 w-full flex flex-col items-center z-20 relative border-t border-[#D7E2EA]/10 scroll-mt-24"
    >
      <div className="max-w-5xl w-full flex flex-col items-center gap-12 sm:gap-16">
        {/* Title */}
        <FadeIn delay={0} y={30} className="text-center">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,10vw,120px)] leading-none tracking-tight">
            Get in touch
          </h2>
          <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm mt-4 font-light">
            Let&apos;s build something incredible together
          </p>
        </FadeIn>

        {/* Contact details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Email Info */}
          <FadeIn delay={0.15} y={20} className="w-full">
            <a
              href="mailto:praneeth.g147@gmail.com"
              className="group flex flex-row items-center justify-between p-6 sm:p-8 rounded-[30px] border border-[#D7E2EA]/10 bg-[#0C0C0C]/50 hover:border-[#D7E2EA]/30 transition-all duration-300 hover:bg-[#D7E2EA]/5"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-full bg-[#D7E2EA]/5 text-[#D7E2EA]">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40">Email me</span>
                  <span className="text-sm sm:text-base md:text-lg font-medium select-all">praneeth.g147@gmail.com</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>
          </FadeIn>

          {/* Phone Info */}
          <FadeIn delay={0.2} y={20} className="w-full">
            <a
              href="tel:+919033960097"
              className="group flex flex-row items-center justify-between p-6 sm:p-8 rounded-[30px] border border-[#D7E2EA]/10 bg-[#0C0C0C]/50 hover:border-[#D7E2EA]/30 transition-all duration-300 hover:bg-[#D7E2EA]/5"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-full bg-[#D7E2EA]/5 text-[#D7E2EA]">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40">Call me</span>
                  <span className="text-sm sm:text-base md:text-lg font-medium select-all">+91 90339-60097</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>
          </FadeIn>
        </div>

        {/* Social Links */}
        <div className="flex flex-row gap-6 sm:gap-8 justify-center mt-4">
          {/* GitHub */}
          <FadeIn delay={0.3} y={20}>
            <a
              href="https://github.com/praneeth14G"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#D7E2EA]/15 bg-transparent hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300 font-medium uppercase tracking-wider text-xs sm:text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </FadeIn>

          {/* LinkedIn */}
          <FadeIn delay={0.35} y={20}>
            <a
              href="https://www.linkedin.com/in/praneeth-gadipudi-694aa6288/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#D7E2EA]/15 bg-transparent hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300 font-medium uppercase tracking-wider text-xs sm:text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </FadeIn>
        </div>

        {/* Footer legal text */}
        <div className="text-center text-[#D7E2EA]/30 text-xs sm:text-sm mt-12 w-full border-t border-[#D7E2EA]/5 pt-8 font-light">
          &copy; {new Date().getFullYear()} Gadipudi Praneeth. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
