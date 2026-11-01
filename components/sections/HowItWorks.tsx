'use client';

import { ArrowRight, CalendarCheck2, Scissors, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Step = {
  step: string;
  title: string;
  description: string;
  icon: typeof CalendarCheck2;
};

const steps: Step[] = [
  {
    step: 'STEP 01',
    title: 'BOOK YOUR APPOINTMENT',
    description: 'Schedule online or call us in minutes and pick the time that works best for you.',
    icon: CalendarCheck2,
  },
  {
    step: 'STEP 02',
    title: 'TELL US YOUR STYLE',
    description: "When you arrive, tell your barber know the look you're after. Bring a reference photo or ask for our professional recommendation.",
    icon: Scissors,
  },
  {
    step: 'STEP 03',
    title: 'SIT BACK AND GET SHARP',
    description: 'Relax in the chair while your barber delivers a precise cut, a clean finish, and a fresh confident look.',
    icon: Sparkles,
  },
];

export default function HowItWorks() {
  const connectorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = connectorRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting) return;

        node.style.setProperty('--draw-width', '100%');
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-cream py-20 text-navy-900 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="dot-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="YOUR FRESH LOOK IN 3 SIMPLE STEPS"
          subtitle="Getting a sharp, professional look at PrimeCut Barbers is easy. Choose your service, sit back, and let our experienced barbers take care of the rest."
          align="center"
          theme="light"
        />

        <div className="relative mt-14">
          <div
            ref={connectorRef}
            className="pointer-events-none absolute left-0 right-0 top-1/3 hidden h-0.5 bg-gradient-to-r from-gold-400 via-gold-400 to-gold-400 opacity-80 md:block"
            style={{
              backgroundSize: '100% 100%',
              backgroundPosition: 'left center',
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              width: 'var(--draw-width, 0%)',
              transition: 'width 1.2s ease-out',
            }}
          />

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isMiddle = index === 1;

              return (
                <Reveal key={step.step} delay={index * 0.08} className="h-full">
                  <article
                    className={`group relative h-full rounded-xl border border-slate-200 bg-white p-8 shadow-[0_14px_32px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(212,164,55,0.18)] ${
                      isMiddle ? '-translate-y-3' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-gold-300 transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-navy-950">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="relative text-right">
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
                          {step.step}
                        </span>
                        <div className="pointer-events-none absolute -right-3 -top-5 text-[3.2rem] font-black uppercase leading-none tracking-[-0.08em] text-slate-200/80">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-8 font-display text-[1.7rem] uppercase leading-tight tracking-[0.04em] text-navy-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
