import React from 'react';
import { motion } from 'framer-motion';

interface DuduBubuGifProps {
  src: string;
  alt: string;
  size?: number;
  sizeClassName?: string;
  rotateDeg?: number;
  caption?: string;
  className?: string;
  animation?: 'float' | 'bounce' | 'wiggle' | 'pulse';
}

export const DuduBubuGif: React.FC<DuduBubuGifProps> = ({
  src,
  alt,
  size,
  sizeClassName = 'w-36 sm:w-48 md:w-56',
  rotateDeg = 0,
  caption,
  className = '',
  animation = 'float',
}) => {
  const basePath = src.replace(/\.gif(\.mp4)?$/, '');
  const mp4Path = `${basePath}.gif.mp4`;
  const gifPath = `${basePath}.gif`;

  const animVariants = {
    float: { y: [0, -6, 0], rotate: [rotateDeg - 2, rotateDeg + 2, rotateDeg - 2] },
    bounce: { y: [0, -10, 0] },
    wiggle: { rotate: [rotateDeg - 3, rotateDeg + 3, rotateDeg - 3] },
    pulse: { scale: [1, 1.04, 1] },
  };

  const styleObj: React.CSSProperties = size ? { width: `${size}px` } : {};

  return (
    <motion.div
      animate={animVariants[animation]}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={styleObj}
      className={`inline-flex flex-col items-center select-none pointer-events-auto ${size ? '' : sizeClassName} ${className}`}
    >
      <div className="relative p-1.5 sm:p-2 rounded-3xl bg-[#fdfbf7]/95 border-2 border-amber-300/60 shadow-lg backdrop-blur-xs w-full">
        <video
          src={mp4Path}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-2xl object-cover"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const img = document.createElement('img');
            img.src = gifPath;
            img.alt = alt;
            img.className = 'w-full h-auto rounded-2xl object-cover';
            target.parentElement?.appendChild(img);
          }}
        />
      </div>

      {caption && (
        <span className="font-handwriting text-sm sm:text-base text-amber-950 font-bold mt-1.5 text-center leading-tight px-2 py-0.5 bg-amber-100/90 rounded-lg border border-amber-300/70 shadow-xs max-w-full">
          ✍️ {caption}
        </span>
      )}
    </motion.div>
  );
};
