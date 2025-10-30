"use client";

import { motion } from 'framer-motion';
import { Play, Mic, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Optimized with will-change */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-auto"
        style={{
          backgroundImage: "url('/bg4.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 will-change-auto"></div>

      {/* Content - Responsive padding and sizing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Main Heading - Fully responsive */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight px-2" style={{ fontFamily: 'var(--font-romono)' }}>
            <span className="text-white" style={{ fontFamily: 'var(--font-orbitron)' }}> Custom AI </span>
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-orbitron)' }}>Voice Agents </span>
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-300 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-orbitron)' }}>
              For Your Business
            </span>
          </h1>

          {/* Subtitle - Responsive text size */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'var(--font-romono)' }}>
            At KOEL AI, We design customized voice agents that don't just speak - they understand, respond and engage like real humans.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-semibold italic bg-gradient-to-r from-purple-900 via-purple-200 to-white bg-clip-text text-transparent px-4">
            SMART. SCALABLE. HUMAN-LIKE.
          </p>

          {/* CTA Buttons - Responsive sizing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-black to-purple-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 w-full sm:w-auto sm:min-w-[260px] md:min-w-[280px] will-change-transform"
              style={{ fontFamily: 'var(--font-romono)' }}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap">Call Now To Experience KOEL AI</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#060010] to-[#08000e] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:from-[#390159] hover:to-[#480170] transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto sm:min-w-[260px] md:min-w-[280px] will-change-transform"
              onClick={() => window.open('tel:+918888888888', '_self')}
              style={{ fontFamily: 'var(--font-romono)' }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap">+91 8888888888</span>
            </motion.button>
          </div>

          <div className="flex items-center justify-center pt-2 sm:pt-4 px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-purple-400/50 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-lg bg-white/10 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto sm:min-w-[260px] md:min-w-[280px] will-change-transform"
              onClick={() => window.open('https://calendar.app.google/iAzMj5pHaSAf62H48', '_blank')}
              style={{ fontFamily: 'var(--font-romono)' }}
            >
              <Mic className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap">Book A Free Product Demo</span>
            </motion.button>
          </div>          
        </motion.div>

      </div>

        </section>
  );
};

export default Hero;
