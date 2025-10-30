"use client";

import { motion } from 'framer-motion';
import { Headphones, Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Demo = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState<{ [key: number]: number }>({});
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  const demoCards = [
    {
      title: "Listen KOEL AI In",
      subtitle: "English(India)",
      industry: "Business",
      description: "Hear our Al voice agent introduce KOEL Al in fluent English - explaining how businesses can autornate conversations, boost productivity and improve customer engagement instantly.",
      highlight: "Let me show you how KOEL Al can transform your business conversations - just like talking to a real person",
      audioUrl: "/audio/English_India.mp3",
      gradient: "from-gray-900/30 to-black/40"
    },
    {
      title: "Listen KOEL AI In",
      subtitle: "Hindi + English (Hinglish)",
      industry: "Hinglish",
      description: "Experience KOEL Al's natural Hinglish fluency where the agent blends Hindi and English seamlessly while explaining how KOEL Al automates calls, boosts sales and engages customers 24×7.",
      highlight: "Sir/Ma'am, KOEL Al aapke business ke calls handle karate hai-smartly, bina rukhe, bilkul human-jaise.",
      audioUrl: "/audio/Hindi_India.mp3",
      gradient: "from-gray-900/30 to-black/40"
    },
    {
      title: "Listen KOEL AI In",
      subtitle: "Marathi + English",
      industry: "Marathi",
      description: "Listen to KOEL Al converse naturally in Marathi mixed with English - describing how it helps businesses save time, connect faster with customers, and schedule product demos effortlessly.",
      highlight: "KOEL Al tumchya business sathi calls manage karte smart, fast ani natural voice madhe.",
      audioUrl: "/audio/Marathi_India.mp3",
      gradient: "from-gray-900/30 to-black/40"
    }
  ];

  const handlePlayPause = async (index: number) => {
    const audio = audioRefs.current[index];
    
    if (!audio) return;

    if (playingIndex === index) {
      // Pause current audio
      audio.pause();
      setPlayingIndex(null);
    } else {
      // Pause any currently playing audio
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex]?.pause();
      }
      
      // Play new audio
      try {
        await audio.play();
        setPlayingIndex(index);
      } catch (error) {
        console.error('Error playing audio:', error);
        alert('Unable to play audio. The browser may not support .m4a format. Please convert to .mp3 format.');
        setPlayingIndex(null);
      }
    }
  };

  const handleTimeUpdate = (index: number) => {
    const audio = audioRefs.current[index];
    if (audio) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      setProgress(prev => ({ ...prev, [index]: progressPercent }));
    }
  };

  const handleAudioEnd = (index: number) => {
    setPlayingIndex(null);
    setProgress(prev => ({ ...prev, [index]: 0 }));
  };

  useEffect(() => {
    // Initialize audio elements
    demoCards.forEach((demo, index) => {
      if (!audioRefs.current[index]) {
        const audio = new Audio();
        
        // Set the source
        audio.src = demo.audioUrl;
        audio.preload = 'metadata';
        
        // Add event listeners
        audio.addEventListener('timeupdate', () => handleTimeUpdate(index));
        audio.addEventListener('ended', () => handleAudioEnd(index));
        audio.addEventListener('error', (e) => {
          console.error(`Audio error for ${demo.title}:`, e);
          alert(`Unable to load audio file. Please check if the file exists at: ${demo.audioUrl}`);
        });
        
        audioRefs.current[index] = audio;
      }
    });

    // Cleanup
    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.removeEventListener('timeupdate', () => {});
          audio.removeEventListener('ended', () => {});
          audio.removeEventListener('error', () => {});
        }
      });
    };
  }, []);

  return (
    <section id="demos" className="relative py-32 overflow-hidden">
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
            Hear Koel AI Speak in Every Language 
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
            Listen to KOEL AI converse fluently across Indian and global languages with the same human like clarity.
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
                  <div className="mb-4 mt-2">
                    <h3 
                      className="text-2xl md:text-3xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-raleway)' }}
                    >
                      {demo.title}
                    </h3>
                    <p className="text-lg md:text-xl text-purple-300 font-medium mt-1">
                      {demo.subtitle}
                    </p>
                  </div>

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
                    {/* Listen Demo Button with Waveform Animation */}
                    <button 
                      onClick={() => handlePlayPause(index)}
                      className="relative flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#1a0033] to-[#0f0020] text-white px-5 py-3 rounded-full text-sm font-semibold hover:from-[#2d0052] hover:to-[#1a0033] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-900/40 will-change-transform border border-purple-500/30 overflow-hidden"
                    >
                      {/* Animated Waveform Background - Only shows when playing */}
                      {playingIndex === index && (
                        <div className="absolute inset-0 flex items-center justify-center gap-[3px] opacity-30">
                          {[...Array(40)].map((_, i) => (
                            <div
                              key={i}
                              className="w-[2px] bg-purple-400 rounded-full"
                              style={{
                                height: `${Math.random() * 60 + 20}%`,
                                animationName: 'wave',
                                animationDuration: `0.${Math.floor(Math.random() * 5) + 4}s`,
                                animationTimingFunction: 'ease-in-out',
                                animationIterationCount: 'infinite',
                                animationDelay: `${i * 0.02}s`
                              }}
                            ></div>
                          ))}
                        </div>
                      )}
                      
                      {/* Progress Bar Overlay */}
                      <div 
                        className="absolute inset-0 bg-purple-600/20 transition-all duration-100 ease-linear"
                        style={{ 
                          width: `${progress[index] || 0}%`,
                          transformOrigin: 'left'
                        }}
                      ></div>
                      
                      {/* Button Content - Hidden when playing */}
                      <div className={`relative z-10 flex items-center gap-2 transition-opacity duration-300 ${playingIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                        <Headphones className="w-4 h-4" />
                        Listen Demo
                      </div>
                    </button>
                    
                    {/* Play/Pause Toggle Button */}
                    <button 
                      onClick={() => handlePlayPause(index)}
                      className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                    >
                      {playingIndex === index ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  
                  {/* Keyframes for waveform animation */}
                  <style jsx>{`
                    @keyframes wave {
                      0%, 100% {
                        transform: scaleY(0.5);
                      }
                      50% {
                        transform: scaleY(1);
                      }
                    }
                  `}</style>
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
          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-full mx-auto px-4 whitespace-nowrap overflow-x-auto">All demos are powered by real AI voice agents - multilingual, low-latency, and customized for every brand.</p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center will-change-transform"
        >
          <button className="bg-gradient-to-r from-[#060010] to-[#08000e] text-white px-7 py-2.5 rounded-full text-sm font-medium hover:from-[#390159] hover:to-[#480170] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25">
            Explore More Languages
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
