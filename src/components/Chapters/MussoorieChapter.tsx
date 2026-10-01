import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { PolaroidCard } from '../Interactive/PolaroidCard';
import { HiddenMoon } from '../Interactive/HiddenMoon';
import { MEDIA_DATA } from '../../data/mediaData';

interface MussoorieChapterProps {
  onDiscoverMoon: (id: string) => void;
}

export const MussoorieChapter: React.FC<MussoorieChapterProps> = ({ onDiscoverMoon }) => {
  const { mussoorie } = MEDIA_DATA;

  return (
    <section id="mussoorie-section" className="relative py-28 px-4 md:px-8 paper-sage border-b border-[#cce0cb] overflow-hidden">
      {/* Mountain breeze misty background circles */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-typewriter mb-3 border border-emerald-300 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Chapter 07 • Travel Scrapbook</span>
          </div>

          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-stone-900">
            Our First Escape — Mussoorie 🏔️
          </h2>
          <p className="mt-2 text-stone-600 font-handwriting text-2xl max-w-xl mx-auto">
            "Being together somewhere away from everything."
          </p>

          <p className="font-handwriting text-xl text-emerald-800 font-bold mt-2">
            ✍️ "one of my favourite days."
          </p>
        </div>

        {/* Hero Travel Photo & Trail Video Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Mussoorie Mountain Mist Hero Photo */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PolaroidCard
              id={mussoorie.heroLandscape.id}
              title={mussoorie.heroLandscape.title}
              quote={mussoorie.heroLandscape.quote}
              detail={mussoorie.heroLandscape.detail}
              tag={mussoorie.heroLandscape.tag}
              annotation={mussoorie.heroLandscape.annotation}
              layoutStyle="polaroid"
              rotateDeg={-1}
              photoUrl={mussoorie.heroLandscape.photoUrl}
            />
          </motion.div>

          {/* Mussoorie Trail Video Postcard */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PolaroidCard
              id={mussoorie.trailVideo.id}
              title={mussoorie.trailVideo.title}
              quote={mussoorie.trailVideo.quote}
              detail={mussoorie.trailVideo.detail}
              tag={mussoorie.trailVideo.tag}
              annotation={mussoorie.trailVideo.annotation}
              layoutStyle="tilted"
              rotateDeg={2}
              videoUrl={mussoorie.trailVideo.videoUrl}
            />
          </motion.div>
        </div>

        {/* Travel Postcards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <PolaroidCard
              id={mussoorie.teaStallTender.id}
              title={mussoorie.teaStallTender.title}
              quote={mussoorie.teaStallTender.quote}
              detail={mussoorie.teaStallTender.detail}
              tag={mussoorie.teaStallTender.tag}
              annotation={mussoorie.teaStallTender.annotation}
              layoutStyle="stickynote"
              rotateDeg={-2}
              photoUrl={mussoorie.teaStallTender.photoUrl}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <PolaroidCard
              id={mussoorie.teaStallThumbsUp.id}
              title={mussoorie.teaStallThumbsUp.title}
              quote={mussoorie.teaStallThumbsUp.quote}
              detail={mussoorie.teaStallThumbsUp.detail}
              tag={mussoorie.teaStallThumbsUp.tag}
              annotation={mussoorie.teaStallThumbsUp.annotation}
              layoutStyle="polaroid"
              rotateDeg={1}
              photoUrl={mussoorie.teaStallThumbsUp.photoUrl}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <PolaroidCard
              id={mussoorie.terraceViewpoint.id}
              title={mussoorie.terraceViewpoint.title}
              quote={mussoorie.terraceViewpoint.quote}
              detail={mussoorie.terraceViewpoint.detail}
              tag={mussoorie.terraceViewpoint.tag}
              annotation={mussoorie.terraceViewpoint.annotation}
              layoutStyle="filmstrip"
              rotateDeg={-1}
              photoUrl={mussoorie.terraceViewpoint.photoUrl}
            />
          </motion.div>
        </div>

        {/* Travel Diary Note with Hidden Moon #3 */}
        <div className="p-6 rounded-2xl bg-[#f2f9f1] border border-[#cbe5c7] polaroid-shadow text-center max-w-lg mx-auto transform -rotate-1 relative">
          <div className="absolute -top-3 -right-3 z-30">
            <HiddenMoon id="moon-3" onDiscover={onDiscoverMoon} />
          </div>
          <p className="font-handwriting text-2xl text-emerald-900 font-bold">
            ✍️ "Sitting together in the quiet mountains... we went here together." 🏔️
          </p>
        </div>
      </div>
    </section>
  );
};
