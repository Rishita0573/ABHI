import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, RotateCcw } from 'lucide-react';
import { AudioPlayer } from './components/HeaderNav/AudioPlayer';
import { ScrapbookNav } from './components/HeaderNav/ScrapbookNav';
import { IntroSequence } from './components/Hero/IntroSequence';
import { HeroSection } from './components/Hero/HeroSection';
import { CollegeRoastChapter } from './components/Chapters/CollegeRoastChapter';
import { ConfessionChapter } from './components/Chapters/ConfessionChapter';
import { FirstUsChapter } from './components/Chapters/FirstUsChapter';
import { GoofyUsChapter } from './components/Chapters/GoofyUsChapter';
import { EverydayWondersChapter } from './components/Chapters/EverydayWondersChapter';
import { LookAtUsChapter } from './components/Chapters/LookAtUsChapter';
import { MussoorieChapter } from './components/Chapters/MussoorieChapter';
import { RandomLittleUsChapter } from './components/Chapters/RandomLittleUsChapter';
import { ScientificStatsSection } from './components/Chapters/ScientificStatsSection';
import { FinalSequenceChapter } from './components/Chapters/FinalSequenceChapter';
import { DateGateEnvelope } from './components/Birthday/DateGateEnvelope';
import { VirtualCake } from './components/Birthday/VirtualCake';
import { JunyaliModal } from './components/JunyaliSecretRoom/JunyaliModal';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [discoveredMoons, setDiscoveredMoons] = useState<string[]>([]);
  const [isJunyaliModalOpen, setIsJunyaliModalOpen] = useState(false);
  const [isDevOverride, setIsDevOverride] = useState(false);
  const [activeChapter, setActiveChapter] = useState('hero');

  const [showCompletionToast, setShowCompletionToast] = useState(false);
  const [showInvitationBanner, setShowInvitationBanner] = useState(false);

  // Initialize moon progress from localStorage
  useEffect(() => {
    const moons = ['moon-1', 'moon-2', 'moon-3'];
    const found = moons.filter((m) => {
      const shortKey = m.replace('-', '');
      return (
        localStorage.getItem(`junyali_moon_${m}`) === 'true' ||
        localStorage.getItem(`junyali_moon_${shortKey}`) === 'true'
      );
    });
    setDiscoveredMoons(found);
    if (found.length === 3) {
      setShowInvitationBanner(true);
    }
  }, []);

  // Track active scroll chapter for audio crossfading & navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      const sections = [
        { id: 'hero-section', name: 'hero-section' },
        { id: 'college-section', name: 'college-section' },
        { id: 'confession-section', name: 'confession-section' },
        { id: 'first-us-section', name: 'first-us-section' },
        { id: 'goofy-section', name: 'goofy-section' },
        { id: 'everyday-section', name: 'everyday-section' },
        { id: 'look-at-us-section', name: 'look-at-us-section' },
        { id: 'mussoorie-section', name: 'mussoorie-section' },
        { id: 'random-little-us-section', name: 'random-little-us-section' },
        { id: 'birthday-letter-section', name: 'birthday-letter-section' }
      ];

      for (const sec of sections) {
        const elem = document.getElementById(sec.id);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveChapter(sec.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDiscoverMoon = (rawId: string) => {
    const normalizedId = rawId.includes('-') ? rawId : `moon-${rawId.replace('moon', '')}`;
    setDiscoveredMoons((prev) => {
      if (prev.includes(normalizedId)) return prev;
      const updated = [...prev, normalizedId];
      if (updated.length === 3) {
        setShowCompletionToast(true);
        setShowInvitationBanner(true);
        setTimeout(() => {
          setShowCompletionToast(false);
        }, 4000);
      }
      return updated;
    });
  };

  const handleResetMoonHunt = () => {
    const keys = ['moon-1', 'moon-2', 'moon-3', 'moon1', 'moon2', 'moon3'];
    keys.forEach((k) => localStorage.removeItem(`junyali_moon_${k}`));
    setDiscoveredMoons([]);
    setShowCompletionToast(false);
    setShowInvitationBanner(false);
    setIsJunyaliModalOpen(false);
    window.dispatchEvent(new CustomEvent('reset-moon-hunt'));
  };

  const handleNavigate = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2c2825] relative overflow-x-hidden paper-warm">
      {/* 0. Shy Opening Intro Sequence (LOCKED & UNTOUCHED) */}
      {showIntro && <IntroSequence onStart={() => setShowIntro(false)} />}

      {/* Floating Audio Controller */}
      <AudioPlayer activeChapter={activeChapter} />

      {/* Scrapbook Stamped Navigation */}
      <ScrapbookNav
        activeChapter={activeChapter}
        onNavigate={handleNavigate}
        moonCount={discoveredMoons.length}
        onOpenJunyali={() => setIsJunyaliModalOpen(true)}
      />

      {/* Main Story Flow */}
      <main>
        {/* 1. HERO — Scrapbook Cover */}
        <HeroSection />

        {/* 2. COLLEGE / ROAST ERA */}
        <CollegeRoastChapter onDiscoverMoon={handleDiscoverMoon} />

        {/* 3. CONFESSION — JAN 11, 2025 */}
        <ConfessionChapter />

        {/* 4. "OH... SO WE'RE ACTUALLY US NOW" */}
        <FirstUsChapter />

        {/* 5. GOOFY US */}
        <GoofyUsChapter />

        {/* 6. EVERYDAY WONDERS */}
        <EverydayWondersChapter onDiscoverMoon={handleDiscoverMoon} />

        {/* 7. "OKAY BUT... LOOK AT US." */}
        <LookAtUsChapter />

        {/* 8. OUR FIRST ESCAPE — MUSSOORIE */}
        <MussoorieChapter onDiscoverMoon={handleDiscoverMoon} />

        {/* 9. RANDOM LITTLE US */}
        <RandomLittleUsChapter />

        {/* 10. SCIENTIFIC STATISTICS */}
        <ScientificStatsSection />

        {/* 11. FINAL EMOTIONAL SEQUENCE */}
        <FinalSequenceChapter onCompleteSequence={() => handleNavigate('birthday-letter-section')} />

        {/* 12. BIRTHDAY ENVELOPE & LETTER */}
        <DateGateEnvelope
          onLetterOpened={() => {}}
          isDevOverride={isDevOverride}
          onToggleDevOverride={() => setIsDevOverride((prev) => !prev)}
        />

        {/* 13. CAKE & CANDLE BLOWOUT */}
        <VirtualCake />
      </main>

      {/* 13.5 SUBTLE ALL MOONS FOUND DISCOVERY TOAST */}
      <AnimatePresence>
        {showCompletionToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[#181623]/95 border border-amber-400/50 text-amber-200 shadow-2xl backdrop-blur-md flex items-center gap-2.5 font-typewriter text-xs sm:text-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>You found them all. 🌙</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 13.6 SUBTLE JUNYALI INVITATION BANNER (Does NOT auto-open modal) */}
      <AnimatePresence>
        {discoveredMoons.length === 3 && showInvitationBanner && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 left-4 sm:left-6 z-40 max-w-sm p-4 rounded-2xl bg-[#14121f]/95 border border-amber-400/50 text-amber-100 shadow-2xl backdrop-blur-md font-typewriter text-xs"
          >
            <div className="flex items-center justify-between gap-2 mb-2 text-amber-300 font-bold border-b border-amber-500/20 pb-1.5">
              <span className="flex items-center gap-1.5">
                <Moon className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>Secret Unlocked</span>
              </span>
              <button
                onClick={() => setShowInvitationBanner(false)}
                className="text-stone-400 hover:text-amber-200 text-xs px-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="font-handwriting text-xl text-amber-200 mb-3 leading-snug">
              "There was one more thing I wanted you to find… 🌙"
            </p>
            <button
              onClick={() => {
                setShowInvitationBanner(false);
                setIsJunyaliModalOpen(true);
              }}
              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-bold font-typewriter transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-stone-950" />
              <span>Enter Junyali Secret Room</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 14. SECRET JUNYALI NIGHT SKY ROOM MODAL */}
      <JunyaliModal
        isOpen={isJunyaliModalOpen}
        onClose={() => setIsJunyaliModalOpen(false)}
      />

      {/* Scrapbook Footer */}
      <footer className="py-12 text-center text-xs text-stone-500 font-typewriter border-t border-[#e5dcd0] paper-cream">
        <p className="font-handwriting text-xl text-rose-900 font-bold mb-1">
          Made with all my heart by your Dumbo / Betu 🫶
        </p>
        <p>For Abhii • October 2</p>

        {/* DEV ONLY CONTROLS PANEL */}
        {(import.meta.env.DEV || isDevOverride) && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => {
                if (!isDevOverride) setIsDevOverride(true);
                handleNavigate('birthday-letter-section');
              }}
              className="px-3 py-1.5 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-900 border border-rose-300 font-typewriter text-[11px] font-bold cursor-pointer shadow-xs inline-flex items-center gap-1 transition-colors"
            >
              <span>🎁 Jump to Birthday Envelope (Dev Mode)</span>
            </button>
            <button
              onClick={handleResetMoonHunt}
              className="px-3 py-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 font-typewriter text-[11px] cursor-pointer shadow-xs inline-flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3 h-3 text-amber-800" />
              <span>Reset Moon Hunt (Dev Mode)</span>
            </button>
          </div>
        )}
      </footer>
    </div>
  );
};

export default App;
