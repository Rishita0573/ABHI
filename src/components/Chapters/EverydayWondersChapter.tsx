import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Play, Sparkles } from 'lucide-react';
import { PolaroidCard } from '../Interactive/PolaroidCard';
import { TwoSecondRuleCard } from '../Interactive/TwoSecondRuleCard';
import { DuduBubuGif } from '../Interactive/DuduBubuGif';
import { MediaModal } from '../Interactive/MediaModal';
import { MEDIA_DATA } from '../../data/mediaData';

interface EverydayWondersChapterProps {
  onDiscoverMoon: (id: string) => void;
}

export const EverydayWondersChapter: React.FC<EverydayWondersChapterProps> = ({ onDiscoverMoon }) => {
  const { everydayWonders } = MEDIA_DATA;
  const [isCheekKissModalOpen, setIsCheekKissModalOpen] = useState(false);
  const [hasWatchedVideo, setHasWatchedVideo] = useState(false);

  const handleOpenCheekKiss = () => {
    setIsCheekKissModalOpen(true);
    setHasWatchedVideo(true);
  };

  return (
    <section id="everyday-section" className="relative py-24 px-4 md:px-8 paper-cream border-b border-[#e5dcd0] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-900 text-xs font-typewriter mb-3 border border-rose-300 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-rose-700 fill-current" />
            <span>Chapter 05 • Everyday Wonders</span>
          </div>

          <h2 className="font-serif-editorial text-3xl md:text-5xl font-bold text-stone-900">
            The Tiny Things That Mean Everything
          </h2>
          <p className="mt-2 text-stone-600 font-handwriting text-2xl max-w-xl mx-auto">
            "Wrapped together, completely peaceful, forgetting everything outside."
          </p>

          {/* Dudu/Bubu Comfort & Sleeping GIF Stickers */}
          <div className="mt-6 flex justify-center gap-6 flex-wrap items-center">
            <DuduBubuGif
              src="/assets/gifs/hug.gif"
              alt="Hug"
              sizeClassName="w-32 sm:w-44 md:w-52"
              rotateDeg={-3}
              caption="safest hug"
              animation="pulse"
            />
            <DuduBubuGif
              src="/assets/gifs/sleeping.gif"
              alt="Sleeping"
              sizeClassName="w-32 sm:w-44 md:w-52"
              rotateDeg={3}
              caption="sleeping in your arms"
              animation="float"
            />
          </div>
        </div>

        {/* SPECIAL REAL CHEEK KISS VIDEO SCRAPBOOK CARD */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={handleOpenCheekKiss}
          className="p-6 sm:p-8 rounded-3xl bg-[#fdfbf7] border-3 border-rose-300 polaroid-shadow relative overflow-hidden mb-12 cursor-pointer group"
        >
          <div className="absolute -top-3 left-8 w-28 h-6 washi-tape-pink -rotate-1 z-20" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-typewriter mb-2">
                <Sparkles className="w-3 h-3 text-rose-600" />
                Featured Video Memory
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-stone-900">
                {everydayWonders.cheekKissVideo.title}
              </h3>
              <p className="font-handwriting text-2xl text-rose-800 mt-1">
                "{everydayWonders.cheekKissVideo.quote}"
              </p>
              <p className="font-body text-xs text-stone-600 mt-2">
                {everydayWonders.cheekKissVideo.detail}
              </p>

              {hasWatchedVideo ? (
                <p className="font-handwriting text-xl text-emerald-800 mt-3 font-bold animate-fade-in">
                  ✍️ hehe. 💕
                </p>
              ) : (
                <p className="font-handwriting text-lg text-amber-800 mt-3 italic">
                  👉 Click to watch the video memory...
                </p>
              )}
            </div>

            {/* Video Play Button Box */}
            <div className="relative w-full md:w-64 aspect-video rounded-2xl bg-stone-900 overflow-hidden shrink-0 border-2 border-rose-200 shadow-md">
              <video
                src={everydayWonders.cheekKissVideo.videoUrl}
                muted
                preload="metadata"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modal for Cheek Kiss Video */}
        <MediaModal
          isOpen={isCheekKissModalOpen}
          onClose={() => setIsCheekKissModalOpen(false)}
          title={everydayWonders.cheekKissVideo.title}
          quote={everydayWonders.cheekKissVideo.quote}
          detail={everydayWonders.cheekKissVideo.detail}
          annotation="hehe. 💕"
          videoUrl={everydayWonders.cheekKissVideo.videoUrl}
        />

        {/* 2x2 Grid for Everyday Wonder Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Photo 1: Magnetic Couple Bracelets */}
          <PolaroidCard
            id={everydayWonders.magneticBracelets.id}
            title={everydayWonders.magneticBracelets.title}
            quote={everydayWonders.magneticBracelets.quote}
            detail={everydayWonders.magneticBracelets.detail}
            tag={everydayWonders.magneticBracelets.tag}
            annotation={everydayWonders.magneticBracelets.annotation}
            layoutStyle={everydayWonders.magneticBracelets.layoutStyle}
            rotateDeg={everydayWonders.magneticBracelets.rotateDeg}
            photoUrl={everydayWonders.magneticBracelets.photoUrl}
          />

          {/* Photo 2: Cozy Back Hug Mirror Selfie */}
          <PolaroidCard
            id={everydayWonders.cozyBackHug.id}
            title={everydayWonders.cozyBackHug.title}
            quote={everydayWonders.cozyBackHug.quote}
            detail={everydayWonders.cozyBackHug.detail}
            tag={everydayWonders.cozyBackHug.tag}
            annotation={everydayWonders.cozyBackHug.annotation}
            layoutStyle={everydayWonders.cozyBackHug.layoutStyle}
            rotateDeg={everydayWonders.cozyBackHug.rotateDeg}
            photoUrl={everydayWonders.cozyBackHug.photoUrl}
          />

          {/* Photo 3: B&W Hand Holding with Hearts */}
          <PolaroidCard
            id={everydayWonders.bwHandHolding.id}
            title={everydayWonders.bwHandHolding.title}
            quote={everydayWonders.bwHandHolding.quote}
            detail={everydayWonders.bwHandHolding.detail}
            tag={everydayWonders.bwHandHolding.tag}
            annotation={everydayWonders.bwHandHolding.annotation}
            layoutStyle={everydayWonders.bwHandHolding.layoutStyle}
            rotateDeg={everydayWonders.bwHandHolding.rotateDeg}
            photoUrl={everydayWonders.bwHandHolding.photoUrl}
            hasHiddenMoon={true}
            onDiscoverMoon={onDiscoverMoon}
          />

          {/* Photo 4: Shopping Mall Mirror Selfie */}
          <PolaroidCard
            id={everydayWonders.mallMirrorSelfie.id}
            title={everydayWonders.mallMirrorSelfie.title}
            quote={everydayWonders.mallMirrorSelfie.quote}
            detail={everydayWonders.mallMirrorSelfie.detail}
            tag={everydayWonders.mallMirrorSelfie.tag}
            annotation={everydayWonders.mallMirrorSelfie.annotation}
            layoutStyle={everydayWonders.mallMirrorSelfie.layoutStyle}
            rotateDeg={everydayWonders.mallMirrorSelfie.rotateDeg}
            photoUrl={everydayWonders.mallMirrorSelfie.photoUrl}
          />
        </div>

        {/* Cheek Pinching Memory Block with cheek-pinch.gif */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#fffde7] border border-[#f5eeaf] polaroid-shadow my-8 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape-yellow rotate-1" />

          <div className="flex-1 text-left">
            <span className="text-xs font-typewriter uppercase tracking-wider text-amber-900">
              Personal Memory
            </span>
            <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">
              Cheek Pinches 😭
            </h3>
            <p className="font-handwriting text-xl text-rose-800 mt-1">
              "His favourite way of reminding me that my cheeks belong to him."
            </p>
            <p className="font-body text-xs text-stone-600 mt-2">
              Pinching my cheeks until they turn pink, no matter where we are or who is around.
            </p>
            <p className="font-handwriting text-lg text-amber-900 font-bold mt-2">
              ✍️ proof that he can't resist. 😭
            </p>
          </div>

          <div className="shrink-0">
            <DuduBubuGif
              src="/assets/gifs/cheek-pinch.gif"
              alt="Cheek Pinch"
              sizeClassName="w-36 sm:w-48 md:w-56"
              rotateDeg={-2}
              caption="my cheeks 😭"
              animation="pulse"
            />
          </div>
        </div>

        {/* Interactive 2-Second Rule Component */}
        <div className="mt-12">
          <TwoSecondRuleCard />
        </div>
      </div>
    </section>
  );
};
