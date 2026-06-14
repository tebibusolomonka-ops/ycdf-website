'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Calendar, MapPin, Eye } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const categories = ['All', 'Events', 'Workshops', 'Community', 'Team'];

const galleryItems = [
  {
    id: 1,
    title: 'Youth Leadership Summit 2024',
    category: 'Events',
    date: 'November 2024',
    location: 'Addis Ababa Convention Center',
    gradient: 'from-teal/40 via-teal-dark/30 to-navy-lighter',
    tall: true,
  },
  {
    id: 2,
    title: 'Digital Skills Workshop',
    category: 'Workshops',
    date: 'October 2024',
    location: 'YCDF Training Center',
    gradient: 'from-gold/30 via-gold-light/20 to-navy-lighter',
    tall: false,
  },
  {
    id: 3,
    title: 'Community Clean-up Drive',
    category: 'Community',
    date: 'September 2024',
    location: 'Bole Sub-City',
    gradient: 'from-teal-light/30 via-teal/20 to-navy-light',
    tall: false,
  },
  {
    id: 4,
    title: 'Team Building Retreat',
    category: 'Team',
    date: 'August 2024',
    location: 'Bishoftu',
    gradient: 'from-gold-light/30 via-gold/20 to-navy-lighter',
    tall: false,
  },
  {
    id: 5,
    title: 'Entrepreneurship Bootcamp',
    category: 'Workshops',
    date: 'July 2024',
    location: 'Innovation Hub, AA',
    gradient: 'from-teal/30 via-teal-dark/20 to-navy-light',
    tall: true,
  },
  {
    id: 6,
    title: 'Civic Education Forum',
    category: 'Events',
    date: 'June 2024',
    location: 'Addis Ababa University',
    gradient: 'from-gold/40 via-teal/20 to-navy-lighter',
    tall: false,
  },
  {
    id: 7,
    title: 'Volunteer Appreciation Day',
    category: 'Team',
    date: 'May 2024',
    location: 'YCDF Office',
    gradient: 'from-teal-light/40 via-gold/20 to-navy-light',
    tall: false,
  },
  {
    id: 8,
    title: 'Tree Planting Campaign',
    category: 'Community',
    date: 'April 2024',
    location: 'Entoto Mountains',
    gradient: 'from-teal/50 via-teal-dark/30 to-navy-lighter',
    tall: true,
  },
  {
    id: 9,
    title: 'Coding for Kids Workshop',
    category: 'Workshops',
    date: 'March 2024',
    location: 'YCDF Lab',
    gradient: 'from-gold-light/40 via-teal/20 to-navy-light',
    tall: false,
  },
  {
    id: 10,
    title: 'Annual Gala Dinner',
    category: 'Events',
    date: 'February 2024',
    location: 'Skylight Hotel',
    gradient: 'from-gold/50 via-gold-light/30 to-navy-lighter',
    tall: false,
  },
  {
    id: 11,
    title: 'Mentorship Program Launch',
    category: 'Events',
    date: 'January 2024',
    location: 'YCDF Headquarters',
    gradient: 'from-teal/40 via-gold/20 to-navy-light',
    tall: false,
  },
  {
    id: 12,
    title: 'Youth Community Service Day',
    category: 'Community',
    date: 'December 2023',
    location: 'Multiple Locations',
    gradient: 'from-teal-dark/40 via-teal/20 to-navy-lighter',
    tall: true,
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              Our <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Explore moments of impact, community, and growth through our programs and events.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-teal">Gallery</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Filter Tabs + Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-teal to-teal-dark text-slate-900 shadow-lg shadow-teal/20'
                    : 'bg-slate-900/5 text-slate-500 hover:text-slate-900 hover:bg-slate-900/10 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="break-inside-avoid group"
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden cursor-pointer ${
                      item.tall ? 'h-80 sm:h-96' : 'h-56 sm:h-64'
                    }`}
                  >
                    {/* Gradient Background (placeholder for image) */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                    />
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }} />
                    {/* Camera icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                      <Eye size={48} className="text-slate-900" />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/60 transition-all duration-500" />

                    {/* Content overlay (always visible at bottom) */}
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-white/90 via-white/60 to-transparent">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium bg-teal/20 text-teal-light mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-slate-900 font-semibold text-lg leading-tight mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4 text-slate-500 text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
