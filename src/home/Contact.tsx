"use client";

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Linkedin, Twitter, Youtube, Github, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwaZqvU6doraQ75cGRVph8dWFCb0KuIh9DSkZPsdKXgW8PJ5Y4cjJ8Zr-g0v6L0HLO3/exec';
    
    try {
      // Use URLSearchParams instead of FormData for better CORS compatibility
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important: Allows cross-origin requests
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });
      
      // Note: With no-cors mode, we can't read the response, so we assume success
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      alert('✅ Thank you! Your message has been sent. We will contact you soon.');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ Oops! Something went wrong. Please try again or email us directly at contact@koelai.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
    { name: 'GitHub', icon: Github, url: '#' }
  ];

  const newLocal = "Tell us what you're looking for.....";
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/3 -left-1/4 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/3 -right-1/4 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[200px]"></div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-6 will-change-transform"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-thin mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            Let's Make Your Business Smarter with <br />
            <span className="text-4xl md:text-5xl lg:text-6xl inline-block mt-2">Voice AI - Together</span>
          </h2>
          <p className="text-xl md:text-xl text-white font-light max-w-4xl mx-auto leading-relaxed">
            Have a project in mind? Whether you're exploring automation, custom AI agents or full-scale integrations — our team is ready to help you create something extraordinary.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left Column - Contact Info & Demo Card */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="will-change-transform"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10">
                {/* Intro */}
                <h3 
                  className="text-2xl md:text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: 'var(--font-raleway)' }}
                >
                  We'd love to hear from you.
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Reach out for demos, partnership opportunitie or just to learn how KOEL AI can transform your business communication.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Address</p>
                    <p className="text-white font-medium">Pune, Maharashtra, India</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:contact@koelai.com" className="text-white font-medium hover:text-purple-400 transition-colors">
                      contact@koelai.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone / WhatsApp</p>
                    <a href="tel:+917721889978" className="text-white font-medium hover:text-purple-400 transition-colors">
                      +91 7721889978
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Available</p>
                    <p className="text-white font-medium">Mon – Sat | 9:00 AM – 7:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4">🌐 Follow Us</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 will-change-transform"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                      </a>
                    );
                  })}
                </div>
              </div>
              </div>
            </motion.div>

            {/* Book Demo Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="will-change-transform"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-10.5 border border-white/10">
                {/* <h3 
                  className="text-xl md:text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: 'var(--font-raleway)' }}
                >
                  📅 Book a Free Product Demo
                </h3> */}

                <a
                  href="https://calendar.app.google/iAzMj5pHaSAf62H48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-[#1a0033] to-[#0f0020] text-white px-6 py-3 rounded-full text-sm font-semibold hover:from-[#2d0052] hover:to-[#1a0033] transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-900/40 will-change-transform border border-purple-500/30 text-center"
                >
                  Schedule Your Free Demo Now →
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="will-change-transform"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10">
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-raleway)' }}
              >
                Send us a message 🚀
              </h3>
              <p className="text-gray-400 mb-8">Fill out the form and we'll get back to you soon.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder={newLocal}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#1a0033] to-[#0f0020] text-white px-6 py-4 rounded-full text-base font-semibold hover:from-[#2d0052] hover:to-[#1a0033] transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-900/40 will-change-transform border border-purple-500/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Below Form Note */}
                <p className="text-center text-sm text-gray-400 mt-4">
                  We usually reply within 24 hours. Let's make something amazing.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="text-center mt-20 will-change-transform"
        >
          {/* Top decorative line */}
          <div className="w-74 md:w-300 h-[1px] bg-white/40 mx-auto mb-6"></div>
          
          <p className="text-xl md:text-2xl text-gray-200 font-light italic">
            " Let's build the voice of your business — powered by KOEL AI "
          </p>
          
          {/* Bottom decorative line */}
          <div className="w-74 md:w-300 h-[1px] bg-white/40 mx-auto mt-6"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
