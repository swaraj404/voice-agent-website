"use client";

import { motion } from 'framer-motion';
import { Play, Mic, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with blur effect on clouds */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/bg4.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl leading-tight" style={{ fontFamily: 'var(--font-raleway)' }}>
            <span className="text-white" style={{ fontFamily: 'var(--font-orbitron)' }}> Custom AI </span>
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-orbitron)' }}>Voice Agents </span>
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-300 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-orbitron)' }}>
              For Your Business
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-raleway)' }}>
            At KOELA, we Design customized voice agents that don't just speak they understand respond and engage like real humans
          </p>

          <p className="text-xl md:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-bold italic" >
            Smart Scalable Human-like
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-black to-purple-600 text-white px-10 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 w-full sm:w-auto min-w-[280px]"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Call Now To Experience KOEL AI
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#060010] to-[#08000e] text-white px-10 py-4 rounded-full text-base font-semibold hover:from-[#390159] hover:to-[#480170] transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[280px]"
              onClick={() => window.open('tel:+918888888888', '_self')}
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              +91 8888888888
            </motion.button>
          </div>

          <div className="flex items-center justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-purple-400/50 text-white px-10 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-3 backdrop-blur-lg bg-white/10 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto min-w-[280px]"
              onClick={() => window.open('https://calendar.app.google/iAzMj5pHaSAf62H48', '_blank')}
            >
              <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book A Free Product Demo
            </motion.button>
          </div>          
        </motion.div>

      </div>

        </section>
  );
};

export default Hero;
