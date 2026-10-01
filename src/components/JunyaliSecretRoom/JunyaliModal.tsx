import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Star } from 'lucide-react';
import { DuduBubuGif } from '../Interactive/DuduBubuGif';
import { STORY_CONFIG } from '../../data/storyConfig';

interface JunyaliModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JunyaliModal: React.FC<JunyaliModalProps> = ({ isOpen, onClose }) => {
  const [activeStar, setActiveStar] = useState<number | null>(null);
  const { junyaliSecret } = STORY_CONFIG;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07060c]/95 backdrop-blur-xl overflow-y-auto select-none"
      >
        {/* Starfield ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-transparent to-black pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close secret room"
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 transition-all cursor-pointer z-50"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-w-2xl w-full text-center relative z-10 py-12 px-6">
          {/* Header Toast */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-typewriter mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            <span>{junyaliSecret.unlockToast}</span>
          </motion.div>

          {/* Dudu/Bubu Moon & Stars GIF Sticker Motif (Substantially Larger) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="relative flex flex-col items-center mb-6"
          >
            <DuduBubuGif
              src="/assets/gifs/moon-stars.gif"
              alt="Moon and Stars"
              sizeClassName="w-40 sm:w-52 md:w-64"
              rotateDeg={0}
              caption="to the moon & stars 🌙"
              animation="pulse"
              className="drop-shadow-[0_0_30px_rgba(251,191,36,0.6)]"
            />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl sm:text-5xl font-bold font-handwriting text-amber-100 mb-6 leading-tight">
            Junyali 🌙
          </h2>

          {/* Central Emotional Line */}
          <p className="text-lg sm:text-2xl font-handwriting text-amber-200/90 leading-relaxed max-w-lg mx-auto">
            "{junyaliSecret.mainQuote}"
          </p>

          {/* Interactive Constellation Star Notes */}
          <div className="mt-12 pt-8 border-t border-amber-500/20">
            <p className="text-xs font-typewriter text-amber-300/60 uppercase tracking-widest mb-6">
              Tap a star to reveal a secret note:
            </p>

            <div className="flex items-center justify-center gap-6 sm:gap-10">
              {junyaliSecret.notes.map((_, idx) => (
                <button
                  key={idx}
                  title={`Secret note #${idx + 1}`}
                  onClick={() => setActiveStar(activeStar === idx ? null : idx)}
                  className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${
                    activeStar === idx
                      ? 'bg-amber-400 text-black scale-125 shadow-[0_0_20px_rgba(251,191,36,0.8)]'
                      : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/40 hover:scale-110'
                  }`}
                >
                  <Star className="w-5 h-5 fill-current" />
                </button>
              ))}
            </div>

            {/* Note Display Area */}
            <div className="min-h-[80px] mt-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeStar !== null && (
                  <motion.div
                    key={activeStar}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-200 font-handwriting text-xl sm:text-2xl"
                  >
                    "{junyaliSecret.notes[activeStar]}"
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
