"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe } from "lucide-react";

const galleryImages = [
  "/gallery/1.jpg", 
  "/gallery/2.jpg", 
  "/gallery/3.jpg", 
  "/gallery/4.jpg", 
  "/gallery/5.jpg", 
];

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-dark/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side: Abstract Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] w-full"
          >
            {/* Animated Image Slider */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={galleryImages[currentImage]}
                  alt={`YCDF Gallery Image ${currentImage + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Optional dark gradient overlay to make the floating quote pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-0" />
            </div>
            
            {/* Slider Dots Indicator */}
            <div className="absolute bottom-32 left-8 z-20 flex gap-2">
              {galleryImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentImage ? 'w-6 bg-gold' : 'w-2 bg-white/50'}`}
                />
              ))}
            </div>
            
            {/* Bottom Right Text Badge (Contains the full quote) */}
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ y: [0, 10, 0], rotate: 0 }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/90 backdrop-blur-xl rounded-full border border-gold/20 z-10 hidden md:flex flex-col items-center justify-center shadow-2xl p-8 text-center"
            >
               <Sparkles className="text-gold mb-2 w-8 h-8" strokeWidth={1.5} />
               <span className="font-bold text-slate-800 text-sm uppercase tracking-widest leading-tight">Empowering<br/>Youth</span>
               <span className="text-slate-500 text-xs font-medium my-1">to become the</span>
               <span className="font-serif text-gold-600 text-xl italic leading-tight">Architects of<br/>Tomorrow's<br/>Ethiopia</span>
               <div className="absolute inset-2 rounded-full border border-dashed border-gold/30 pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Right side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-line" />
              <span className="text-teal-dark font-semibold tracking-wider uppercase text-sm">Who We Are</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Building a Brighter Future for <span className="text-gold">Ethiopian Youth</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed font-medium">
              The Youth and Cultural Development Foundation (YCDF) is a dynamic, independent, non-partisan, not-for-profit & non-governmental organization. We are deeply committed to empowering young people throughout Ethiopia.
            </p>
            
            <p className="text-slate-500 mb-10 leading-relaxed">
              Through comprehensive programs in leadership, digital literacy, entrepreneurship, and community engagement, we provide the tools, resources, and mentorship necessary for youth to realize their full potential and drive positive social change in their communities.
            </p>
            
            <Link href="/about" className="btn-primary group shadow-lg shadow-teal/20">
              Learn Our Story
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
