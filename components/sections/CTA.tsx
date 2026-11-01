'use client';

import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

import { GoldDivider } from '@/components/ui/GoldDivider';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 text-cream">
      <GoldDivider />

      <div
        className="relative isolate min-h-[620px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-navy-950/85" />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,rgba(212,164,55,0.15),transparent)] opacity-70" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(270deg,rgba(212,164,55,0.15),transparent)] opacity-70" />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 opacity-30 mix-blend-screen" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(212,164,55,0.85) 0 8px, rgba(11,18,38,0.2) 8px 18px)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 opacity-30 mix-blend-screen" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(212,164,55,0.85) 0 8px, rgba(11,18,38,0.2) 8px 18px)' }} />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center justify-center px-4 py-20 md:px-8">
          <div className="max-w-5xl text-center">
            <div className="flex items-center justify-center gap-4 text-white/80">
              <Scissors className="h-4 w-4 rotate-[-20deg] text-gold-300" />
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.38em]">
                Let Us Have The Opportunity To Serve You.
              </span>
              <Scissors className="h-4 w-4 rotate-[20deg] text-gold-300" />
            </div>

            <motion.a
              href="tel:+11236346544"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-8 inline-block font-display text-[3.4rem] uppercase leading-none tracking-[0.02em] text-transparent md:text-[6.2rem] lg:text-[7.2rem]"
              style={{
                backgroundImage: 'linear-gradient(135deg, #F0D58A 0%, #D4A437 50%, #B8862B 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 18px rgba(212,164,55,0.35))',
                animation: 'phoneGlow 2.5s ease-in-out infinite',
              }}
            >
              (123)634 6544
            </motion.a>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gold-400/80 bg-gold-gradient px-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-navy-950 shadow-[0_16px_35px_rgba(212,164,55,0.22)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span>Book Your Appointment</span>
                <span className="text-base">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes phoneGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 12px rgba(212, 164, 55, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 22px rgba(212, 164, 55, 0.42));
          }
        }
      `}</style>
    </section>
  );
}
