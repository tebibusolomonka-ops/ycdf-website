'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRight,
  Crown,
  Monitor,
  Briefcase,
  Users,
  BookOpen,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Heart,
  Handshake,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const programs = [
  {
    icon: Crown,
    title: 'Leadership Development',
    description:
      'Building the next generation of Ethiopian leaders through workshops, mentorship, and hands-on experience. Our leadership program cultivates critical thinking, public speaking, and decision-making skills.',
    achievements: [
      '500+ graduates trained in leadership skills',
      'Annual Youth Leadership Summit with 200+ participants',
      'Partnerships with 15 organizations',
    ],
    color: 'teal',
  },
  {
    icon: Monitor,
    title: 'Digital Literacy',
    description:
      'Equipping youth with essential digital skills for the modern economy. From basic computer literacy to advanced coding, we prepare young Ethiopians for the digital future.',
    achievements: [
      '1,200+ youth trained in digital skills',
      'Computer labs established in 5 communities',
      '85% employment rate among graduates',
    ],
    color: 'gold',
  },
  {
    icon: Briefcase,
    title: 'Entrepreneurship',
    description:
      'Supporting young innovators to develop business ideas and create sustainable enterprises. We provide mentorship, seed funding guidance, and business development workshops.',
    achievements: [
      '150+ businesses incubated',
      '40 startups receiving ongoing mentorship',
      '$200K+ in facilitated funding connections',
    ],
    color: 'teal',
  },
  {
    icon: Users,
    title: 'Community Engagement',
    description:
      'Mobilizing youth for active participation in civic life and community development. We organize community service projects, clean-up drives, and awareness campaigns.',
    achievements: [
      '3,000+ volunteer hours contributed annually',
      '25 community projects completed',
      '10 neighborhoods positively impacted',
    ],
    color: 'gold',
  },
  {
    icon: BookOpen,
    title: 'Civic Education',
    description:
      'Promoting democratic values, civic responsibility, and informed citizenship among youth. Our curriculum covers governance, rights, and community participation.',
    achievements: [
      '2,000+ youth trained in civic awareness',
      'Curriculum adopted by 8 community centers',
      'Partnership with local government bodies',
    ],
    color: 'teal',
  },
  {
    icon: UserCheck,
    title: 'Youth Mentorship',
    description:
      'Connecting experienced professionals with young people for guidance and career development. Our one-on-one mentorship program creates lasting relationships for growth.',
    achievements: [
      '300+ mentor-mentee pairs established',
      '90% mentee satisfaction rate',
      'Mentors from 20+ professional fields',
    ],
    color: 'gold',
  },
];

export default function ProgramsPage() {
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
              Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Comprehensive development programs designed to equip Ethiopian youth with the skills
              and opportunities they need to thrive.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-teal">Programs</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Programs Grid */}
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
              What We Do
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Transformative Programs
            </h2>
            <div className="accent-line mx-auto mt-4" />
            <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">
              Each program is carefully designed to address specific needs of Ethiopian youth while
              building a comprehensive foundation for personal and professional growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                className="gradient-border rounded-2xl p-8 group hover:translate-y-[-4px] transition-all duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                      program.color === 'teal'
                        ? 'bg-gradient-to-br from-teal to-teal-dark'
                        : 'bg-gradient-to-br from-gold to-gold-light'
                    } group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <program.icon
                      size={28}
                      className={program.color === 'teal' ? 'text-slate-900' : 'text-navy'}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-5">{program.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2.5 mb-6">
                      {program.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              program.color === 'teal' ? 'text-teal' : 'text-gold'
                            }`}
                          />
                          <span className="text-slate-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/volunteer"
                      className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${
                        program.color === 'teal'
                          ? 'text-teal hover:text-teal-dark'
                          : 'text-gold hover:text-gold-dark'
                      }`}
                    >
                      Get Involved <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'Youth Impacted' },
              { value: '6', label: 'Active Programs' },
              { value: '5', label: 'Cities Reached' },
              { value: '500+', label: 'Volunteers' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <span className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</span>
                <p className="text-slate-500 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.1),transparent_70%)]" />
            <div className="relative">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Be Part of the Change
              </h2>
              <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
                Whether you want to volunteer your time, partner with us, or support our programs —
                every contribution helps shape a brighter future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/volunteer" className="btn-primary text-lg">
                  <Heart size={20} />
                  Volunteer With Us
                </Link>
                <Link href="/contact" className="btn-outline text-lg">
                  <Handshake size={20} />
                  Partner With Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
