import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingParticles from '../animations/FloatingParticles';
import WaveAnimation from '../animations/WaveAnimation';

const CYCLING_WORDS = ['Empowers', 'Transforms', 'Connects', 'Rises'];

// ─── Animated word cycling ────────────────────────────────────────────────────
function AnimatedWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent"
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}

// ─── Floating orbit cards ────────────────────────────────────────────────────
const ORBIT_CARDS = [
  { emoji: '📚', label: 'Education',  style: { top: '-1rem',  left: '-2rem'  }, delay: 0   },
  { emoji: '🌾', label: 'Farmers',    style: { top: '1rem',   right: '-2rem' }, delay: 0.5 },
  { emoji: '🛣️', label: 'Roads',      style: { bottom: '0',   left: '0'      }, delay: 1.0 },
  { emoji: '📱', label: 'Digital ID', style: { top: '40%',    right: '-1rem' }, delay: 1.5 },
];

function HeroVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Central avatar */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-700 rounded-full blur-2xl opacity-25 animate-pulse" />
        <div className="relative w-full h-full bg-gradient-to-br from-green-800/60 to-green-950/80 rounded-full border-2 border-green-500/30 backdrop-blur-md flex flex-col items-center justify-center gap-2 shadow-2xl">
          <span className="text-6xl sm:text-7xl">👨‍🌾</span>
          <p className="text-white font-bold text-sm">Rameshwar Patel</p>
          <p className="text-green-400 text-xs font-hindi">सूर्यपुरा सरपंच</p>
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
            ✅ Sarpanch
          </span>
        </div>
      </motion.div>

      {/* Orbit cards */}
      {ORBIT_CARDS.map((c, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
          style={c.style}
          className="absolute backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl"
        >
          <span className="text-lg">{c.emoji}</span>
          <span className="text-white text-xs font-semibold whitespace-nowrap">{c.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Main Hero Banner ────────────────────────────────────────────────────────
export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Gradient background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-green-950/40 to-gray-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Canvas particles */}
      <FloatingParticles count={70} />

      {/* Decorative spin rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[500px] h-[500px] border border-green-500/5 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute w-[700px] h-[700px] border border-green-500/5 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              🇮🇳 Gram Panchayat Digital Initiative 2025
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-2"
            >
              Surypura{' '}
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Village
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2"
            >
              <AnimatedWord words={CYCLING_WORDS} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-hindi text-xl text-green-400/80 mb-6"
            >
              सूर्यपुरा — एक नई उम्मीद, एक नई शुरुआत
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              A model village in Maharashtra where smart governance, digital identity,
              modern education, and farmer empowerment create a blueprint for rural India's future.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base px-8 py-3.5 shadow-xl shadow-green-500/20"
              >
                🌾 Explore Programs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#digital')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-base px-8 py-3.5"
              >
                📱 Get Digital ID
              </motion.button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10"
            >
              {[
                { label: '4,200+ Families', icon: '🏠' },
                { label: '850+ Farmers',    icon: '🌾' },
                { label: '12 km Roads',     icon: '🛣️' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Wave bottom transition */}
      <WaveAnimation color="#0a0f0a" />
    </section>
  );
}
