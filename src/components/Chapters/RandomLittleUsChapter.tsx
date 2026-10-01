import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { PolaroidCard } from '../Interactive/PolaroidCard';
import { MEDIA_DATA } from '../../data/mediaData';

export const RandomLittleUsChapter: React.FC = () => {
  const { randomLittleUs } = MEDIA_DATA;

  return (
    <section id="random-little-us-section" className="relative py-24 px-4 md:px-8 paper-warm border-b border-[#e5dcd0] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-typewriter mb-3 border border-amber-300 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            <span>Chapter 08 • Memory Filmstrip</span>
          </div>

          <h2 className="font-serif-editorial text-3xl md:text-5xl font-bold text-stone-900">
            Random Little Us
          </h2>
          <p className="mt-2 text-stone-600 font-handwriting text-2xl max-w-xl mx-auto">
            "There are so many tiny versions of us scattered across ordinary days."
          </p>

          <p className="font-handwriting text-xl text-rose-800 font-bold mt-2">
            ✍️ "there are so many tiny versions of us."
          </p>
        </div>

        {/* Scattered Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {randomLittleUs.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, rotate: (idx % 2 === 0 ? -2 : 2) }}
              whileInView={{ opacity: 1, scale: 1, rotate: (idx % 2 === 0 ? -1 : 1) }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <PolaroidCard
                id={item.id}
                title={item.title}
                quote={item.quote}
                detail={item.detail}
                tag={item.tag}
                annotation={item.annotation}
                layoutStyle={item.layoutStyle || (idx % 3 === 0 ? 'filmstrip' : idx % 2 === 0 ? 'polaroid' : 'tilted')}
                rotateDeg={idx % 2 === 0 ? -2 : 2}
                photoUrl={item.photoUrl}
                videoUrl={item.videoUrl}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="p-6 rounded-2xl bg-[#fffde7] border border-[#f5eeaf] polaroid-shadow text-center max-w-md mx-auto transform rotate-1">
          <p className="font-handwriting text-2xl text-stone-800 font-bold">
            ✍️ "All these tiny moments... they mean everything to me." 💕
          </p>
        </div>
      </div>
    </section>
  );
};
