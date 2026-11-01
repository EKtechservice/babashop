'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Facebook, Star, X } from 'lucide-react';
import Image from 'next/image';
import { FormEvent, useEffect, useMemo, useState } from 'react';

import { GoldDivider } from '@/components/ui/GoldDivider';
import { Reveal } from '@/components/ui/Reveal';

const marqueeBrands = [
  'BARBER PRO',
  'CLIPPERX',
  'GROOMCO',
  'SHARPLINE',
  'VELVET',
  'RAZORCRAFT',
  'OLDGUARD',
];

const ratingItems = [
  { name: 'Facebook', icon: 'facebook', value: '5.0 Rating' },
  { name: 'Google', icon: 'google', value: '5.0 Rating' },
  { name: 'Yelp', icon: 'yelp', value: '5.0 Rating' },
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  message: '',
};

const socialIconClasses = 'flex h-9 w-9 items-center justify-center rounded-full';

export default function Hero() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [toast, setToast] = useState('');

  const validationMessage = useMemo(
    () => ({
      name: 'Please enter your name.',
      phone: 'Please enter a valid phone number.',
      email: 'Please enter a valid email address.',
    }),
    [],
  );

  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(() => setToast(''), 2400);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const currentErrors: { [key: string]: string } = {};

    if (!form.name.trim()) {
      currentErrors.name = validationMessage.name;
    }

    if (!/^\+?[0-9()\-\s]{7,}$/.test(form.phone.trim())) {
      currentErrors.phone = validationMessage.phone;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      currentErrors.email = validationMessage.email;
    }

    return currentErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const currentErrors = validate();

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    setToast("Request sent! We'll call you shortly.");
    setForm(initialForm);
  };

  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      <div className="relative min-h-[760px]">
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80"
          alt="Barber trimming a client's hair"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90 scale-[1.08] animate-[heroZoom_20s_ease-in-out_infinite_alternate]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-12 md:px-8 md:pt-20">
          <div className="max-w-2xl">
            <Reveal delay={0.05}>
              <p className="mb-6 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold-300">
                <span className="h-2.5 w-2.5 rounded-sm bg-gold-gradient" />
                LOMPOC, CA EXPERT BARBERS
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="font-display text-[3.4rem] uppercase leading-[0.95] tracking-[0.04em] text-white md:text-[5.4rem] lg:text-[6rem] xl:text-[7rem]">
                LOOK SHARP
                <span className="mt-1 block">FEEL CONFIDENT</span>
                <span className="text-gold-400">.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/80 md:text-lg">
                Experience professional barbering designed around your style. From classic cuts &
                modern fades to expert beard trimming and hot towel shaves.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {ratingItems.map((item, index) => (
                  <div
                    key={item.name}
                    className={`flex flex-1 items-center gap-3 border-l border-white/10 px-0 py-2 sm:px-3 ${
                      index === 0 ? 'border-l-0 pl-0' : ''
                    }`}
                  >
                    <div className={socialIconClasses + ' border border-white/10 bg-white/10'}>
                      {item.icon === 'facebook' && <Facebook className="h-4 w-4 text-[#1877F2]" />}
                      {item.icon === 'google' && (
                        <span className="text-sm font-bold text-[#DB4437]">G</span>
                      )}
                      {item.icon === 'yelp' && (
                        <span className="text-[0.7rem] font-black uppercase tracking-tight text-[#D32323]">
                          y
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-gold-400">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <p className="mt-1 text-[0.6rem] uppercase tracking-[0.22em] text-white/70">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 max-w-6xl">
              <p className="mb-3 font-display text-lg uppercase tracking-[0.26em] text-white">
                Request a service
              </p>

              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-md"
              >
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
                  <div className="xl:col-span-1">
                    <input
                      aria-label="Your Name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(event) => handleChange('name', event.target.value)}
                      className="h-12 w-full rounded-md border border-white/10 bg-navy-900/70 px-3 text-sm text-white placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
                  </div>

                  <div className="xl:col-span-1">
                    <input
                      aria-label="Your Number"
                      placeholder="Your Number"
                      value={form.phone}
                      onChange={(event) => handleChange('phone', event.target.value)}
                      className="h-12 w-full rounded-md border border-white/10 bg-navy-900/70 px-3 text-sm text-white placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                  </div>

                  <div className="xl:col-span-1">
                    <input
                      aria-label="Your Email"
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(event) => handleChange('email', event.target.value)}
                      className="h-12 w-full rounded-md border border-white/10 bg-navy-900/70 px-3 text-sm text-white placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
                  </div>

                  <div className="xl:col-span-1">
                    <input
                      aria-label="Address"
                      placeholder="Address"
                      value={form.address}
                      onChange={(event) => handleChange('address', event.target.value)}
                      className="h-12 w-full rounded-md border border-white/10 bg-navy-900/70 px-3 text-sm text-white placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40"
                    />
                  </div>

                  <div className="xl:col-span-2">
                    <input
                      aria-label="Message"
                      placeholder="Message"
                      value={form.message}
                      onChange={(event) => handleChange('message', event.target.value)}
                      className="h-12 w-full rounded-md border border-white/10 bg-navy-900/70 px-3 text-sm text-white placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40"
                    />
                  </div>

                  <div className="xl:col-span-1">
                    <button
                      type="submit"
                      className="inline-flex h-12 w-full items-center justify-center rounded-md bg-gold-gradient px-4 text-sm font-semibold uppercase tracking-[0.18em] text-navy-950 shadow-gold transition hover:brightness-110"
                    >
                      Book now ↗
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 border-y border-gold-400/40 bg-navy-900">
        <div className="mx-auto max-w-7xl overflow-hidden px-0 py-3">
          <div className="marquee-group flex min-w-max items-center gap-10 whitespace-nowrap text-[0.72rem] font-black uppercase tracking-[0.2em] text-white/70 hover:[&_.brand-name]:opacity-100">
            {[...marqueeBrands, ...marqueeBrands].map((brand, index) => (
              <span key={`${brand}-${index}`} className="brand-name opacity-70 transition-opacity duration-300">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <GoldDivider />

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-5 right-5 z-[70] flex items-center gap-3 rounded-lg border border-gold-400/40 bg-navy-900/95 px-4 py-3 text-sm text-white shadow-[0_20px_40px_rgba(2,6,23,0.45)]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-gradient text-navy-950">
              <Check className="h-4 w-4" />
            </span>
            <span>{toast}</span>
            <button
              type="button"
              aria-label="Dismiss toast"
              onClick={() => setToast('')}
              className="ml-2 text-slate-300 transition hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes heroZoom {
          0% { transform: scale(1.08); }
          100% { transform: scale(1.18); }
        }

        .marquee-group {
          width: max-content;
          animation: marqueeScroll 24s linear infinite;
        }

        .marquee-group:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
