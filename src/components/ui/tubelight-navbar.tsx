import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  onNavigate?: (url: string) => void;
}

export function NavBar({ items, className, onNavigate }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  return (
    <div
      className={cn(
        "fixed bottom-6 md:bottom-auto md:top-0 left-1/2 -translate-x-1/2 z-50 sm:pt-6",
        className
      )}
    >
      <div className="flex items-center gap-2 sm:gap-4 bg-[#0C0C0C]/85 border border-[#D7E2EA]/15 backdrop-blur-lg py-2 sm:py-2.5 px-3 rounded-full shadow-2xl">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.name);
                if (onNavigate) {
                  onNavigate(item.url);
                } else {
                  // Fallback smooth scroll
                  const targetId = item.url.replace("#", "");
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm md:text-base font-semibold px-4 py-2 sm:px-6 md:px-7 rounded-full transition-colors duration-300",
                "text-[#D7E2EA]/80 hover:text-white",
                isActive && "bg-[#D7E2EA]/10 text-white"
              )}
            >
              <span className="hidden sm:inline">{item.name}</span>
              <span className="sm:hidden flex items-center justify-center">
                <Icon size={20} strokeWidth={2.5} />
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-purple-500/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-500 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-purple-500/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-purple-500/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-purple-500/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
