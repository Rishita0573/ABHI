import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, Sparkles, KeyRound, X } from 'lucide-react';
import { STORY_CONFIG } from '../../data/storyConfig';

interface DateGateEnvelopeProps {
  onLetterOpened: () => void;
  isDevOverride: boolean;
  onToggleDevOverride: () => void;
}

export const DateGateEnvelope: React.FC<DateGateEnvelopeProps> = ({
  onLetterOpened,
  isDevOverride,
  onToggleDevOverride
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; mins: number; secs: number }>({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  });
  const [isUnlockedDate, setIsUnlockedDate] = useState(false);

  useEffect(() => {
    const checkDate = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let targetDate = new Date(currentYear, 9, 2, 0, 0, 0); // October 2

      if (now > targetDate && (now.getMonth() > 9 || (now.getMonth() === 9 && now.getDate() > 2))) {
        targetDate = new Date(currentYear + 1, 9, 2, 0, 0, 0);
      }

      const diff = targetDate.getTime() - now.getTime();
      const isTodayOct2 = (now.getMonth() === 9 && now.getDate() === 2);
      const isPastOct2 = now >= targetDate || isTodayOct2;

      setIsUnlockedDate(isPastOct2 || isDevOverride);

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, mins, secs });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      }
    };

    checkDate();
    const interval = setInterval(checkDate, 1000);
    return () => clearInterval(interval);
  }, [isDevOverride]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
        e.preventDefault();
        onToggleDevOverride();
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleDevOverride, isOpen]);

  const handleOpenEnvelope = () => {
    if (!isUnlockedDate) return;
    setIsOpen(true);
    onLetterOpened();
  };

  const handleCloseLetter = () => {
    setIsOpen(false);
  };

  const { birthdayLetter } = STORY_CONFIG;

  return (
    <section id="birthday-letter-section" className="relative py-28 px-4 md:px-8 paper-cream border-b border-[#e5dcd0]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-typewriter mb-3 border border-rose-200 shadow-sm">
          <Mail className="w-3.5 h-3.5 text-rose-600" />
          <span>October 2 • Birthday Seal</span>
        </div>

        <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-stone-900">
          The Birthday Envelope
        </h2>
        <p className="mt-2 text-rose-800 font-handwriting text-2xl">
          Sealed with a golden wax mark for the birthday boy.
        </p>

        {/* Tactile Wax Envelope Card */}
        <div className="mt-12 flex justify-center">
          <motion.div
            whileHover={isUnlockedDate ? { scale: 1.02 } : {}}
            className="w-full max-w-lg p-8 sm:p-12 rounded-3xl bg-[#fdfbf7] border-2 border-[#e8dfd1] polaroid-shadow relative overflow-hidden flex flex-col items-center justify-center text-center"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 washi-tape-pink rotate-1" />

            {/* Wax Seal Graphic */}
            <div className="relative mb-6">
              <div
                onClick={handleOpenEnvelope}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl cursor-pointer ${
                  isUnlockedDate
                    ? 'bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 text-amber-50 ring-4 ring-amber-300/60 hover:scale-110'
                    : 'bg-stone-300 text-stone-500 cursor-not-allowed'
                }`}
              >
                {isUnlockedDate ? (
                  <Sparkles className="w-9 h-9" />
                ) : (
                  <Lock className="w-8 h-8" />
                )}
              </div>
            </div>

            {/* Status & Countdown */}
            {!isUnlockedDate ? (
              <div className="space-y-4">
                <p className="text-sm font-typewriter text-stone-600">
                  Unlocks on October 2 🎁
                </p>
                <div className="flex items-center justify-center gap-3 text-amber-900 font-typewriter text-lg bg-[#fffde7] px-6 py-3 rounded-2xl border border-amber-300">
                  <div>
                    <span className="text-2xl font-bold">{timeLeft.days}</span>
                    <span className="text-[10px] block text-stone-500">DAYS</span>
                  </div>
                  <span>:</span>
                  <div>
                    <span className="text-2xl font-bold">{timeLeft.hours}</span>
                    <span className="text-[10px] block text-stone-500">HRS</span>
                  </div>
                  <span>:</span>
                  <div>
                    <span className="text-2xl font-bold">{timeLeft.mins}</span>
                    <span className="text-[10px] block text-stone-500">MINS</span>
                  </div>
                  <span>:</span>
                  <div>
                    <span className="text-2xl font-bold">{timeLeft.secs}</span>
                    <span className="text-[10px] block text-stone-500">SECS</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xl font-handwriting text-rose-900 font-bold">
                  The Wax Seal is Ready to Break! ✨
                </p>
                <button
                  onClick={handleOpenEnvelope}
                  className="px-6 py-3 rounded-full bg-rose-800 hover:bg-rose-900 text-white font-bold text-sm shadow-xl transition-all cursor-pointer transform hover:scale-105"
                >
                  Break Seal & Read Letter 💌
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Development Mode Test Control (Only visible in DEV or when isDevOverride is active) */}
        {(import.meta.env.DEV || isDevOverride) && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                if (!isUnlockedDate) onToggleDevOverride();
                setIsOpen(true);
                onLetterOpened();
              }}
              className="px-4 py-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 font-typewriter text-xs font-bold cursor-pointer shadow-xs inline-flex items-center gap-1.5 transition-all"
            >
              <KeyRound className="w-3.5 h-3.5 text-amber-800" />
              <span>[Dev Test] Break Seal & Open Letter 💌</span>
            </button>
          </div>
        )}

        {/* Hidden Developer Mode Indicator */}
        {isDevOverride && (
          <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-typewriter text-amber-900 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300">
            <KeyRound className="w-3 h-3" />
            <span>Dev Date Override Active (Ctrl+Shift+D to toggle)</span>
          </div>
        )}

        {/* Immutable Letter Display Modal with Tactile Resealing Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              onClick={handleCloseLetter}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.85, y: 80, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.5, y: 160, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl my-8 p-6 sm:p-12 rounded-3xl bg-[#faf7f2] text-[#2c2825] shadow-2xl relative border-4 border-[#e5dcd0] text-left overflow-y-auto max-h-[85vh] paper-warm cursor-default"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 washi-tape-pink -rotate-1 z-20" />

                <button
                  onClick={handleCloseLetter}
                  aria-label="Close birthday letter and reseal envelope"
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-stone-200/90 hover:bg-stone-300 text-stone-800 font-bold transition-all cursor-pointer z-30 flex items-center gap-1 text-xs font-typewriter shadow-sm"
                >
                  <X className="w-5 h-5 text-stone-800" />
                </button>

                {/* Immutable User Letter Text */}
                <div className="prose max-w-none font-handwriting text-2xl sm:text-3xl text-stone-900 leading-relaxed whitespace-pre-line pt-6">
                  {birthdayLetter.exactText}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
