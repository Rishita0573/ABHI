import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { STORY_CONFIG } from '../../data/storyConfig';

interface FinalSequenceChapterProps {
  onCompleteSequence: () => void;
}

export const FinalSequenceChapter: React.FC<FinalSequenceChapterProps> = ({ onCompleteSequence }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { statements, breakLine, teaserLine } = STORY_CONFIG.finalSequence;

  const totalSteps = statements.length + 2;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onCompleteSequence();
    }
  };

  return (
    <section className="relative min-h-[85vh] py-24 px-4 flex flex-col items-center justify-center text-center paper-dusty-rose border-b border-[#e4c6cc] overflow-hidden">
      {/* Soft Rose Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-200/50 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-3xl w-full relative z-10 flex flex-col items-center justify-center min-h-[380px]">
        <AnimatePresence mode="wait">
          {currentStep < statements.length && (
            <motion.div
              key={`stmt-${currentStep}`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="p-8 sm:p-12 rounded-3xl bg-[#fdfbf7] border-2 border-[#e8dfd1] polaroid-shadow max-w-xl w-full space-y-4 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape-pink rotate-1" />

              <div className="w-12 h-12 mx-auto rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                <Heart className="w-6 h-6 fill-current animate-pulse" />
              </div>

              <h2 className="font-handwriting text-4xl sm:text-6xl font-bold text-rose-950 leading-tight">
                "{statements[currentStep]}"
              </h2>

              <p className="text-xs font-typewriter text-stone-400 uppercase tracking-widest pt-2">
                Memory Page {currentStep + 1} of {statements.length}
              </p>
            </motion.div>
          )}

          {currentStep === statements.length && (
            <motion.div
              key="breakline"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#fdfbf7] border-2 border-[#e8dfd1] polaroid-shadow max-w-xl w-full space-y-4 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape-yellow -rotate-1" />
              <h3 className="font-handwriting text-3xl sm:text-5xl font-bold text-amber-900">
                "{breakLine}"
              </h3>
              <p className="text-xs text-stone-500 font-body">
                (Before we start crying, let's keep going! 😭)
              </p>
            </motion.div>
          )}

          {currentStep === statements.length + 1 && (
            <motion.div
              key="teaserline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#fdfbf7] border-2 border-[#e8dfd1] polaroid-shadow max-w-xl w-full space-y-4 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape-sage rotate-1" />
              <h3 className="font-handwriting text-4xl sm:text-5xl font-bold text-rose-900">
                "{teaserLine}"
              </h3>
              <p className="text-xs text-stone-500 font-typewriter uppercase tracking-wider">
                🎁 A special envelope awaits...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step Progression Button */}
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-800 hover:bg-rose-900 text-white font-medium text-sm border border-rose-900 transition-all cursor-pointer shadow-lg"
        >
          <span>
            {currentStep < totalSteps - 1 ? 'Continue →' : 'Open Birthday Envelope 🎁'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
};
