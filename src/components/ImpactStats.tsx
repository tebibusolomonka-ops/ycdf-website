"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function: easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOut * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { value: 48, suffix: "K+", label: "Youth Reached", color: "text-slate-900", ringColor: "stroke-teal" },
  { value: 150, suffix: "+", label: "Partners", color: "text-slate-900", ringColor: "stroke-gold" },
  { value: 50, suffix: "K", label: "STEM Support", color: "text-slate-900", ringColor: "stroke-teal-dark" },
  { value: 5, suffix: " Mil", label: "Trees Planted", color: "text-slate-900", ringColor: "stroke-gold" },
];

export default function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-teal/5 to-teal/10" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-teal" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Impact in <span className="text-gold">Numbers</span>
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg">
            Measurable results that demonstrate our commitment to youth empowerment across Ethiopia.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Circular decoration */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-6">
                <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    className="stroke-teal/10"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    className={`${stat.ringColor} transition-all duration-1500 ease-out opacity-0 group-hover:opacity-100`}
                    strokeWidth="4"
                    strokeDasharray="289"
                    strokeDashoffset={isInView ? "72" : "289"}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                
                <div className="glass w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-lg border-white">
                  <div className={`text-3xl md:text-5xl font-bold ${stat.color}`}>
                    <Counter end={stat.value} />
                    <span className="text-teal-dark ml-1">{stat.suffix}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 tracking-wide">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
