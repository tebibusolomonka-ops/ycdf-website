'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRight,
  Target,
  Eye,
  Shield,
  Lightbulb,
  Users,
  Rocket,
  Handshake,
  Sparkles,
  Calendar,
  Award,
  Building,
  Globe,
  Heart,
  TrendingUp,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const coreValues = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Upholding transparency and ethical conduct in all our operations and relationships.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing creative solutions and modern approaches to youth development challenges.',
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'Ensuring equal access and opportunity for all young Ethiopians regardless of background.',
  },
  {
    icon: Rocket,
    title: 'Impact',
    description: 'Measuring success through tangible, lasting positive change in communities and lives.',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description: 'Building meaningful partnerships with stakeholders to amplify our collective reach.',
  },
  {
    icon: Sparkles,
    title: 'Empowerment',
    description: 'Equipping youth with skills, confidence, and resources to lead their own transformation.',
  },
];

const teamMembers = [
  {
    name: 'Abebe Tadesse',
    role: 'Executive Director',
    initials: 'AT',
    gradient: 'from-teal to-teal-dark',
    bio: 'Over 15 years of experience in youth development and nonprofit leadership in Ethiopia.',
  },
  {
    name: 'Meron Hailu',
    role: 'Program Manager',
    initials: 'MH',
    gradient: 'from-gold to-gold-light',
    bio: 'Expert in program design and implementation with a focus on sustainable community impact.',
  },
  {
    name: 'Dawit Kebede',
    role: 'Volunteer Coordinator',
    initials: 'DK',
    gradient: 'from-teal-light to-teal',
    bio: 'Passionate about mobilizing communities and connecting volunteers with meaningful opportunities.',
  },
  {
    name: 'Selam Girma',
    role: 'Communications Lead',
    initials: 'SG',
    gradient: 'from-gold-light to-gold',
    bio: "Creative storyteller bridging the gap between YCDF's mission and the public through media.",
  },
];

const milestones = [
  {
    year: '2012',
    title: 'Foundation Established',
    description: 'YCDF was founded in Addis Ababa with a vision to empower Ethiopian youth.',
    icon: Building,
  },
  {
    year: '2014',
    title: 'First Leadership Program',
    description: 'Launched our flagship leadership development program reaching 200 young people.',
    icon: Award,
  },
  {
    year: '2016',
    title: 'Digital Literacy Initiative',
    description: 'Introduced digital skills training in partnership with technology companies.',
    icon: Lightbulb,
  },
  {
    year: '2018',
    title: 'National Expansion',
    description: 'Expanded programs to five major cities across Ethiopia with growing volunteer base.',
    icon: Globe,
  },
  {
    year: '2020',
    title: 'Community Resilience',
    description: 'Adapted programs for virtual delivery and launched community support initiatives.',
    icon: Heart,
  },
  {
    year: '2023',
    title: '10,000+ Youth Impacted',
    description: 'Reached a milestone of empowering over 10,000 young Ethiopians through our programs.',
    icon: TrendingUp,
  },
];

export default function AboutPage() {
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
              About <span className="gradient-text">YCDF</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Dreaming For Impact, Igniting Hope — empowering Ethiopian youth since 2012.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-teal">About</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-teal text-sm font-semibold tracking-wider uppercase">
              Our Purpose
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Mission & Vision
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              className="glass rounded-2xl p-8 md:p-10 group hover:bg-white/[0.08] transition-all duration-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={1}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target size={28} className="text-slate-900" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Empowering Ethiopian youth through comprehensive development programs that build
                leadership skills, foster innovation, and create pathways for meaningful civic
                participation and economic opportunity.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="glass rounded-2xl p-8 md:p-10 group hover:bg-white/[0.08] transition-all duration-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={2}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye size={28} className="text-navy" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                A generation of empowered, engaged, and innovative young Ethiopians leading
                positive change in their communities and shaping a brighter future for the nation
                through active participation and creative solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              What Guides Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Core Values
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                className="gradient-border rounded-2xl p-7 group hover:translate-y-[-4px] transition-all duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <value.icon size={24} className="text-teal" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-teal text-sm font-semibold tracking-wider uppercase">
              The People Behind YCDF
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Our Team
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="glass rounded-2xl p-6 text-center group hover:bg-white/[0.08] transition-all duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-5 text-2xl font-bold text-slate-900 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-teal text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">
              Our Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Key Milestones
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-teal/50 to-gold" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={milestone.year}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeUp}
                    custom={i * 0.5}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal border-4 border-navy z-10 shadow-lg shadow-teal/30" />

                    {/* Content */}
                    <div
                      className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'
                      }`}
                    >
                      <div
                        className={`glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-500 ${
                          isLeft ? '' : ''
                        }`}
                      >
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            isLeft ? 'md:justify-end' : ''
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                            <milestone.icon size={20} className="text-teal" />
                          </div>
                          <span className="text-gold font-bold text-lg font-serif">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-slate-900 font-semibold text-lg mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-slate-500 text-lg mb-8 max-w-2xl mx-auto">
              Join our community of changemakers and help us empower the next generation of
              Ethiopian leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/volunteer" className="btn-primary text-lg">
                Join as Volunteer
              </Link>
              <Link href="/contact" className="btn-outline text-lg">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
