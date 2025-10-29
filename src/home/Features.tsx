"use client";

import { motion } from 'framer-motion';
import { MessageSquare, Zap, Globe, Users, Database, Shield } from 'lucide-react';

const Features = () => {
  const featureBlocks = [
    {
      icon: MessageSquare,
      title: "Human-Like Conversations",
      description: "Experience truly natural, two-way voice interactions — no robotic tones or rigid menus. KOEL AI agents understand context, interruptions, and emotions, delivering fluid, human-like conversations in real time.",
      highlights: [
        "Ultra-Low Latency (<300ms)",
        "Multi-Language & Code-Mixed Fluency (125+ languages)",
        "Voice Persona Customization",
        "Intelligent Human Handoff"
      ]
    },
    {
      icon: Zap,
      title: "Smart & Scalable",
      description: "Handle thousands of simultaneous calls effortlessly with enterprise-grade performance. Built for instant responses with sub-300ms latency, ensuring seamless, real-time conversations that feel natural and engaging.",
      highlights: [
        "Scalable by Design - Handle thousands of calls",
        "Smart Integrations (500+ Tools & APIs)",
        "Dynamic Model Switching",
        "99.99% Uptime & Reliability"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise-Ready Platform",
      description: "Fully customizable voice agents with RAG-powered intelligence and enterprise-grade security. Every aspect is tailor-made to match your brand's identity while ensuring data privacy and compliance.",
      highlights: [
        "SOC2, HIPAA, PCI, GDPR Compliant",
        "RAG-Powered Intelligence",
        "Conversation Analytics & Guardrails",
        "Affordable, Transparent Pricing"
      ]
    }
  ];

  const Icon0 = featureBlocks[0].icon;
  const Icon1 = featureBlocks[1].icon;
  const Icon2 = featureBlocks[2].icon;

  return (
    <section className="relative py-24 overflow-hidden -mt-40 pt-48">
      {/* Multi-layered Gradient Background - starts transparent to blend with Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-20% via-purple-950/80 via-50% to-black to-100%"></div>
      
      {/* Radial gradient overlays for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      {/* Animated gradient orbs for dynamic feel */}
      <div className="absolute top-[15%] left-0 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[150px]"></div>
      {/* Wider container with asymmetric padding */}
      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:pl-16 lg:pr-8 z-10">
        {/* Section Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16 text-center will-change-transform"
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-thin mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent" 
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            Unleash the Power of Voice
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
            Discover what makes KOEL AI the future of conversational intelligence
          </p>
        </motion.div>
        
        {/* Feature Blocks - Custom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Top Left - Square Box (First Feature) - Narrower, pushed left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative lg:col-span-5 will-change-transform"
          >
            {/* Card */}
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 max-h-[400px]">
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 will-change-auto"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-raleway)' }}>
                  {featureBlocks[0].title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featureBlocks[0].description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  {featureBlocks[0].highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <button className="mt-6 text-purple-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Top Right - Medium Rectangle (Second Feature) - Wider, extends right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="group relative lg:col-span-7 will-change-transform"
          >
            {/* Card */}
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 max-h-[400px]">
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 will-change-auto"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-raleway)' }}>
                  {featureBlocks[1].title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featureBlocks[1].description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  {featureBlocks[1].highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <button className="mt-6 text-purple-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom - Large Rectangle (Third Feature) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          className="group relative will-change-transform"
        >
          {/* Card */}
          <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 min-h-[350px]">
            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 will-change-auto"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="lg:flex lg:items-start lg:gap-12">
                {/* Left side - Title */}
                <div className="lg:w-1/3 mb-6 lg:mb-0">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-raleway)' }}>
                    {featureBlocks[2].title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 lg:mb-0">
                    {featureBlocks[2].description}
                  </p>
                </div>

                {/* Right side - Highlights */}
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featureBlocks[2].highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-400">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <button className="mt-6 text-purple-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mt-16 will-change-transform"
        >
          <button className="bg-gradient-to-r from-[#060010] to-[#08000e] text-white px-7 py-2.5 rounded-full text-sm font-medium hover:from-[#390159] hover:to-[#480170] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25 will-change-transform">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
