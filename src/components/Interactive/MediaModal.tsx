import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  quote?: string;
  detail?: string;
  annotation?: string;
  photoUrl?: string;
  videoUrl?: string;
  objectFit?: 'cover' | 'contain';
}

export const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  onClose,
  title,
  quote,
  detail,
  annotation,
  photoUrl,
  videoUrl,
  objectFit = 'cover'
}) => {
  // Listen for Escape key press to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md cursor-pointer overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl p-5 sm:p-8 rounded-3xl bg-[#fdfbf7] text-[#2c2825] shadow-2xl polaroid-shadow border-4 border-[#e8dfd1] cursor-default overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Washi Tape Header */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 washi-tape-pink -rotate-1 z-20" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-stone-200/90 hover:bg-stone-300 text-stone-800 transition-colors cursor-pointer z-30 shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Player / Image Area — Complete Aspect Ratio Preservation */}
          <div className="w-full aspect-[4/3] max-h-[60vh] rounded-2xl bg-[#141212] overflow-hidden flex items-center justify-center relative mt-3 border border-stone-300/80 shadow-inner shrink-0">
            {photoUrl ? (
              <SafeImage
                src={photoUrl}
                alt={title}
                objectFit={objectFit}
                className="w-full h-full"
              />
            ) : videoUrl ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-rose-950/80 to-amber-950/80 text-rose-100">
                <Heart className="w-12 h-12 text-rose-300/80 fill-current animate-pulse mb-2" />
                <span className="text-xl font-handwriting text-rose-200">"{title}"</span>
              </div>
            )}
          </div>

          {/* Caption & Annotation */}
          <div className="mt-4 pt-2 overflow-y-auto">
            <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
              {title}
            </h3>
            {quote && (
              <p className="font-handwriting text-xl sm:text-2xl text-rose-800 mt-1">
                "{quote}"
              </p>
            )}
            {detail && (
              <p className="font-body text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                {detail}
              </p>
            )}
            {annotation && (
              <p className="font-handwriting text-lg text-amber-800/90 mt-2 italic border-t border-stone-200 pt-2">
                ✍️ {annotation}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
