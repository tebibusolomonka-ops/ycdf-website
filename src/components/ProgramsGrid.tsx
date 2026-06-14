"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Monitor, Rocket, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Leadership Development",
    description: "Building the next generation of Ethiopian leaders through immersive workshops and mentorship.",
    icon: Star,
    color: "text-gold",
    bg: "bg-gold/20",
  },
  {
    title: "Digital Literacy",
    description: "Equipping youth with essential digital skills required for the modern global economy.",
    icon: Monitor,
    color: "text-teal-dark",
    bg: "bg-teal/20",
  },
  {
    title: "Entrepreneurship",
    description: "Supporting young innovators to develop viable business ideas and sustainable enterprises.",
    icon: Rocket,
    color: "text-teal-dark",
    bg: "bg-teal/20",
  },
  {
    title: "Community Engagement",
    description: "Mobilizing youth for active participation in civic life and local community development.",
    icon: Users,
    color: "text-slate-700",
    bg: "bg-slate-200",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ProgramsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-line w-8" />
            <span className="text-teal-dark font-semibold tracking-wider uppercase text-sm">What We Do</span>
            <div className="accent-line w-8" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Core <span className="gradient-text">Programs</span>
          </h2>
          <p className="max-w-2xl text-slate-600 text-lg">
            We offer comprehensive initiatives designed to address the specific needs and aspirations of Ethiopian youth.
          </p>
        </div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="group h-full">
                <div className="gradient-border h-full bg-white relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal/10">
                  <div className="p-8 h-full flex flex-col relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${program.bg} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <Icon className={program.color} size={28} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-dark transition-colors">
                      {program.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-8 flex-grow">
                      {program.description}
                    </p>
                    
                    <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-dark mt-auto group/link">
                      Learn More 
                      <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Subtle background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link href="/programs" className="btn-outline">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
