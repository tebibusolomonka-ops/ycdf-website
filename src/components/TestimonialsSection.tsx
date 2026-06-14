"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Kefeta and the team provided me with the support and strength to look beyond what was around me and face new challenges and utilize opportunities.",
    name: "Dibora Besufikad",
    role: "Program Participant",
    initials: "DB",
    color: "bg-teal",
    image: "/testimonials/diborah-besufikad.png"
  },
  {
    quote: "The kefeta life skill training proved to be a turning point for me.",
    name: "Meron Sorena",
    role: "Program Participant",
    initials: "MS",
    color: "bg-gold",
    image: "/testimonials/meron-sorena.png"
  },
  {
    quote: "Through Kefeta team members support I've been recruited in one of the private sectors to sustain my life and to help my vulnerable families.",
    name: "Aster Asrat",
    role: "Program Participant",
    initials: "AA",
    color: "bg-teal-dark",
    image: "/testimonials/aster-asrat.png"
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="accent-line w-8" />
            <span className="text-teal-dark font-semibold tracking-wider uppercase text-sm">Testimonials</span>
            <div className="accent-line w-8" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Stories of <span className="text-gold">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="glass p-8 rounded-2xl relative flex flex-col h-full shadow-lg border-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal/10 group cursor-default"
            >
              <Quote size={40} className="text-teal/20 absolute top-6 right-6 transition-colors duration-300 group-hover:text-teal/40" />
              
              <div className="flex-grow mb-8 relative z-10">
                <p className="text-slate-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                {testimonial.image ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-md relative shrink-0">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className={`w-12 h-12 rounded-full shrink-0 ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                    {testimonial.initials}
                  </div>
                )}
                <div>
                  <h4 className="text-slate-900 font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a 
            href="/documents/YCDF-Our-Success-Story.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 font-medium"
          >
            Read More Success Stories
          </a>
        </div>
      </div>
    </section>
  );
}
