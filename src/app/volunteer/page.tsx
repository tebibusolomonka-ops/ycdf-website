'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRight,
  Heart,
  GraduationCap,
  Network,
  Megaphone,
  PenTool,
  Code,
  Users,
  BookOpen,
  Camera,
  Send,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const benefits = [
  {
    icon: Heart,
    title: 'Make Real Impact',
    description:
      'Contribute directly to youth empowerment programs that change lives and build communities across Ethiopia.',
    gradient: 'from-teal to-teal-dark',
  },
  {
    icon: GraduationCap,
    title: 'Gain Valuable Skills',
    description:
      'Develop leadership, communication, and project management skills through hands-on experience and training.',
    gradient: 'from-gold to-gold-light',
  },
  {
    icon: Network,
    title: 'Build Your Network',
    description:
      'Connect with like-minded changemakers, professionals, and community leaders who share your passion.',
    gradient: 'from-teal-light to-teal',
  },
];

const volunteerRoles = [
  {
    icon: Megaphone,
    title: 'Community Outreach',
    description: 'Help spread awareness about YCDF programs and engage with local communities.',
    commitment: '5-8 hrs/week',
  },
  {
    icon: PenTool,
    title: 'Content & Design',
    description: 'Create compelling visual content, social media posts, and marketing materials.',
    commitment: '4-6 hrs/week',
  },
  {
    icon: Code,
    title: 'Tech & Digital',
    description: 'Support digital literacy programs by teaching coding, design, and digital tools.',
    commitment: '6-10 hrs/week',
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Guide and support young people through one-on-one or group mentorship sessions.',
    commitment: '3-5 hrs/week',
  },
  {
    icon: BookOpen,
    title: 'Education & Training',
    description: 'Facilitate workshops on leadership, civic education, and entrepreneurship.',
    commitment: '5-8 hrs/week',
  },
  {
    icon: Camera,
    title: 'Event Support',
    description: 'Help organize, manage, and document YCDF events, summits, and workshops.',
    commitment: 'Flexible',
  },
];

const areasOfInterest = [
  'Community Outreach',
  'Content & Design',
  'Tech & Digital',
  'Mentorship',
  'Education & Training',
  'Event Support',
  'Other',
];

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Your time, talent, and passion can transform lives. Become a YCDF volunteer and be
              part of something extraordinary.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-teal">Volunteer</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Benefits */}
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
              Why Volunteer
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              The YCDF Experience
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="glass rounded-2xl p-8 text-center group hover:bg-white/[0.08] transition-all duration-500 hover:translate-y-[-4px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <benefit.icon size={30} className="text-slate-900" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
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
              Opportunities
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Available Roles
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, i) => (
              <motion.div
                key={role.title}
                className="gradient-border rounded-2xl p-6 group hover:translate-y-[-4px] transition-all duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                  <role.icon size={24} className="text-teal" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{role.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{role.description}</p>
                <div className="flex items-center gap-2 text-xs text-gold">
                  <CheckCircle2 size={14} />
                  <span>{role.commitment}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-teal text-sm font-semibold tracking-wider uppercase">
              Apply Now
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Volunteer Application
            </h2>
            <div className="accent-line mx-auto mt-4" />
            <p className="text-slate-500 mt-6 max-w-xl mx-auto">
              Fill out the form below and our volunteer coordinator will get back to you within 48
              hours.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-teal" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                  Application Submitted!
                </h3>
                <p className="text-slate-500 max-w-md mx-auto">
                  Thank you for your interest in volunteering with YCDF. Our team will review your
                  application and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-slate-900/5 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-slate-900/5 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251 9XX XXX XXX"
                      className="w-full bg-slate-900/5 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Area of Interest *
                    </label>
                    <select
                      name="areaOfInterest"
                      required
                      value={formData.areaOfInterest}
                      onChange={handleChange}
                      className="w-full bg-slate-900/5 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-slate-50">
                        Select an area
                      </option>
                      {areasOfInterest.map((area) => (
                        <option key={area} value={area} className="bg-slate-50">
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your motivation, relevant experience, or anything else you'd like us to know..."
                    className="w-full bg-slate-900/5 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-lg !py-4">
                  <Send size={20} />
                  Submit Application
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
