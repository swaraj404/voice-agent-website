"use client";

import { motion } from 'framer-motion';
import { Play, Mic, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fully black background blending with Features section */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Very subtle gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent"></div>
      
      {/* Subtle animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-blue-900/10 rounded-full blur-[100px]"></div>

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
            Smart. Scalable. Human-like.
          </p>

          {/* CTA Buttons - Responsive sizing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-black to-purple-600 text-white px-6 sm:px-10 md:px-14 py-5 sm:py-6 rounded-full text-base sm:text-lg md:text-xl font-semibold flex flex-col items-center justify-center gap-1 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 w-full sm:w-auto min-w-[220px] sm:min-w-[340px] md:min-w-[420px] lg:min-w-[480px] xl:min-w-[520px] will-change-transform"
              style={{ fontFamily: 'var(--font-romono)' }}
              onClick={() => window.open('tel:+918888888888', '_self')}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                {/* <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" /> */}
                <span className="whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-3xl text-purple-200">Call Now To Experience KOEL AI</span>
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">+91 8888888888</span>
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
