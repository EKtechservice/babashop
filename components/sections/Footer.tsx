'use client';

import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const quickLinks = ['Home', 'About Us', 'Our Services', 'Our Work', 'Our Team', 'Reviews', 'Blog', 'Contact'];
const serviceItems = ['Classic Haircuts', 'Skin Fades', 'Beard Trim', 'Hot Towel Shave', 'Hair & Beard Combos', 'Kids Haircuts'];

const socialLinks = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'X', href: '#', icon: X },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progressValue = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      setShowBackToTop(scrollTop > 600);
      setProgress(Math.min(Math.max(progressValue, 0), 100));
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <footer className="relative overflow-hidden border-t border-gold-400/40 bg-navy-950 text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-sm border border-gold-400/80 opacity-70" />
                <div className="absolute inset-[5px] bg-gradient-to-b from-gold-300 via-gold-400 to-gold-600" />
                <div className="absolute inset-[9px] border border-navy-950/70 bg-navy-900/80" />
                <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-navy-950/80" />
              </div>
              <div className="leading-none text-gold-300">
                <div className="font-serif text-[1.8rem] font-bold uppercase tracking-[0.12em]">PrimeCut</div>
                <div className="mt-1 text-[0.52rem] font-semibold tracking-[0.48em] text-slate-300">BARBERS</div>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Professional barbering with precision, personality, and attention to detail. From classic cuts and modern fades to beard grooming and hot towel shaves.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/80 bg-transparent text-gold-300 transition-all duration-200 hover:bg-gold-gradient hover:text-navy-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
              Quick Links
            </h3>
            <div className="mt-5 h-px w-12 bg-gold-400" />
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `#${link.toLowerCase().replace(/\s+/g, '-').replace(/us|our/gi, '').replace(/--/g, '-')}`.replace(/#$/,'')}
                    className="group relative inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-gold-300"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-400 transition-transform duration-200 group-hover:translate-x-0.5" />
                    <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold-400 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
              Our Services
            </h3>
            <div className="mt-5 h-px w-12 bg-gold-400" />
            <ul className="mt-6 space-y-3">
              {serviceItems.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="group relative inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-gold-300"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-400 transition-transform duration-200 group-hover:translate-x-0.5" />
                    <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold-400 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
              Contact Us
            </h3>
            <div className="mt-5 h-px w-12 bg-gold-400" />

            <div className="mt-6 space-y-5 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold-400/80 bg-gold-gradient text-navy-950">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <a href="tel:+11236346544" className="transition-colors hover:text-gold-300">
                  (123)634 6544
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold-400/80 bg-gold-gradient text-navy-950">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <a href="mailto:info@primecutbarbers.com" className="transition-colors hover:text-gold-300">
                  info@primecutbarbers.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold-400/80 bg-gold-gradient text-navy-950">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <span>20? N St Lompoc, CA 93436 United States</span>
              </div>

              <div className="space-y-2 pt-2">
                <p>
                  <span className="font-semibold text-gold-300">Mon–Sat:</span> 8:00 AM – 6:00 PM
                </p>
                <p>
                  <span className="font-semibold text-gold-300">Sun:</span> 10:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 PrimeCut Barbers. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-gold-300">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="transition-colors hover:text-gold-300">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/80 bg-navy-950 text-gold-300 shadow-[0_18px_40px_rgba(212,164,55,0.2)] transition-all duration-300 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <svg width="56" height="56" viewBox="0 0 56 56" className="absolute inset-0 -rotate-90">
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="3"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="rgba(212,164,55,1)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 0.15s linear' }}
          />
        </svg>
        <span className="relative text-xl font-bold">↑</span>
      </button>
    </footer>
  );
}
