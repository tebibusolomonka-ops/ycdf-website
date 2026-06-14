"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Heart,
  CheckCircle2,
} from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

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

const programs = [
  "Leadership Development",
  "Digital Literacy",
  "Entrepreneurship",
  "Community Engagement",
  "Civic Education",
  "Youth Mentorship",
];

export default function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="YCDF Logo" 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              A dynamic Ethiopian non-governmental organization committed to
              empowering young people through leadership, entrepreneurship, and
              community engagement.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://m.facebook.com/civiceducationethiopia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#1877F2] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#1DA1F2] hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#E1306C] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-teal-dark text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal/30 group-hover:bg-teal transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-6 text-sm uppercase tracking-wider">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-slate-600 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 font-semibold mb-6 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+251118685001"
                className="flex items-start gap-3 text-slate-600 hover:text-teal-dark transition-colors text-sm"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>+251 118 685001 / +251 911245183</span>
              </a>
              <a
                href="mailto:info@ycdfet.org"
                className="flex items-start gap-3 text-slate-600 hover:text-teal-dark transition-colors text-sm"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>info@ycdfet.org</span>
              </a>
              <span className="flex items-start gap-3 text-slate-600 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </span>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-slate-900 text-sm font-semibold mb-3">
                Stay Updated
              </h4>
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-teal-dark bg-teal-50 px-4 py-3 rounded-lg border border-teal/20">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span className="text-sm font-medium">Thanks for subscribing!</span>
                </div>
              ) : (
                <form 
                  className="flex gap-2" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubscribed(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-all shadow-sm"
                  />
                  <button
                    type="submit"
                    className="bg-teal hover:bg-teal-dark text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Youth and Cultural Development
            Foundation. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-teal" /> for impact
          </p>
        </div>
      </div>
    </footer>
  );
}
