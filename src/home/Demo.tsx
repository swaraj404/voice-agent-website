"use client";

import { motion } from 'framer-motion';
import { Headphones, Play } from 'lucide-react';

const Demo = () => {
  const demoCards = [
    {
      title: "Smart Patient Engagement",
      industry: "Healthcare",
      description: "Listen to how KOEL AI automates appointment booking, reminders, and patient support — with empathy and accuracy.",
      highlight: "Book, reschedule, or confirm appointments — all through natural voice interaction.",
      icon: "",
      gradient: "from-gray-900/30 to-black/40"
    },
    {
      title: "Intelligent Loan Assistance",
      industry: "Finance",
      description: "A real conversation between KOEL AI and a customer applying for a loan — accurate, policy-compliant, and lightning fast.",
      highlight: "Automating EMI, policy, and eligibility queries — 24×7 without human intervention.",
      icon: "",
      gradient: "from-gray-900/30 to-black/40"
    },
    {
      title: "AI Admissions Assistant",
      industry: "Education",
      description: "Explore how KOEL AI handles student queries, admissions follow-ups, and updates across multiple languages.",
      highlight: "From inquiries to confirmations — AI that speaks every student's language.",
      icon: "",
      gradient: "from-gray-900/30 to-black/40"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px]"></div>

      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-16 z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-20 will-change-transform"
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-thin mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            Experience KOEL AI in Action
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
            See how our AI Voice Agents transform real business conversations — across industries, in real time.
          </p>
        </motion.div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {demoCards.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
              className="group relative will-change-transform"
            >
              {/* Card Container */}
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 min-h-[480px] flex flex-col hover:-translate-y-2 hover:scale-[1.02] will-change-transform">
                {/* Animated gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${demo.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300 will-change-auto`}></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Title */}
                  <h3 
                    className="text-2xl md:text-3xl font-bold text-white mb-4 mt-2"
                    style={{ fontFamily: 'var(--font-raleway)' }}
                  >
                    {demo.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {demo.description}
                  </p>

                  {/* Highlight Box */}
                  <div className="bg-purple-950/40 border border-purple-500/20 rounded-2xl p-4 mb-6">
                    <p className="text-sm text-purple-200 italic leading-relaxed">
                      "{demo.highlight}"
                    </p>
                  </div>

                  {/* Industry Tag - Moved to bottom */}
                  <div className="mb-4">
                    <span className="inline-flex px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-medium">
                      {demo.industry} Voice Agent
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#1a0033] to-[#0f0020] text-white px-5 py-3 rounded-full text-sm font-semibold hover:from-[#2d0052] hover:to-[#1a0033] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-900/40 will-change-transform border border-purple-500/30">
                      <Headphones className="w-4 h-4" />
                      Listen Demo
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12 will-change-transform"
        >
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
             All demos are powered by real AI voice agents — multilingual, low-latency, and customized for every brand.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center will-change-transform"
        >
          <button className="bg-gradient-to-r from-[#1a0033] to-[#0f0020] text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-[#2d0052] hover:to-[#1a0033] transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-900/40 will-change-transform inline-flex items-center gap-3 border border-purple-500/30">
            <Headphones className="w-5 h-5" />
            Try a Live Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
