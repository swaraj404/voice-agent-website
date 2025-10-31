"use client";

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image - Bird (smaller, centered, rotated) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div
          className="bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            width: '95%',
            maxWidth: '1400px',
            aspectRatio: '2/1',
            backgroundImage: "url('/footer-bird.png')",
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

      <div className="relative w-full px-4 sm:px-6 lg:px-8 z-10">
        {/* Large Brand Name - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center will-change-transform overflow-hidden"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-none whitespace-nowrap"
            style={{ 
              fontFamily: 'var(--font-cinzel)',
              letterSpacing: '0.2em',
              transform: 'scaleX(1.5)'
            }}
          >
            KOEL AI
          </h2>
        </motion.div>

        {/* Optional: Small footer links/info below brand name */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center mt-12 sm:mt-16 md:mt-20 space-y-4 will-change-transform max-w-[1400px] mx-auto"
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
      </div>
    </footer>
  );
};

export default Footer;
