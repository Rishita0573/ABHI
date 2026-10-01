import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PolaroidCard } from '../Interactive/PolaroidCard';
import { MEDIA_DATA } from '../../data/mediaData';

export const LookAtUsChapter: React.FC = () => {
  const { lookAtUsCards, formalOutfitMedia } = MEDIA_DATA;

  return (
    <section id="look-at-us-section" className="relative py-28 px-4 md:px-8 paper-warm border-b border-[#e5dcd0] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-typewriter mb-3 border border-amber-300 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Chapter 06 • Fest / Formal Memories</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-handwriting text-3xl sm:text-4xl text-rose-900 font-bold mb-1"
          >
            "okay but..."
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif-editorial text-4xl sm:text-6xl font-extrabold text-stone-900 tracking-tight"
          >
            LOOK AT US. ✨
          </motion.h2>

          <p className="font-handwriting text-xl text-stone-600 mt-2 italic">
            "When two idiots clean up nicely for college functions & events."
          </p>
        </div>

        {/* Prominent 2-Column Grid for the 8 Fest/Formal Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
          {lookAtUsCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (idx % 2) * 0.1 }}
              className="relative"
            >
              <PolaroidCard
                id={card.id}
                title={card.title}
                quote={card.quote}
                detail={card.detail}
                tag={card.tag}
                annotation={card.annotation}
                layoutStyle={card.layoutStyle}
                rotateDeg={idx % 2 === 0 ? -2 : 2}
                photoUrl={card.photoUrl}
              />
            </motion.div>
          ))}
        </div>

        {/* Classroom Formal Outfit Video & Traditional Selfie Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <PolaroidCard
              id={formalOutfitMedia.formalSuitVideo.id}
              title={formalOutfitMedia.formalSuitVideo.title}
              quote={formalOutfitMedia.formalSuitVideo.quote}
              detail={formalOutfitMedia.formalSuitVideo.detail}
              tag={formalOutfitMedia.formalSuitVideo.tag}
              annotation={formalOutfitMedia.formalSuitVideo.annotation}
              layoutStyle="tilted"
              rotateDeg={-2}
              videoUrl={formalOutfitMedia.formalSuitVideo.videoUrl}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <PolaroidCard
              id={formalOutfitMedia.traditionalSelfie.id}
              title={formalOutfitMedia.traditionalSelfie.title}
              quote={formalOutfitMedia.traditionalSelfie.quote}
              detail={formalOutfitMedia.traditionalSelfie.detail}
              tag={formalOutfitMedia.traditionalSelfie.tag}
              annotation={formalOutfitMedia.traditionalSelfie.annotation}
              layoutStyle="polaroid"
              rotateDeg={2}
              photoUrl={formalOutfitMedia.traditionalSelfie.photoUrl}
            />
          </motion.div>
        </div>

        {/* Paper Scrap Note */}
        <div className="p-6 rounded-2xl bg-[#fffde7] border border-[#f5eeaf] polaroid-shadow text-center max-w-lg mx-auto transform rotate-1">
          <p className="font-handwriting text-2xl text-rose-900 font-bold">
            ✍️ "No matter how fancy we look... we're still the same two best friends." ❤️
          </p>
        </div>
      </div>
    </section>
  );
};
