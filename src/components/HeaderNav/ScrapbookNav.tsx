import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Menu, X } from 'lucide-react';

interface ScrapbookNavProps {
  activeChapter: string;
  onNavigate: (sectionId: string) => void;
  moonCount: number;
  onOpenJunyali: () => void;
}

export const ScrapbookNav: React.FC<ScrapbookNavProps> = ({
  activeChapter,
  onNavigate,
  moonCount,
  onOpenJunyali,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero-section', label: 'Cover' },
    { id: 'college-section', label: 'College' },
    { id: 'confession-section', label: 'Jan 11' },
    { id: 'first-us-section', label: 'First Us' },
    { id: 'goofy-section', label: 'Goofy Us' },
    { id: 'everyday-section', label: 'Little Things' },
    { id: 'look-at-us-section', label: 'Look At Us' },
    { id: 'mussoorie-section', label: 'Mussoorie' },
    { id: 'random-little-us-section', label: 'Random Us' },
    { id: 'birthday-letter-section', label: 'Birthday' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Handwritten Scrapbook Stamp Navigation */}
      <div className="hidden lg:flex fixed top-4 left-6 z-50 items-center gap-1.5 px-4 py-2 rounded-full bg-[#fdfbf7]/95 backdrop-blur-md border border-[#e8dfd1] shadow-md font-typewriter text-xs overflow-x-auto max-w-[90vw]">
        <BookOpen className="w-3.5 h-3.5 text-rose-500 mr-1 shrink-0" />
        {navItems.map((item, idx) => (
          <React.Fragment key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className={`px-2 py-1 rounded transition-colors cursor-pointer shrink-0 ${
                activeChapter === item.id
                  ? 'text-rose-800 font-bold bg-rose-100/80'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {item.label}
            </button>
            {idx < navItems.length - 1 && <span className="text-stone-300">→</span>}
          </React.Fragment>
        ))}

        {/* 🌙 Secret Room Nav Indicator (only visible once all 3 moons are discovered) */}
        {moonCount >= 3 && (
          <>
            <span className="text-stone-300 ml-1">→</span>
            <button
              onClick={onOpenJunyali}
              title="Open Junyali Secret Room 🌙"
              className="px-2 py-1 rounded transition-all cursor-pointer flex items-center gap-1 shrink-0 text-amber-800 font-bold bg-amber-100/90 hover:bg-amber-200 border border-amber-300 animate-pulse shadow-sm"
            >
              <span>🌙 Junyali</span>
            </button>
          </>
        )}
      </div>

      {/* Floating Mobile Scrapbook Tab */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3.5 rounded-full bg-[#fdfbf7] border-2 border-[#e8dfd1] text-rose-800 shadow-xl cursor-pointer flex items-center justify-center"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-16 right-0 w-56 p-4 rounded-2xl bg-[#fdfbf7] border-2 border-[#e8dfd1] shadow-2xl font-typewriter text-xs flex flex-col gap-2 max-h-[70vh] overflow-y-auto"
            >
              <div className="text-[10px] text-stone-400 uppercase tracking-widest border-b border-stone-200 pb-1 mb-1">
                Scrapbook Index
              </div>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left px-3 py-2 rounded hover:bg-rose-50 text-stone-700 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              {moonCount >= 3 && (
                <button
                  onClick={() => {
                    onOpenJunyali();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left px-3 py-2 rounded cursor-pointer text-amber-800 font-bold bg-amber-50 border border-amber-200 flex items-center gap-1.5"
                >
                  <span>🌙 Junyali</span>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
