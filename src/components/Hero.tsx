"use client";

import { motion } from 'framer-motion';
import { Play, Mic } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/HeroBG.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white"> Automate </span>
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Conversations </span>
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              That Feel Human
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Build custom AI voice agents that speak, understand, and engage — just like real people. Scalable, multilingual, and lightning-fast. 
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-black to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Try Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-purple-400/50 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
              onClick={() => window.open('https://calendar.app.google/iAzMj5pHaSAf62H48', '_blank')}
            >
              <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book a Product Demo
            </motion.button>
          </div>
          
        </motion.div>

      </div>

        </section>
  );
};

export default Hero;
