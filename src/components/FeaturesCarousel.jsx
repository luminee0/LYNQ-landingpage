import { useState } from 'react';
import { features } from '../utils/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturesCarousel() {
  const [index, setIndex] = useState(0);
  const total = features.length;

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const getIndex = (offset) => (index + offset + total) % total;

  return (
    <section id="features" className="py-20 max-w-6xl mx-auto text-white text-center">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        What You Can Do
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-12 text-3xl text-accent hover:text-white transition-all"
        >
          ‹
        </button>

        {/* Cards */}
        <div className="flex gap-6 items-center justify-center overflow-hidden">
          {[getIndex(-1), getIndex(0), getIndex(1)].map((i, idx) => (
            <motion.div
              key={i}
              className={`w-[280px] min-h-[220px] p-6 rounded-xl transition-all backdrop-blur-lg bg-white/10 border border-white/10 text-left shadow-xl ${
                idx === 1
                  ? 'scale-105 z-10 bg-white/20'
                  : 'opacity-60 scale-95 z-0'
              } hover:drop-shadow-glow`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-accent mb-3">
                {features[i].title}
              </h3>
              <p className="text-white/80 text-sm">{features[i].description}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-0 md:-right-12 text-3xl text-accent hover:text-white transition-all"
        >
          ›
        </button>
      </div>
    </section>
  );
}
