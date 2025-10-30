"use client";

import { motion } from 'framer-motion';
import { MessageSquare, Zap, DollarSign, Globe, Database, Shield, Plug, Users, Phone, Timer } from 'lucide-react';

const Features = () => {
  const featureBlocks = [
    {
      icon: MessageSquare,
      title: "Human-Like Conversations",
      description: "Engage in real, natural interactions — not robotic menus. KOEL AI agents understand tone, intent, and interruptions, delivering truly human-like dialogue."
    },
    {
      icon: Zap,
      title: "Purely Customized Solutions",
      description: "Get end-to-end tailored voice AI built specifically for your business. No need for an in-house AI team — we handle the models, workflows, and infrastructure so you can focus on growth."
    },
    {
      icon: DollarSign,
      title: "Flat All-Inclusive Pricing",
      description: "Enjoy transparent per-minute pricing that includes best-in-class LLM, TTS, and STT models — no hidden costs, no model-based surcharges, and no vendor lock-ins."
    },
    {
      icon: Timer,
      title: "Ultra-Low Latency (<300 ms)",
      description: "Respond instantly with sub-300 ms conversational speed — enabling smooth, real-time, human-like conversations at scale."
    },
    {
      icon: Globe,
      title: "Multilingual + Code-Mixed Fluency",
      description: "Speak naturally in 125+ languages and a library of 380+ voices including Hinglish, Marathi-English, and other regional blends all with authentic pronunciation and tone, ensuring global reach and breaking down language barriers."
    },
    {
      icon: Database,
      title: "Retrieval-Augmented Accuracy (RAG)",
      description: "Ground every response in your own business data — FAQs, documents, CRMs — for precise, policy-aligned answers with no hallucination risk."
    },
    {
      icon: Plug,
      title: "Advanced Integrations & APIs",
      description: "Connect seamlessly with 500+ tools and platforms — CRMs, ERPs, telephony, or no-code tools like Zapier, Make.com, and n8n — for intelligent task automation."
    },
    {
      icon: Users,
      title: "Human-in-the-Loop Transfer",
      description: "Enable instant warm transfers to live agents with full conversation summaries, ensuring a smooth hand-off and premium customer experience."
    },
    {
      icon: Phone,
      title: "Scalable Bulk Calling & Concurrency",
      description: "Handle thousands of AI-driven calls simultaneously without slowdown — perfect for campaigns, follow-ups, or enterprise-grade operations."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security & Compliance",
      description: "Built for reliability and trust — 99.99% uptime, SOC 2, HIPAA, PCI, and GDPR compliance with India/USA data residency options."
    }
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden -mt-40 pt-48">
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
            Unleash the Power of Voice Intelligence
          </h2>
          <p className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto">
            Experience how KOEL AI transforms voice automation into, natural intelligent interactions.
          </p>
        </motion.div>
        
        {/* Feature Cards - All 10 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {/* All Cards */}
          {featureBlocks.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: (index % 5) * 0.1 }}
                className="group relative will-change-transform"
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 min-h-[320px] flex flex-col">
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 will-change-auto"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4 p-2.5 bg-purple-500/10 rounded-xl w-fit group-hover:bg-purple-500/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'var(--font-raleway)' }}>
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <button className="mt-4 text-purple-400 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
