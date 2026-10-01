import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Flame, Clock, Camera, Zap, Users } from 'lucide-react';
import { STORY_CONFIG } from '../../data/storyConfig';

export const ScientificStatsSection: React.FC = () => {
  const { scientificStats } = STORY_CONFIG;

  const statsList = [
    {
      label: "Times we've roasted each other",
      value: scientificStats.roastedTimes,
      icon: Flame,
      sub: '(Daily ongoing routine)',
      bg: 'bg-[#fffde7]',
      border: 'border-[#f5eeaf]',
      text: 'text-amber-900',
      tape: 'washi-tape-yellow'
    },
    {
      label: 'Time required to miss each other',
      value: scientificStats.missTime,
      icon: Clock,
      sub: '(Actual scientific test)',
      bg: 'bg-[#fdf2f4]',
      border: 'border-[#f7cbcf]',
      text: 'text-rose-900',
      tape: 'washi-tape-pink'
    },
    {
      label: 'Chances of a normal photo',
      value: scientificStats.normalPhotoChance,
      icon: Camera,
      sub: '(Extremely rare anomaly)',
      bg: 'bg-[#f2f9f1]',
      border: 'border-[#cbe5c7]',
      text: 'text-emerald-900',
      tape: 'washi-tape-sage'
    },
    {
      label: 'Chances of us doing something stupid',
      value: scientificStats.stupidChances,
      icon: Zap,
      sub: '(100% guaranteed)',
      bg: 'bg-[#f5f3ff]',
      border: 'border-[#ddd6fe]',
      text: 'text-purple-900',
      tape: 'washi-tape-lavender'
    },
    {
      label: 'People who understand our nonsense',
      value: scientificStats.peopleWhoUnderstandNonsense,
      icon: Users,
      sub: '(Just you and me ❤️)',
      bg: 'bg-[#fffde7]',
      border: 'border-[#f5eeaf]',
      text: 'text-amber-900',
      tape: 'washi-tape-yellow'
    }
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 paper-cream border-b border-[#e5dcd0]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-typewriter mb-3 border border-rose-200 shadow-sm">
          <BarChart2 className="w-3.5 h-3.5 text-rose-600" />
          <span>Peer-Reviewed Lab Data</span>
        </div>

        <h2 className="font-serif-editorial text-2xl sm:text-4xl font-bold text-stone-900 uppercase tracking-wider">
          Our Completely Scientific Statistics
        </h2>
        <p className="mt-2 text-rose-800 font-handwriting text-2xl">
          (Conducted strictly in college labs, bus rides, and late night calls ✍️)
        </p>

        {/* Sticky Notes Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: 0 }}
                style={{ transform: `rotate(${idx % 2 === 0 ? '-2deg' : '2deg'})` }}
                className={`p-5 rounded-2xl ${stat.bg} ${stat.border} border-2 shadow-md flex flex-col items-center justify-between text-center relative group`}
              >
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 ${stat.tape} rotate-1`} />

                <div className="w-10 h-10 rounded-full bg-stone-900/10 flex items-center justify-center mb-3 mt-1">
                  <Icon className="w-5 h-5 text-stone-800" />
                </div>

                <span className={`text-4xl font-extrabold font-typewriter ${stat.text}`}>
                  {stat.value}
                </span>

                <p className="text-xs font-bold text-stone-800 mt-2 font-body leading-tight">
                  {stat.label}
                </p>

                <span className="text-[10px] text-stone-500 font-typewriter mt-1">
                  {stat.sub}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
