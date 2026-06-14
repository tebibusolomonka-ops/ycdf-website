'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

const Facebook = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const Twitter = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const Instagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+251 118 685001', '+251 911 245183'],
    action: 'tel:+251118685001',
    color: 'teal',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@ycdfet.org'],
    action: 'mailto:info@ycdfet.org',
    color: 'gold',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['Addis Ababa, Ethiopia'],
    action: null,
    color: 'teal',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Mon – Fri: 8:30 AM – 5:30 PM', 'Sat: 9:00 AM – 1:00 PM'],
    action: null,
    color: 'gold',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Have questions, want to partner, or just want to say hello? We'd love to hear from
              you.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-teal">Contact</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — Left */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="glass rounded-2xl p-8 md:p-10">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
                <p className="text-slate-500 text-sm mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-teal" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                      Thank you for reaching out. We'll respond to your message as soon as
                      possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full name"
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

                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        className="w-full bg-slate-900/5 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        className="w-full bg-slate-900/5 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-lg !py-4"
                    >
                      <Send size={20} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info Cards — Right */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  className="glass rounded-2xl p-6 group hover:bg-white/[0.08] transition-all duration-500"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        info.color === 'teal'
                          ? 'bg-teal/10 group-hover:bg-teal/20'
                          : 'bg-gold/10 group-hover:bg-gold/20'
                      } transition-colors`}
                    >
                      <info.icon
                        size={22}
                        className={info.color === 'teal' ? 'text-teal' : 'text-gold'}
                      />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold mb-1.5">{info.title}</h3>
                      {info.details.map((detail) =>
                        info.action ? (
                          <a
                            key={detail}
                            href={info.action}
                            className="block text-slate-500 text-sm hover:text-teal transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={detail} className="text-slate-500 text-sm">
                            {detail}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Media */}
              <motion.div
                className="glass rounded-2xl p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={4}
              >
                <h3 className="text-slate-900 font-semibold mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://m.facebook.com/civiceducationethiopia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#1DA1F2] hover:text-white transition-all transform hover:-translate-y-1"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#E1306C] hover:text-white transition-all transform hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-all transform hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="glass rounded-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="relative h-72 md:h-96 bg-gradient-to-br from-slate-100 via-white to-slate-100">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Center pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <MapPin size={32} className="text-teal" />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-1">YCDF Office</h3>
                  <p className="text-slate-500 text-sm">Addis Ababa, Ethiopia</p>
                  <a
                    href="https://maps.google.com/?q=Addis+Ababa+Ethiopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal text-sm mt-3 hover:text-teal-light transition-colors"
                  >
                    Open in Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
