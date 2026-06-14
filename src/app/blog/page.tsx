'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  User,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const blogPosts = [
  {
    id: 1,
    title: 'Youth Leadership Summit 2025: Shaping Tomorrow\'s Leaders',
    excerpt:
      'Over 300 young Ethiopians gathered for our annual leadership summit, sharing ideas and building networks for a brighter future. The event featured keynote speakers from across Africa.',
    category: 'Events',
    date: 'June 5, 2025',
    readTime: '5 min read',
    author: 'Abebe Tadesse',
    gradient: 'from-teal/40 via-teal-dark/20 to-navy-lighter',
    categoryColor: 'teal',
  },
  {
    id: 2,
    title: 'Digital Skills Workshop Empowers 200 Youth',
    excerpt:
      'Our latest digital literacy workshop equipped participants with web development, graphic design, and data analysis skills critical for today\'s job market.',
    category: 'Programs',
    date: 'May 22, 2025',
    readTime: '4 min read',
    author: 'Meron Hailu',
    gradient: 'from-gold/30 via-gold-light/15 to-navy-lighter',
    categoryColor: 'gold',
  },
  {
    id: 3,
    title: 'Community Clean-up Drive: 500 Volunteers Unite',
    excerpt:
      'YCDF organized a city-wide clean-up campaign across three sub-cities of Addis Ababa, demonstrating the power of youth-led community engagement and environmental stewardship.',
    category: 'Community',
    date: 'May 10, 2025',
    readTime: '3 min read',
    author: 'Dawit Kebede',
    gradient: 'from-teal-light/30 via-teal/15 to-navy-light',
    categoryColor: 'teal',
  },
  {
    id: 4,
    title: 'New Partnership with Ethiopian Ministry of Youth',
    excerpt:
      'We are thrilled to announce our strategic partnership with the Ministry of Youth and Sports, expanding our programs to reach underserved regions across the country.',
    category: 'News',
    date: 'April 28, 2025',
    readTime: '3 min read',
    author: 'Selam Girma',
    gradient: 'from-gold-light/35 via-teal/15 to-navy-lighter',
    categoryColor: 'gold',
  },
  {
    id: 5,
    title: 'Volunteer Spotlight: Meet Tigist Alemayehu',
    excerpt:
      'Tigist has dedicated over 1,000 hours to YCDF programs, mentoring dozens of young women in STEM fields. Her story inspires our community every day.',
    category: 'People',
    date: 'April 15, 2025',
    readTime: '6 min read',
    author: 'Selam Girma',
    gradient: 'from-teal/35 via-gold/15 to-navy-light',
    categoryColor: 'teal',
  },
  {
    id: 6,
    title: 'Annual Report 2024: A Year of Impact',
    excerpt:
      'Our 2024 annual report highlights the milestones achieved — from impacting 10,000+ youth to launching new programs in digital entrepreneurship and civic engagement.',
    category: 'Reports',
    date: 'March 30, 2025',
    readTime: '8 min read',
    author: 'Abebe Tadesse',
    gradient: 'from-gold/40 via-gold-light/20 to-navy-lighter',
    categoryColor: 'gold',
  },
];

export default function BlogPage() {
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
              News & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Stories of impact, community highlights, and the latest from YCDF programs.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-teal">Blog</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                className="glass rounded-2xl overflow-hidden group hover:bg-white/[0.08] transition-all duration-500 hover:translate-y-[-4px] flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                {/* Image Placeholder */}
                <div className={`relative h-48 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.05) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-500" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${
                        post.categoryColor === 'teal'
                          ? 'bg-teal/20 text-teal-light'
                          : 'bg-gold/20 text-gold-light'
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-teal-light transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-2 text-xs text-slate-500">
                      <User size={12} />
                      {post.author}
                    </span>
                    <button className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:text-teal-light transition-colors">
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Stay in the Loop
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              Subscribe to our newsletter to receive the latest updates, stories, and opportunities
              directly in your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-slate-900/5 border border-slate-200 rounded-full px-6 py-3 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
