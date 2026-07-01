import { useState } from "react";
import { motion } from "framer-motion";

export interface GalleryPhoto {
  id: string | number;
  image?: string;
  text?: string;
}

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  dragHintText?: string;
  className?: string;
}

export function InteractiveFolderGallery({
  photos = [],
  folderName = "Photography.gallery",
  dragHintText = "Drag any card down to close",
  className
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);

  return (
    <div className={`w-full py-16 relative ${className || ""}`}>
      <div className="relative w-full min-h-[380px] flex flex-col items-center justify-center">

        <div className="relative w-[320px] sm:w-[400px] h-[340px] sm:h-[400px] flex justify-center pointer-events-none z-0">

          {/* Folder Back with popped purple/magenta gradient */}
          <motion.div 
            className="absolute bottom-6 w-72 sm:w-80 h-48 sm:h-56 drop-shadow-2xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute top-0 left-0 w-28 sm:w-32 h-8 sm:h-10 bg-gradient-to-t from-[#20003b] to-[#2d004d] rounded-t-xl border-t border-l border-r border-[#B600A8]/30" />
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-gradient-to-b from-[#2d004d] to-[#0b0014] rounded-b-xl rounded-tr-xl border border-[#B600A8]/30 shadow-[inset_0_0_40px_rgba(182,0,168,0.3)]" />
            <div className="absolute top-10 left-2 right-2 bottom-2 bg-black rounded-lg shadow-inner pointer-events-none" />
          </motion.div>

          {/* Fanning Cards Stack */}
          <div className="absolute bottom-10 z-10 flex justify-center">
            {photos.map((photo, i) => {
              const offset = i - Math.floor(photos.length / 2);

              const stackY = hoverFolder ? offset * -8 - 25 : offset * -4;
              const stackX = hoverFolder ? offset * 25 : offset * 3;
              const stackRotate = hoverFolder ? offset * 6 : offset * 2;
              const stackScale = 1 - Math.abs(offset) * 0.04;

              const openY = -100;
              const openX = offset * 140; // wider spread for text cards
              const openRotate = offset * 4; // slight rotation for natural look
              const openScale = 1.05;

              return (
                <motion.div
                  key={photo.id}
                  drag={isFolderOpen}
                  dragSnapToOrigin={true}
                  onDragEnd={(_, info) => {
                    if (info.offset.y > 80 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  className={`absolute bottom-0 w-44 sm:w-56 h-60 sm:h-72 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.6)] overflow-hidden border border-[#D7E2EA]/20 origin-bottom ${isFolderOpen ? "cursor-grab active:cursor-grabbing pointer-events-auto" : "pointer-events-none"}`}
                  animate={!isFolderOpen ? {
                    y: stackY,
                    x: stackX,
                    rotate: stackRotate,
                    scale: stackScale,
                    zIndex: i + 10
                  } : {
                    y: openY,
                    x: openX,
                    rotate: openRotate,
                    scale: openScale,
                    zIndex: 50
                  }}
                  whileHover={isFolderOpen ? { scale: openScale + 0.05, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: openScale + 0.1, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  {photo.text ? (
                    // Display text card for resume descriptions
                    <div className="w-full h-full bg-[#111111] bg-gradient-to-b from-[#181818] to-[#0c0c0c] p-5 flex flex-col justify-center items-center text-center text-[#D7E2EA] border border-[#D7E2EA]/10 relative select-none">
                      <div className="absolute top-3 left-3 text-[9px] uppercase tracking-widest text-[#D7E2EA]/30 font-mono">
                        Point 0{i + 1}
                      </div>
                      <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-[#D7E2EA]/90 select-none">
                        {photo.text}
                      </p>
                    </div>
                  ) : (
                    // Fallback to image if no text is provided
                    <img src={photo.image} alt="Gallery item" className="w-full h-full object-cover pointer-events-none" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Folder Front with popped purple/magenta gradient */}
          <motion.div 
            className="absolute bottom-0 w-[280px] sm:w-[340px] h-36 sm:h-44 drop-shadow-[0_-20px_40px_rgba(0,0,0,0.8)] cursor-pointer z-20 pointer-events-auto"
            style={{ transformOrigin: "bottom" }}
            animate={{ 
              opacity: isFolderOpen ? 0 : 1, 
              rotateX: hoverFolder ? -25 : 0, 
              y: hoverFolder ? 10 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto" 
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#3a0066] to-[#180033] rounded-2xl border border-[#B600A8]/40 shadow-[inset_0_2px_12px_rgba(182,0,168,0.4)] relative overflow-hidden flex items-end justify-center pb-6 sm:pb-8">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B600A8]/60 to-transparent" />

              <div className="px-4 sm:px-5 py-2 bg-black rounded-lg border border-black/85 shadow-inner flex items-center justify-center backdrop-blur-md">
                <span className="text-[#D7E2EA] text-xs sm:text-sm font-medium tracking-wide">
                  {folderName}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 30 }}
          className="absolute bottom-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-black/50 dark:text-white/50 text-[10px] sm:text-xs font-medium uppercase tracking-widest pointer-events-none"
        >
          {dragHintText}
        </motion.div>

      </div>
    </div>
  );
}

export default InteractiveFolderGallery;
