"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Heart, Handshake } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-teal-dark to-teal border-t border-teal/20" ref={ref}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/20 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Particle dots pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md mb-8 border border-white/30 shadow-lg">
            <Heart className="text-gold-light" size={32} />
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Make a <span className="text-gold-light">Difference?</span>
          </h2>
          
          <p className="text-xl text-teal-50 mb-12 max-w-2xl mx-auto">
            Join thousands of young Ethiopians and partners building a brighter, more innovative future for our communities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/volunteer" className="btn-gold w-full sm:w-auto justify-center text-lg shadow-xl shadow-gold/20 !text-slate-900">
              Become a Volunteer
              <Heart size={20} className="fill-slate-900" />
            </Link>
            <Link href="/contact" className="btn-outline w-full sm:w-auto justify-center text-lg bg-teal-dark/30 backdrop-blur-sm !text-white !border-white/30 hover:!bg-white hover:!text-teal-dark">
              Partner With Us
              <Handshake size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
