import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PolaroidCard } from '../Interactive/PolaroidCard';
import { MEDIA_DATA } from '../../data/mediaData';

export const FirstUsChapter: React.FC = () => {
  const { firstUs } = MEDIA_DATA;

  return (
    <section id="first-us-section" className="relative py-24 px-4 md:px-8 paper-warm border-b border-[#e5dcd0] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-900 text-xs font-typewriter mb-4 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-700" />
          <span>Chapter 03 • After January 11</span>
        </motion.div>

        {/* Transition Line */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-handwriting text-3xl sm:text-4xl text-rose-900 font-bold mb-2"
        >
          "And suddenly..."
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif-editorial text-4xl sm:text-6xl font-bold text-stone-900 leading-tight mb-8"
        >
          Oh... so we're actually us now.
        </motion.h2>

        {/* First Real Polaroid Reveal — Classic Married Couple */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring' }}
          className="max-w-md mx-auto my-6"
        >
          <PolaroidCard
            id={firstUs.id}
            title={firstUs.title}
            quote={firstUs.quote}
            detail={firstUs.detail}
            tag="married couple energy"
            annotation={firstUs.annotation}
            layoutStyle="polaroid"
            rotateDeg={1}
            photoUrl={firstUs.photoUrl}
          />
        </motion.div>

        <p className="font-handwriting text-2xl text-stone-700 mt-6 italic">
          "Just casually looking like we've been married for 40 years." 😭
        </p>
      </div>
    </section>
  );
};
