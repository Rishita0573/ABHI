import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface AudioPlayerProps {
  activeChapter?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasUserPausedRef = useRef(false);

  useEffect(() => {
    // Initialize single background audio element with tera-rasta-chhodun-na.mp3
    const audio = new Audio('/assets/audio/tera-rasta-chhodun-na.mp3');
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    const startPlaybackWithFade = () => {
      if (hasUserPausedRef.current) return;
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          // Fade volume in gently from 0 to 0.45 over 1.5 seconds
          let vol = 0;
          const fadeInterval = setInterval(() => {
            if (vol < 0.45 && audioRef.current && !audioRef.current.paused) {
              vol += 0.05;
              audioRef.current.volume = Math.min(vol, 0.45);
            } else {
              clearInterval(fadeInterval);
            }
          }, 100);
        })
        .catch(() => {
          // Playback blocked until explicit interaction
        });
    };

    const handleFirstInteraction = () => {
      startPlaybackWithFade();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('pointerdown', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      hasUserPausedRef.current = true;
    } else {
      hasUserPausedRef.current = false;
      audioRef.current.volume = 0.45;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio play failed:', err);
        });
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button
        onClick={togglePlay}
        aria-label="Toggle background music"
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdfbf7]/95 backdrop-blur-md border border-[#e5dcd0] text-stone-800 text-xs font-medium hover:bg-white transition-all shadow-md cursor-pointer select-none"
      >
        <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin text-rose-500' : 'text-stone-400'}`} />
        <span className="font-typewriter text-[11px] truncate max-w-[150px]">
          {isPlaying ? '♫ Tera Rasta Chhodun Na' : 'Play Music'}
        </span>
        {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-rose-500" /> : <VolumeX className="w-3.5 h-3.5 text-stone-400" />}
      </button>
    </div>
  );
};
