'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Our Barbers', href: '#team', id: 'team' },
  { label: 'Reviews', href: '#reviews', id: 'reviews' },
  { label: 'Blog', href: '#blog', id: 'blog' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const serviceItems = [
  'Classic Haircuts',
  'Skin Fades',
  'Beard Trim & Shape',
  'Hot Towel Shave',
  'Hair & Beard Combo',
  'Kids Haircuts',
];

function BarberLogo() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative mb-1 flex h-9 w-9 items-center justify-center">
        <div className="absolute inset-0 rounded-sm border border-gold-400/80 opacity-70" />
        <div className="absolute inset-[5px] bg-gradient-to-b from-gold-300 via-gold-400 to-gold-600" />
        <div className="absolute inset-[9px] border border-navy-950/70 bg-navy-900/70" />
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-navy-950/80" />
      </div>
      <div className="text-center leading-none text-gold-300">
        <div className="font-serif text-[1.7rem] font-bold uppercase tracking-[0.12em] text-gold-300">
          PrimeCut
        </div>
        <div className="mt-1 text-[0.55rem] font-semibold tracking-[0.48em] text-slate-300">
          BARBERS
        </div>
      </div>
    </div>
  );
}

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center px-2 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-gold-300 ${
        active ? 'text-gold-300' : ''
      }`}
    >
      <span className="relative z-10">{label}</span>
      <span
        className={`absolute bottom-0 left-1/2 h-[2px] bg-gold-400 transition-all duration-300 ${
          active ? 'left-0 w-full' : 'w-0 group-hover:left-0 group-hover:w-full'
        }`}
      />
    </a>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.8],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="relative z-50">
      <div
        className={`hidden overflow-hidden border-b border-gold-400/20 bg-navy-950 transition-all duration-300 ease-out lg:block ${
          isScrolled ? 'max-h-0 border-b-0 opacity-0' : 'max-h-20 opacity-100'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 text-[0.68rem] text-slate-300 md:px-8">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-gold-300" />
              <span className="text-slate-400">Email:</span>
              <span className="text-white">info@primecut.com</span>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <MapPin className="h-3.5 w-3.5 text-gold-300" />
              <span className="text-slate-400">Address:</span>
              <span className="text-white">Lompoc, CA USA</span>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden items-center gap-2 sm:flex">
              <Phone className="h-3.5 w-3.5 text-gold-300" />
              <span className="text-white">Call Us Today (123)634 6544</span>
            </div>
            <button className="inline-flex items-center justify-center border border-gold-400/80 bg-transparent px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-300 transition hover:border-gold-300 hover:text-gold-200">
              Book an appointment
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-gold-400/20 bg-transparent">
        <div
          className={`transition-all duration-300 ease-out ${
            isScrolled
              ? 'sticky top-0 border-b border-gold-400/20 bg-navy-900/80 shadow-[0_12px_30px_rgba(2,6,23,0.35)] backdrop-blur-xl'
              : 'bg-navy-900/95'
          }`}
        >
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8 lg:h-[80px]">
            <div className="flex w-full items-center justify-between lg:hidden">
              <a href="#home" className="block outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900">
                <div className="scale-[0.8]">
                  <BarberLogo />
                </div>
              </a>

              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setIsMobileMenuOpen((state) => !state)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold-400/40 bg-navy-800/80 text-gold-300 transition hover:border-gold-300 hover:text-gold-200"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.slice(0, 4).map((item) => (
                <div key={item.id} className="relative">
                  {item.id === 'services' ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setIsServicesOpen((state) => !state)}
                        className={`group inline-flex items-center gap-2 px-2 py-2 text-sm font-medium transition-colors duration-200 ${
                          activeId === 'services' ? 'text-gold-300' : 'text-white/80 hover:text-gold-300'
                        }`}
                      >
                        <span className="relative">Services</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isServicesOpen ? 'rotate-180 text-gold-300' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute left-0 top-full mt-4 w-[260px] overflow-hidden rounded-xl border border-gold-400/25 bg-navy-800/95 shadow-[0_18px_32px_rgba(2,6,23,0.45)] backdrop-blur-sm"
                          >
                            {serviceItems.map((itemLabel) => (
                              <a
                                key={itemLabel}
                                href="#services"
                                className="block border-l border-transparent px-4 py-3 text-sm text-slate-200 transition-colors duration-200 hover:border-gold-400 hover:bg-navy-700/60 hover:text-gold-300"
                              >
                                {itemLabel}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink label={item.label} href={item.href} active={activeId === item.id} />
                  )}
                </div>
              ))}
            </nav>

            <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block lg:static lg:translate-x-0 lg:translate-y-0">
              <div
                className={`transition-all duration-300 ease-out ${
                  isScrolled ? 'scale-[0.82]' : 'scale-100'
                }`}
              >
                <a href="#home" className="block outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900">
                  <BarberLogo />
                </a>
              </div>
            </div>

            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.slice(4).map((item) => (
                <div key={item.id} className="relative">
                  {item.id === 'team' ? (
                    <NavLink label="Our Barbers" href="#team" active={activeId === 'team'} />
                  ) : (
                    <NavLink label={item.label} href={item.href} active={activeId === item.id} />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col bg-navy-900/95 px-5 pb-8 pt-5 shadow-[0_0_30px_rgba(2,6,23,0.6)] backdrop-blur-xl lg:hidden"
          >
            <div className="mb-6 flex items-center justify-between border-b border-gold-400/20 pb-4">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block">
                <BarberLogo />
              </a>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gold-400/30 text-gold-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto">
              {navItems.map((item) => {
                if (item.id === 'services') {
                  return (
                    <div key={item.id} className="rounded-xl border border-white/5 bg-white/5">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((state) => !state)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-white"
                      >
                        <span>Services</span>
                        <ChevronDown className={`h-4 w-4 text-gold-300 transition ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-t border-white/5"
                          >
                            <div className="space-y-1 px-3 py-3">
                              {serviceItems.map((service) => (
                                <a
                                  key={service}
                                  href="#services"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-navy-800 hover:text-gold-300"
                                >
                                  {service}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block rounded-xl border px-4 py-3 text-base font-medium transition ${
                      activeId === item.id
                        ? 'border-gold-400/50 bg-gold-400/10 text-gold-300'
                        : 'border-white/5 bg-white/5 text-white hover:border-gold-400/30 hover:text-gold-300'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-6 space-y-4 border-t border-gold-400/20 pt-5">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="h-4 w-4 text-gold-300" />
                <span>(123)634 6544</span>
              </div>
              <button className="inline-flex w-full items-center justify-center border border-gold-400/70 bg-gold-gradient px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy-950 shadow-gold transition hover:brightness-110">
                Book an appointment
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
