import React, { useState } from 'react';
import { Clock, Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_CONFIG } from '../../data/storyConfig';

export const TwoSecondRuleCard: React.FC = () => {
  const [step, setStep] = useState<'idle' | 'counting' | 'reaction' | 'done'>('idle');
  const [countdown, setCountdown] = useState<number>(3);

  const startTest = () => {
    setStep('counting');
    setCountdown(3);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setStep('reaction');
          setTimeout(() => {
            setStep('done');
          }, 1800);
          return 0;
        }
        return prev - 1;
      });
    }, 900);
  };

  const resetTest = () => {
    setStep('idle');
    setCountdown(3);
  };

  const { twoSecondRule } = STORY_CONFIG;

  return (
    <div className="w-full max-w-md mx-auto my-8 p-6 sm:p-8 rounded-3xl bg-[#fffde7] border-2 border-[#f3ea9e] polaroid-shadow relative overflow-hidden text-center transform -rotate-1">
      {/* Washi tape header */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape-yellow rotate-1" />

      <div className="flex items-center justify-center gap-2 mb-3 text-amber-800">
        <Clock className="w-5 h-5 animate-pulse text-amber-700" />
        <span className="text-xs font-typewriter uppercase tracking-wider text-amber-900">The 2-Second Rule</span>
      </div>

      <h4 className="font-serif-editorial text-xl sm:text-2xl font-bold text-stone-900 mb-3">
        {twoSecondRule.question}
      </h4>

      <AnimatePresence mode="wait">
        {step === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-xs text-stone-600 font-body max-w-xs">
              We spend the whole day together in college, but what happens when we go home?
            </p>
            <button
              onClick={startTest}
              className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-200 hover:bg-amber-300 text-amber-950 font-bold text-sm border border-amber-400 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            >
              <span>{twoSecondRule.buttonText}</span>
              <ArrowRight className="w-4 h-4 text-amber-900" />
            </button>
          </motion.div>
        )}

        {step === 'counting' && (
          <motion.div
            key="counting"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-4"
          >
            <div className="text-6xl font-extrabold font-typewriter text-amber-900 animate-bounce">
              {countdown}
            </div>
            <p className="text-xs text-stone-500 font-typewriter mt-2">Calculating departure time...</p>
          </motion.div>
        )}

        {step === 'reaction' && (
          <motion.div
            key="reaction"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-3 text-rose-800 font-handwriting text-2xl font-bold"
          >
            "{twoSecondRule.reaction}"
          </motion.div>
        )}

        {step === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-3 flex flex-col items-center gap-2"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-600 mb-1">
              <Heart className="w-6 h-6 fill-current animate-ping" />
            </div>
            <p className="text-lg font-bold text-stone-900 font-serif-editorial">
              {twoSecondRule.finalAnswer}
            </p>
            <p className="text-base font-handwriting text-rose-800 mt-1">
              ✍️ (Honestly ridiculous, but very us! 🙈)
            </p>

            <button
              onClick={resetTest}
              className="mt-2 text-xs text-amber-900/60 hover:text-amber-900 underline cursor-pointer font-typewriter"
            >
              Test again ⏱️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
