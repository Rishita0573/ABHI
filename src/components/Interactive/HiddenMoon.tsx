import React, { useState, useEffect } from 'react';
import { Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HiddenMoonProps {
  id: string;
  onDiscover: (id: string) => void;
  className?: string;
}

export const HiddenMoon: React.FC<HiddenMoonProps> = ({ id, onDiscover, className = '' }) => {
  const [isFound, setIsFound] = useState(false);
  const [showSpark, setShowSpark] = useState(false);

  // Normalize id to moon-1, moon-2, moon-3
  const moonKey = id.includes('-') ? id : `moon-${id.replace('moon', '')}`;

  const checkState = () => {
    const saved =
      localStorage.getItem(`junyali_moon_${moonKey}`) === 'true' ||
      localStorage.getItem(`junyali_moon_${moonKey.replace('-', '')}`) === 'true';
    setIsFound(saved);
  };

  useEffect(() => {
    checkState();

    const handleReset = () => {
      setIsFound(false);
      setShowSpark(false);
    };

    window.addEventListener('reset-moon-hunt', handleReset);
    return () => window.removeEventListener('reset-moon-hunt', handleReset);
  }, [moonKey]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFound) return;

    setIsFound(true);
    setShowSpark(true);
    localStorage.setItem(`junyali_moon_${moonKey}`, 'true');
    onDiscover(moonKey);

    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.55);
    } catch (err) {}

    setTimeout(() => setShowSpark(false), 2400);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Gentle Floating & Bobbing Container */}
      <motion.button
        onClick={handleClick}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.25, rotate: 5 }}
        whileTap={{ scale: 1.4 }}
        title={isFound ? "Collected secret moon 🌙" : undefined}
        className={`p-2 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
          isFound
            ? 'text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.85)] opacity-100 bg-amber-400/15'
            : 'text-amber-700/70 hover:text-amber-500 opacity-75 hover:opacity-100 bg-amber-100/50 hover:bg-amber-100/90 border border-amber-300/40 shadow-xs'
        }`}
      >
        <Moon
          className={`w-5 h-5 sm:w-6 sm:h-6 transform -rotate-12 transition-all ${
            isFound ? 'fill-amber-300 text-amber-400' : 'fill-amber-400/20 text-amber-700/80'
          }`}
        />
      </motion.button>

      {/* Soft Sparkle Burst on Discovery */}
      <AnimatePresence>
        {showSpark && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.6 }}
            animate={{ opacity: 1, y: -24, scale: 1 }}
            exit={{ opacity: 0, y: -34 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-500 text-stone-950 font-bold text-[11px] px-2.5 py-1 rounded-full shadow-xl flex items-center gap-1 z-40 pointer-events-none font-typewriter border border-amber-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-100" />
            <span>Found a secret moon 🌙</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
