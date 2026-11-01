'use client';

import { useEffect, useMemo, useState } from 'react';

import { Button } from '@/components/ui/Button';

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getCountdown = (targetDate: number): Countdown => {
  const diff = Math.max(targetDate - Date.now(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

function SoundLines() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {[0, 1, 2].map((item) => (
        <span
          key={item}
          className="block h-2 w-1 rounded-full bg-gold-400/80"
          style={{
            height: `${8 + item * 5}px`,
            animation: `soundWave 0.9s ease-in-out infinite`,
            animationDelay: `${item * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function SpecialOffer() {
  const targetDate = useMemo(() => Date.now() + 7 * 24 * 60 * 60 * 1000, []);
  const [countdown, setCountdown] = useState<Countdown>(() => getCountdown(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="special-offer" className="relative overflow-hidden bg-cream py-20 text-navy-900 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-0 opacity-40" />
        {[...Array(16)].map((_, index) => (
          <span
            key={index}
            className="absolute h-2.5 w-2.5 rounded-full bg-gold-400/70"
            style={{
              left: `${(index * 11) % 100}%`,
              top: `${(index * 17) % 100}%`,
              animation: `sparkle ${4 + (index % 5)}s ease-in-out infinite`,
              animationDelay: `${index * 0.4}s`,
              opacity: 0.2 + (index % 5) * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-gold-400/30 bg-gradient-to-br from-cream via-white to-[#f8f5ef] p-6 shadow-[0_28px_80px_rgba(15,23,42,0.08)] md:p-10 xl:p-14">
          <div className="absolute -left-12 -top-10 h-28 w-28 rotate-[-18deg] rounded-[28%] border border-gold-400/40 bg-gold-400/8" />
          <div className="absolute -right-10 -bottom-8 h-32 w-32 rotate-[22deg] rounded-[26%] border border-gold-400/40 bg-gold-400/10" />
          <div className="absolute right-12 top-10 h-20 w-20 rounded-full border border-gold-400/20" />
          <div className="absolute left-10 bottom-12 h-16 w-16 rounded-full border border-gold-400/20" />

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_1.25fr] lg:items-center">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 h-[250px] w-[250px] rounded-full bg-gold-gradient opacity-25 blur-3xl" />
                <div
                  className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border-[10px] border-gold-300/80 bg-gold-gradient shadow-[0_18px_50px_rgba(212,164,55,0.35)]"
                  style={{ animation: 'badgePulse 4s ease-in-out infinite' }}
                >
                  <div className="flex flex-col items-center justify-center text-center text-navy-950">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.34em]">SPECIAL OFFER</span>
                    <div className="mt-2 flex items-end justify-center gap-2">
                      <span className="font-display text-[6rem] leading-none tracking-[-0.06em]">20</span>
                      <span className="pb-4 font-display text-4xl leading-none uppercase tracking-[0.08em]">%</span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-2 text-navy-950">
                      <span className="font-display text-3xl uppercase tracking-[0.06em]">OFF</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-[58%] flex items-center gap-3 rounded-full border border-gold-400/30 bg-white/80 px-4 py-3 shadow-[0_18px_35px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/50 bg-gold-gradient text-navy-950 shadow-[0_8px_18px_rgba(212,164,55,0.22)]">
                  <svg viewBox="0 0 64 64" className="h-7 w-7" aria-label="Megaphone icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 26.5L30 18V46L8 37.5V26.5Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
                    <path d="M30 18L46 12V52L30 46V18Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
                    <path d="M30 25L42 21.5V42.5L30 39V25Z" fill="rgba(11,18,38,0.08)" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
                    <path d="M14 31.6H19.8C22.2 31.6 24.2 33.6 24.2 36V37.4C24.2 39.8 22.2 41.8 19.8 41.8H14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M44 28C50 30.1 54 34.8 54 40C54 45.2 50 49.9 44 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M52 17L56 20.5M52 17L56 13.5M52 17V23" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                  </svg>
                </div>
                <SoundLines />
              </div>
            </div>

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-navy-900/70">SPECIAL OFFER</p>
              <h2 className="mt-5 max-w-xl font-display text-4xl uppercase leading-[0.96] tracking-[0.02em] text-navy-900 md:text-5xl">
                Skin fade + hair &amp; beard combo — limited-time special pricing
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-700 md:text-lg">
                Enjoy expert blending, sharp detailing, clean beard shaping, and a polished finish from our professional barbers.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button variant="gold" className="px-6 py-3 text-[0.7rem]">
                  Claim your special offer ↗
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {[
                  { label: 'Days', value: countdown.days },
                  { label: 'Hrs', value: countdown.hours },
                  { label: 'Min', value: countdown.minutes },
                  { label: 'Sec', value: countdown.seconds },
                ].map(({ label, value }) => (
                  <div key={label} className="min-w-[90px] rounded-xl border border-navy-900/10 bg-navy-900 px-3 py-3 text-center shadow-[0_12px_25px_rgba(11,18,38,0.08)]">
                    <div className="font-display text-3xl leading-none tracking-[0.04em] text-gold-300">
                      {String(value).padStart(2, '0')}
                    </div>
                    <div className="mt-2 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-white/70">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes badgePulse {
          0%,
          100% {
            transform: rotate(-8deg) scale(1);
            box-shadow: 0 18px 50px rgba(212, 164, 55, 0.3);
          }
          50% {
            transform: rotate(2deg) scale(1.03);
            box-shadow: 0 22px 60px rgba(212, 164, 55, 0.45);
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            transform: translateY(0) scale(0.8);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-12px) scale(1.2);
            opacity: 0.9;
          }
        }

        @keyframes soundWave {
          0%,
          100% {
            transform: scaleY(0.8);
            opacity: 0.6;
          }
          50% {
            transform: scaleY(1.6);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
