import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DuduBubuGif } from '../Interactive/DuduBubuGif';

export const VirtualCake: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState<boolean[]>([true, true, true]);
  const [isCelebrated, setIsCelebrated] = useState(false);

  const extinguishCandle = (index: number) => {
    const updated = [...candlesLit];
    updated[index] = false;
    setCandlesLit(updated);

    if (updated.every((lit) => !lit) && !isCelebrated) {
      setIsCelebrated(true);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#fbbf24', '#34d399', '#a78bfa']
      });

      setTimeout(() => {
        confetti({
          particleCount: 70,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 70,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 300);
    }
  };

  const resetCandles = () => {
    setCandlesLit([true, true, true]);
    setIsCelebrated(false);
  };

  return (
    <section className="relative py-28 px-4 md:px-8 paper-cream border-b border-[#e5dcd0] text-center">
      <div className="max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-typewriter mb-4 border border-rose-200 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>One Last Surprise</span>
        </div>

        <h3 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-stone-900">
          Make a Wish, Abhii 🎂
        </h3>
        <p className="mt-2 text-sm text-stone-600 font-body">
          (Tap each candle to blow it out!)
        </p>

        {/* Cake Container */}
        <div className="mt-12 relative flex flex-col items-center justify-center">
          {/* Dudu/Bubu Birthday GIF Sticker (Substantially Larger) */}
          <div className="mb-4">
            <DuduBubuGif
              src="/assets/gifs/birthday.gif"
              alt="Happy Birthday"
              sizeClassName="w-36 sm:w-48 md:w-60"
              rotateDeg={5}
              caption="happy birthday! 🎉"
              animation="bounce"
            />
          </div>

          {/* Candle Flames Row */}
          <div className="flex justify-center gap-8 mb-2 z-20">
            {candlesLit.map((isLit, idx) => (
              <motion.button
                key={idx}
                onClick={() => extinguishCandle(idx)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="relative cursor-pointer focus:outline-none"
                title={isLit ? "Click to blow out!" : "Blown out!"}
              >
                {/* Candle Stick */}
                <div className="w-3.5 h-12 rounded-t-sm bg-gradient-to-b from-amber-200 to-amber-400 shadow-sm mx-auto border border-amber-500/40" />

                {/* Flame */}
                {isLit ? (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 text-amber-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]"
                  >
                    <Flame className="w-6 h-6 fill-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: -15 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-gray-500 text-xs font-typewriter"
                  >
                    💨
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Birthday Cake Body */}
          <div className="w-64 h-32 rounded-3xl bg-[#fdfbf7] border-4 border-[#e8dfd1] polaroid-shadow relative flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-4 bg-rose-200/50 border-b border-rose-300/40" />
            <span className="font-handwriting text-3xl text-rose-900 font-bold">
              Happy Birthday! 🎂
            </span>
          </div>
        </div>

        {/* Final Celebration Messages */}
        <AnimatePresence>
          {isCelebrated && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="mt-10 p-8 rounded-3xl bg-[#fdfbf7] border-2 border-[#e8dfd1] polaroid-shadow text-center space-y-3 relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape-pink rotate-1" />

              <div className="w-12 h-12 mx-auto rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                <Heart className="w-6 h-6 fill-current animate-ping" />
              </div>

              <h4 className="font-handwriting text-3xl sm:text-5xl font-bold text-rose-950">
                Happy Birthday, Baby. ❤️
              </h4>

              <p className="font-handwriting text-2xl text-rose-800 font-bold">
                Now come here so I can bite your biceps.
              </p>

              <button
                onClick={resetCandles}
                className="mt-4 text-xs font-typewriter text-stone-500 hover:text-stone-800 underline cursor-pointer"
              >
                Light candles again 🕯️
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
