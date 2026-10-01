import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

interface IntroSequenceProps {
  onStart: () => void;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onStart }) => {
  const [hasTouched, setHasTouched] = useState(false);

  const handleTouch = () => {
    if (!hasTouched) {
      setHasTouched(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#faf7f2] text-[#2c2825] overflow-hidden paper-cream select-none"
    >
      <div className="max-w-md w-full text-center relative z-20 space-y-6">
        <AnimatePresence mode="wait">
          {!hasTouched ? (
            /* Initial State: Touch Anywhere Prompt */
            <motion.div
              key="touch-prompt"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={handleTouch}
              className="space-y-4 cursor-pointer py-16"
            >
              <p className="font-handwriting text-3xl sm:text-4xl text-rose-800">
                Touch anywhere
              </p>
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs font-typewriter text-stone-400 tracking-wider uppercase"
              >
                (tap anywhere to begin ✨)
              </motion.p>
            </motion.div>
          ) : (
            /* Main Experience: Heart Animation + "hand drawn with love" + Subtle Decorative Flower Doodles */
            <motion.div
              key="intro-main"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 relative py-4"
            >
              {/* Subtle Decorative Doodled Flower (as a quiet paper detail) */}
              <div className="absolute -top-6 -right-2 opacity-70 pointer-events-none">
                <svg width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-emerald-700/60">
                  <path d="M 50 90 Q 48 65 50 40" stroke="#52796f" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 49 70 C 30 65 25 50 48 58 Z" stroke="#52796f" strokeWidth="3" fill="none" />
                  <path d="M 51 55 C 70 50 75 35 50 43 Z" stroke="#52796f" strokeWidth="3" fill="none" />
                  <path d="M 50 40 C 40 25 25 25 35 40 C 20 40 20 55 38 55 C 38 70 53 70 53 55 C 68 55 68 40 53 40 C 60 25 45 25 50 40 Z" stroke="#e63946" strokeWidth="3.5" fill="none" />
                  <circle cx="50" cy="45" r="5" stroke="#e9c46a" strokeWidth="3" fill="none" />
                </svg>
              </div>

              {/* Original Heart Animation */}
              <motion.div
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shadow-sm">
                  <Heart className="w-9 h-9 fill-current" />
                </div>
              </motion.div>

              {/* Original Handwritten Text */}
              <p className="font-handwriting text-2xl text-stone-700">
                hand drawn with love
              </p>

              {/* Title & Transition */}
              <div className="pt-4 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-typewriter uppercase tracking-wider">
                  Digital Scrapbook
                </span>

                <h1 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-stone-900 leading-tight">
                  Somehow, We Became Us
                </h1>

                <p className="font-handwriting text-xl text-stone-600">
                  A digital love story by your Betu 🫶
                </p>

                <button
                  onClick={onStart}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-800 hover:bg-rose-900 text-white font-medium text-sm shadow-xl transition-all cursor-pointer transform hover:scale-105 mt-2"
                >
                  <span>Start from the beginning →</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
