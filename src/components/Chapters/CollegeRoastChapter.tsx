import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Gamepad2, Flame, Sparkles, Video, Camera } from 'lucide-react';
import { HiddenMoon } from '../Interactive/HiddenMoon';
import { DuduBubuGif } from '../Interactive/DuduBubuGif';
import { PolaroidCard } from '../Interactive/PolaroidCard';
import { STORY_CONFIG } from '../../data/storyConfig';
import { MEDIA_DATA } from '../../data/mediaData';

interface CollegeRoastChapterProps {
  onDiscoverMoon: (id: string) => void;
}

export const CollegeRoastChapter: React.FC<CollegeRoastChapterProps> = ({ onDiscoverMoon }) => {
  const [showNfsDetail, setShowNfsDetail] = useState(false);
  const { collegeEra, couple } = STORY_CONFIG;
  const { firstPhotoBeforeUs } = MEDIA_DATA;

  return (
    <section id="college-section" className="relative py-24 px-4 md:px-8 notebook-graph border-b border-[#e5dcd0]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-typewriter mb-3 border border-amber-300 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-amber-700" />
            <span>Chapter 01 • College Days</span>
          </div>

          <h2 className="font-serif-editorial text-3xl md:text-5xl font-bold text-stone-900">
            {collegeEra.title}
          </h2>
          <p className="mt-3 text-stone-600 font-handwriting text-2xl max-w-xl mx-auto">
            "{collegeEra.subtitle}"
          </p>

          {/* Handwritten Chapter Annotation */}
          <div className="mt-2 font-handwriting text-xl text-rose-800 italic">
            ✍️ {collegeEra.annotation}
          </div>

          {/* Dudu/Bubu Teasing GIF Sticker */}
          <div className="mt-6 flex justify-center">
            <DuduBubuGif
              src="/assets/gifs/teasing.gif"
              alt="Teasing"
              sizeClassName="w-36 sm:w-48 md:w-56"
              rotateDeg={-4}
              caption="two idiots. zero peace."
              animation="wiggle"
            />
          </div>
        </div>

        {/* 1. ACTUAL FIRST PHOTO — BEFORE WE WERE A COUPLE */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#fdfbf7] border-2 border-[#e8dfd1] polaroid-shadow relative overflow-hidden"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 washi-tape-sage rotate-1 z-20 opacity-90" />

          {/* Hidden Moon #1 — Tucked in corner of First Photo Scrapbook Card */}
          <div className="absolute top-4 right-4 z-30">
            <HiddenMoon id="moon-1" onDiscover={onDiscoverMoon} />
          </div>

          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-typewriter mb-2 border border-amber-300">
              <Camera className="w-3 h-3 text-amber-700" />
              Before Us • Friends Era
            </span>
            <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-stone-900">
              {firstPhotoBeforeUs.title}
            </h3>
            <p className="font-handwriting text-xl text-rose-800 mt-1">
              "{firstPhotoBeforeUs.quote}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xs mx-auto md:max-w-none w-full">
              <PolaroidCard
                id={firstPhotoBeforeUs.id}
                title={firstPhotoBeforeUs.title}
                quote={firstPhotoBeforeUs.quote}
                detail={firstPhotoBeforeUs.detail}
                tag={firstPhotoBeforeUs.tag}
                annotation={firstPhotoBeforeUs.annotation}
                layoutStyle="polaroid"
                rotateDeg={-2}
                photoUrl={firstPhotoBeforeUs.photoUrl}
                objectFit="contain"
              />
            </div>

            <div className="text-left font-body text-stone-700 space-y-3 p-4 rounded-2xl bg-[#fffde7]/80 border border-[#f5eeaf]">
              <p className="text-sm font-semibold text-stone-900 font-typewriter">
                📌 The Story Behind This Photo:
              </p>
              <p className="text-sm leading-relaxed">
                Technically, this was just a group photo taken during a college event.
              </p>
              <p className="text-sm leading-relaxed">
                We just happened to be standing next to each other in front of the board. I cropped out everyone else so it's just the two of us standing together.
              </p>
              <p className="font-handwriting text-2xl text-rose-900 font-bold pt-2 border-t border-amber-200">
                And somehow… this became our first photo together. 🥹
              </p>
            </div>
          </div>
        </motion.div>

        {/* Playful Sticky Notes Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* Sticky Note 1 */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="p-6 rounded-2xl bg-[#fffde7] border border-[#f3ea9e] shadow-md transform -rotate-2 flex flex-col items-center text-center relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 washi-tape-yellow rotate-1" />
            <div className="w-10 h-10 rounded-full bg-amber-200/60 flex items-center justify-center text-amber-800 mb-2">
              <Flame className="w-5 h-5" />
            </div>
            <span className="text-4xl font-extrabold font-typewriter text-amber-900">
              {collegeEra.roastCounter}
            </span>
            <p className="text-xs font-body font-semibold text-stone-700 mt-1">
              Times we've roasted each other
            </p>
            <p className="text-sm text-rose-800 font-handwriting mt-2">
              ("{couple.herRoastForHim}" vs "{couple.hisRoastForHer}")
            </p>
          </motion.div>

          {/* Sticky Note 2 */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="p-6 rounded-2xl bg-[#f2f9f1] border border-[#cbe5c7] shadow-md transform rotate-2 flex flex-col items-center text-center relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 washi-tape-sage -rotate-2" />
            <div className="w-10 h-10 rounded-full bg-emerald-200/60 flex items-center justify-center text-emerald-800 mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-4xl font-extrabold font-typewriter text-emerald-900">0%</span>
            <p className="text-xs font-body font-semibold text-stone-700 mt-1">
              Chances of behaving normally
            </p>
            <p className="text-sm text-emerald-800 font-handwriting mt-2">
              (Never happened, never will! 😭)
            </p>
          </motion.div>

          {/* Sticky Note 3 */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="p-6 rounded-2xl bg-[#fdf2f4] border border-[#f7cbcf] shadow-md transform -rotate-1 flex flex-col items-center text-center relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 washi-tape-pink rotate-1" />
            <div className="w-10 h-10 rounded-full bg-rose-200/60 flex items-center justify-center text-rose-800 mb-2">
              <Video className="w-5 h-5" />
            </div>
            <span className="text-4xl font-extrabold font-typewriter text-rose-900">0.03%</span>
            <p className="text-xs font-body font-semibold text-stone-700 mt-1">
              Normal photo of us
            </p>
            <p className="text-sm text-rose-800 font-handwriting mt-2">
              (Extremely rare scientific anomaly)
            </p>
          </motion.div>
        </div>

        {/* NFS Race Sabotage Interactive Memory Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-6 sm:p-8 rounded-3xl bg-[#fdfbf7] border-2 border-[#e8dfd1] polaroid-shadow relative overflow-hidden my-8"
        >
          <div className="absolute -top-3 left-8 w-24 h-6 washi-tape-yellow -rotate-2" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-2">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-100 text-amber-800 shrink-0">
                <Gamepad2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-typewriter uppercase tracking-wider text-amber-800">
                  College Lab Memory
                </span>
                <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">
                  {collegeEra.nfsMemory.title}
                </h3>
                <p className="font-handwriting text-xl text-rose-800 mt-0.5">
                  "{collegeEra.nfsMemory.summary}"
                </p>
              </div>
            </div>

            {/* Dudu/Bubu Sitting GIF Sticker */}
            <div className="self-center md:self-auto shrink-0">
              <DuduBubuGif
                src="/assets/gifs/sitting.gif"
                alt="Sitting together"
                sizeClassName="w-28 sm:w-36 md:w-44"
                rotateDeg={4}
                animation="float"
              />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-stone-200 flex justify-between items-center">
            <button
              onClick={() => setShowNfsDetail(!showNfsDetail)}
              className="px-4 py-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-medium border border-amber-300 transition-all cursor-pointer shadow-sm"
            >
              {showNfsDetail ? 'Hide details' : 'What actually happened? →'}
            </button>
          </div>

          <AnimatePresence>
            {showNfsDetail && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-stone-200 text-sm text-stone-700 font-body leading-relaxed bg-amber-50/60 p-4 rounded-2xl"
              >
                <p>"{collegeEra.nfsMemory.detail}"</p>
                <p className="mt-2 text-base font-handwriting text-amber-900 font-bold">
                  ✍️ {collegeEra.nfsMemory.annotation} (Verdict: He definitely cheated so I wouldn't beat his high score! 🏎️💨)
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
