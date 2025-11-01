"use client";

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-black py-24 sm:py-32 md:py-40 lg:py-56 overflow-hidden">
      {/* Background Image - Bird (smaller, centered, rotated) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div
          className="bg-cover bg-center bg-no-repeat opacity-200"
          style={{
            width: '90%',
            maxWidth: '1300px',
            aspectRatio: '2/1',
            backgroundImage: "url('/bgBird.png')",
            transform: "rotate(8deg)",
          }}
        ></div>
      </div>
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px]"></div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 z-10 flex flex-col min-h-[80vh] justify-between">
        {/* Large Brand Name - Centered over Bird */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center will-change-transform overflow-hidden w-full px-4"
          style={{ pointerEvents: 'none' }}
        >
          <h2 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] 2xl:text-[10rem] font-bold text-white leading-none whitespace-nowrap"
            style={{ 
              fontFamily: 'var(--font-sans-serif)',
              letterSpacing: '0.1.5em',
              transform: 'scaleX(1.5)'
            }}
          >
            KOEL AI
          </h2>
        </motion.div>
      </div>
      {/* Footer links/info absolutely at the bottom of the footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="absolute left-0 right-0 bottom-8 text-center space-y-4 will-change-transform max-w-[1400px] mx-auto pb-16"
      >
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Cookie Notice</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Trust Center</a>
        </div>
        <p className="text-sm text-gray-500">
          ©KOEL AI {new Date().getFullYear()}
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
