import React from 'react';
import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';
import { PolaroidCard } from '../Interactive/PolaroidCard';
import { DuduBubuGif } from '../Interactive/DuduBubuGif';
import { MEDIA_DATA } from '../../data/mediaData';

export const GoofyUsChapter: React.FC = () => {
  const { goofyUs } = MEDIA_DATA;

  return (
    <section id="goofy-section" className="relative py-24 px-4 md:px-8 notebook-graph border-b border-[#e5dcd0] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-typewriter mb-3 border border-amber-300 shadow-sm">
            <Smile className="w-3.5 h-3.5 text-amber-700" />
            <span>Chapter 04 • Goofy Us</span>
          </div>

          <h2 className="font-serif-editorial text-3xl md:text-5xl font-bold text-stone-900">
            Best Friends Who Are Dating
          </h2>
          <p className="mt-2 text-stone-600 font-handwriting text-2xl max-w-xl mx-auto">
            "Zero seriousness. Zero normal photos. 100% pure madness."
          </p>

          {/* Dudu/Bubu Dancing GIF Sticker */}
          <div className="mt-4 flex justify-center">
            <DuduBubuGif
              src="/assets/gifs/dancing.gif"
              alt="Dancing together"
              sizeClassName="w-36 sm:w-48 md:w-56"
              rotateDeg={-3}
              caption="unfiltered madness hehe"
              animation="wiggle"
            />
          </div>
        </div>

        {/* Playful Scrapbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          {goofyUs.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative"
            >
              <PolaroidCard
                id={item.id}
                title={item.title}
                quote={item.quote}
                detail={item.detail}
                tag={item.tag}
                annotation={item.annotation}
                layoutStyle={item.layoutStyle}
                rotateDeg={item.rotateDeg}
                photoUrl={item.photoUrl}
                videoUrl={item.videoUrl}
              />
            </motion.div>
          ))}
        </div>

        {/* Doodled Annotation Banner */}
        <div className="p-6 rounded-2xl bg-[#fffde7] border border-[#f5eeaf] polaroid-shadow text-center max-w-xl mx-auto transform -rotate-1 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 washi-tape-yellow rotate-1" />
          <p className="font-handwriting text-2xl text-amber-900 font-bold">
            ✍️ "Proof that we should probably never be allowed to record ourselves." 😭
          </p>
        </div>
      </div>
    </section>
  );
};
