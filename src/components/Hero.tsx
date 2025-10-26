import { motion } from "framer-motion";
import { ChevronDown, Palette } from "lucide-react";

interface HeroProps {
  scrollToGallery: () => void;
}

function Hero({ scrollToGallery }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white overflow-hidden"
    >
      {/* --- Animated Background Glow --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* --- Floating Art Icon --- */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
      >
        <Palette className="text-amber-400" size={36} />
      </motion.div>

      {/* --- Name --- */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-center tracking-tight leading-tight mb-6"
      >
        <span className="bg-gradient-to-r from-amber-300 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
          Sahil Darji
        </span>
      </motion.h1>

      {/* --- Subtitle --- */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-2xl sm:text-3xl text-neutral-300 mb-4 font-light text-center"
      >
        Artist • Graphic Designer • Visionary
      </motion.p>

      {/* --- Tagline --- */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-neutral-400 text-lg sm:text-xl text-center max-w-3xl mb-12 font-light"
      >
        Crafting emotions through <span className="text-amber-400">colors</span>
        ,<span className="text-pink-400"> form</span>, and
        <span className="text-blue-400"> imagination</span>.
      </motion.p>

      {/* --- Button --- */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToGallery}
        className="relative group inline-flex items-center gap-2 px-10 py-4 rounded-full border border-neutral-700 text-neutral-100 font-medium overflow-hidden"
      >
        {/* Glow behind button */}
        <span className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-pink-400/10 blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
        <span className="relative z-10">View My Work</span>
        <ChevronDown
          className="relative z-10 text-neutral-400 group-hover:translate-y-1 transition-transform"
          size={18}
        />
      </motion.button>

      {/* --- Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <ChevronDown className="text-neutral-600" size={36} />
      </motion.div>
    </section>
  );
}

export default Hero;
