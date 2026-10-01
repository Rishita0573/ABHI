import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronDown, Camera } from 'lucide-react';
import { STORY_CONFIG } from '../../data/storyConfig';
import { FloatingDoodles } from '../Interactive/FloatingDoodles';

export const HeroSection: React.FC = () => {
  const [nicknameIndex, setNicknameIndex] = useState(0);
  const nicknames = STORY_CONFIG.couple.hisNicknames;

  useEffect(() => {
    const timer = setInterval(() => {
      setNicknameIndex((prev) => (prev + 1) % nicknames.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [nicknames.length]);

  return (
    <section id="hero-section" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden paper-cream border-b border-[#ebdcd0]">
      {/* Floating Background Doodles */}
      <FloatingDoodles />

      {/* Scattered Handwritten Annotations */}
      <motion.div
        initial={{ opacity: 0, rotate: -6 }}
        animate={{ opacity: 1, rotate: -6 }}
        transition={{ delay: 0.3 }}
        className="absolute top-24 left-8 md:left-24 font-handwriting text-xl text-rose-800/80 hidden sm:block"
      >
        ✍️ "just two idiots from college..."
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 5 }}
        animate={{ opacity: 1, rotate: 5 }}
        transition={{ delay: 0.5 }}
        className="absolute top-32 right-8 md:right-24 font-handwriting text-xl text-amber-800/80 hidden sm:block"
      >
        ✍️ "apparently this became a love story."
      </motion.div>

      {/* Scrapbook Header Stamp */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-900 text-xs font-typewriter tracking-widest uppercase mb-8 shadow-sm"
      >
        <Sparkles className="w-3.5 h-3.5 text-rose-600" />
        <span>For Abhii • October 2</span>
        <Heart className="w-3 h-3 text-rose-600 fill-current ml-1" />
      </motion.div>

      {/* Main Editorial Headline */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-900 max-w-4xl leading-tight"
      >
        Somehow, We Became Us
      </motion.h1>

      {/* Dynamic Nickname Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 flex items-center justify-center gap-2 font-handwriting text-2xl text-stone-700 h-8"
      >
        <span>To my favourite</span>
        <span className="inline-block px-3 py-0.5 rounded-md bg-amber-100/90 text-amber-900 border border-amber-300/60 font-bold transition-all duration-300 shadow-sm">
          "{nicknames[nicknameIndex]}"
        </span>
      </motion.div>

      {/* Visual Polaroid Cover Preview Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 relative w-64 sm:w-72 aspect-[4/3] mx-auto"
      >
        {/* Underneath Polaroid Card */}
        <div className="absolute inset-0 rounded-2xl bg-[#faf7f2] border-2 border-stone-200 shadow-md transform -rotate-6 translate-y-2 p-3 flex flex-col justify-between">
          <div className="w-full h-full bg-rose-50 rounded-xl flex items-center justify-center">
            <Heart className="w-8 h-8 text-rose-300 fill-current" />
          </div>
        </div>

        {/* Main Front Polaroid Card */}
        <div className="relative inset-0 rounded-2xl bg-white border-2 border-stone-200 polaroid-shadow transform rotate-3 p-3 flex flex-col justify-between z-10">
          <div className="relative -top-5 left-1/2 -translate-x-1/2 w-20 h-5 washi-tape-pink rotate-2 z-20" />
          <div className="w-full aspect-[4/3] rounded-xl bg-stone-900 overflow-hidden flex items-center justify-center text-stone-200">
            <div className="flex flex-col items-center gap-1.5 p-4 text-center">
              <Camera className="w-6 h-6 text-rose-300" />
              <span className="text-xs font-handwriting text-rose-200">Our Scrapbook Memory</span>
            </div>
          </div>
          <p className="font-handwriting text-lg text-stone-800 text-center mt-2">
            "college friends → us ❤️"
          </p>
        </div>
      </motion.div>

      {/* Gradual Narrative Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-10 max-w-lg space-y-2 font-body"
      >
        <p className="text-base sm:text-lg text-stone-600 font-light">
          We were just friends.
        </p>
        <p className="text-sm sm:text-base text-stone-400 italic">
          At least that's what we told ourselves.
        </p>

        <div className="pt-3">
          <p className="text-2xl sm:text-3xl font-handwriting text-rose-800 font-bold">
            Until somehow... we became us.
          </p>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-12 flex flex-col items-center gap-1 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
        onClick={() => {
          const colElem = document.getElementById('college-section');
          if (colElem) colElem.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] font-typewriter uppercase tracking-widest">Open Scrapbook Below</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-rose-500" />
      </motion.div>
    </section>
  );
};
