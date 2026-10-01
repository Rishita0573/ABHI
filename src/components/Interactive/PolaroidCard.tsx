import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Play, Heart } from 'lucide-react';
import { HiddenMoon } from './HiddenMoon';
import { MediaModal } from './MediaModal';
import { SafeImage } from './SafeImage';

interface PolaroidCardProps {
  id: string;
  title: string;
  quote: string;
  detail: string;
  tag: string;
  annotation?: string;
  layoutStyle?: 'polaroid' | 'filmstrip' | 'tilted' | 'stickynote';
  photoUrl?: string;
  videoUrl?: string;
  rotateDeg?: number;
  hasHiddenMoon?: boolean;
  onDiscoverMoon?: (id: string) => void;
  objectFit?: 'cover' | 'contain';
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  id,
  title,
  quote,
  detail,
  tag,
  annotation,
  layoutStyle = 'polaroid',
  photoUrl,
  videoUrl,
  rotateDeg = 0,
  hasHiddenMoon = false,
  onDiscoverMoon,
  objectFit = 'cover'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heartBurst, setHeartBurst] = useState(false);

  const triggerHeart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHeartBurst(true);
    setTimeout(() => setHeartBurst(false), 1200);
    setIsModalOpen(true);
  };

  // Select washi tape variant based on id hash
  const tapeVariants = ['washi-tape-pink', 'washi-tape-yellow', 'washi-tape-sage', 'washi-tape-lavender'];
  const tapeClass = tapeVariants[id.length % tapeVariants.length];

  return (
    <>
      <motion.div
        onClick={triggerHeart}
        whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        style={{ transform: `rotate(${rotateDeg}deg)` }}
        className={`relative p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
          layoutStyle === 'stickynote'
            ? 'bg-[#fffde7] text-[#3a3520] border border-[#f5eeaf] shadow-lg'
            : layoutStyle === 'filmstrip'
            ? 'bg-[#1e1b18] text-[#f7f3eb] film-strip'
            : 'bg-[#fdfbf7] text-[#2c2825] polaroid-shadow border border-[#eee4d6]'
        }`}
      >
        {/* Washi Tape Header */}
        {layoutStyle !== 'filmstrip' && (
          <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 ${tapeClass} rotate-1 z-20 opacity-90`} />
        )}

        {/* Hidden Moon #2 embed — bottom right corner of paper frame, away from photo */}
        {hasHiddenMoon && onDiscoverMoon && (
          <div className="absolute bottom-3 right-3 z-30">
            <HiddenMoon id="moon-2" onDiscover={onDiscoverMoon} />
          </div>
        )}

        {/* Heart Burst Animated Overlay */}
        {heartBurst && (
          <motion.div
            initial={{ opacity: 1, scale: 0.5, y: 0 }}
            animate={{ opacity: 0, scale: 1.8, y: -30 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-500 z-40 pointer-events-none"
          >
            <Heart className="w-12 h-12 fill-current" />
          </motion.div>
        )}

        {/* Media Container */}
        <div className="relative w-full aspect-[4/3] rounded-xl bg-stone-900 overflow-hidden flex items-center justify-center border border-stone-200/40 group">
          {photoUrl ? (
            <SafeImage
              src={photoUrl}
              alt={title}
              objectFit={objectFit}
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          ) : videoUrl ? (
            <div className="relative w-full h-full flex items-center justify-center bg-stone-900">
              <video
                src={videoUrl}
                muted
                preload="metadata"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-[#3d2e2e] to-[#1f1818] text-rose-100">
              <Camera className="w-6 h-6 text-rose-300/60 mb-1" />
              <span className="text-sm font-handwriting text-rose-200">"{title}"</span>
            </div>
          )}

          {/* Hover hint for uncropped photos */}
          {objectFit === 'contain' && (
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-typewriter bg-black/70 backdrop-blur-xs text-rose-200 z-10 opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none">
              click to see the whole photo 🔍
            </div>
          )}

          {/* Tag badge */}
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-typewriter uppercase tracking-wider bg-black/60 backdrop-blur-sm text-rose-200 z-10">
            {tag}
          </div>
        </div>

        {/* Caption & Annotation */}
        <div className="mt-3 px-1">
          <h3 className="font-serif-editorial text-xl font-bold leading-tight">
            {title}
          </h3>
          <p className="font-handwriting text-lg text-rose-800 mt-0.5 leading-snug">
            "{quote}"
          </p>

          {/* Handwritten Annotation Note */}
          {annotation && (
            <p className="font-handwriting text-base text-amber-800/80 mt-2 border-t border-stone-200/60 pt-1.5 italic">
              ✍️ {annotation}
            </p>
          )}

          <p className="font-body text-[11px] text-stone-500 mt-2 line-clamp-2">
            {detail}
          </p>
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <MediaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        quote={quote}
        detail={detail}
        annotation={annotation}
        photoUrl={photoUrl}
        videoUrl={videoUrl}
        objectFit={objectFit}
      />
    </>
  );
};
