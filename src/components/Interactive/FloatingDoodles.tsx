import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

export const FloatingDoodles: React.FC = () => {
  const doodles = [
    { type: 'heart', top: '15%', left: '8%', delay: 0 },
    { type: 'star', top: '25%', right: '10%', delay: 1 },
    { type: 'sparkle', top: '45%', left: '5%', delay: 2 },
    { type: 'heart', top: '65%', right: '7%', delay: 1.5 },
    { type: 'star', top: '80%', left: '12%', delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {doodles.map((item, idx) => (
        <motion.div
          key={idx}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
          className="absolute text-rose-300/40 hover:text-rose-400/80 transition-colors"
        >
          {item.type === 'heart' ? (
            <Heart className="w-5 h-5 fill-current" />
          ) : item.type === 'star' ? (
            <Star className="w-5 h-5 fill-current" />
          ) : (
            <Sparkles className="w-5 h-5" />
          )}
        </motion.div>
      ))}
    </div>
  );
};
