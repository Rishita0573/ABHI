import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart } from 'lucide-react';
import { DuduBubuGif } from '../Interactive/DuduBubuGif';
import { STORY_CONFIG } from '../../data/storyConfig';

export const ConfessionChapter: React.FC = () => {
  const { confessionSection } = STORY_CONFIG;

  return (
    <section id="confession-section" className="relative py-28 px-4 md:px-8 paper-dusty-rose border-b border-[#e4c6cc] overflow-hidden">
      {/* Soft Warm Rose Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Date Stamp Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-900 text-xs font-typewriter mb-6 shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 text-rose-700" />
          <span>Chapter 02 • {confessionSection.title}</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif-editorial text-4xl sm:text-6xl font-bold text-stone-900 leading-tight"
        >
          {confessionSection.title}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-3 text-2xl sm:text-3xl font-handwriting text-rose-900 font-bold"
        >
          "{confessionSection.subheading}"
        </motion.p>

        {/* Soft Diary Journal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 p-8 sm:p-12 rounded-3xl bg-[#fdfbf7] border-2 border-[#e8dfd1] polaroid-shadow text-left relative"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 washi-tape-pink rotate-1" />

          {/* Dudu/Bubu Holding Hands GIF Sticker */}
          <div className="mt-2 mb-4 flex justify-end">
            <DuduBubuGif
              src="/assets/gifs/holding-hands.gif"
              alt="Holding Hands"
              sizeClassName="w-36 sm:w-48 md:w-56"
              rotateDeg={3}
              animation="pulse"
            />
          </div>

          <Heart className="w-6 h-6 text-rose-400 fill-current mb-4" />

          <p className="text-base sm:text-lg text-stone-700 font-body leading-relaxed">
            We weren't ready. We didn't have some perfect relationship plan or formula.
          </p>

          <p className="mt-4 text-base sm:text-lg text-stone-700 font-body leading-relaxed">
            Surrounded by college exam pressure, late-night notes, and exhaustion... we finally confessed what our hearts had been hiding for months.
          </p>

          <p className="mt-6 text-xl sm:text-2xl font-handwriting text-rose-900 font-bold border-t border-stone-200 pt-4">
            And somehow, without forcing anything, we became something neither of us ever wanted to lose.
          </p>

          {/* Handwritten Annotation */}
          {confessionSection.annotation && (
            <p className="mt-3 font-handwriting text-lg text-amber-800 italic">
              ✍️ {confessionSection.annotation}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
