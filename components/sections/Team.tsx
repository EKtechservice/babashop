'use client';

import { ArrowLeft, ArrowRight, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

type Barber = {
  name: string;
  role: string;
  image: string;
};

const barbers: Barber[] = [
  {
    name: 'Marcus Reed',
    role: 'Master Barber',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Daniel Brooks',
    role: 'Senior Barber',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'James Carter',
    role: 'Fade & Style Specialist',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Ethan Cole',
    role: 'Beard & Grooming',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Team() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const visibleCount = 4;

  const scrollBy = (direction: 'prev' | 'next') => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector<HTMLElement>('[data-card]');
    if (!card) return;

    const width = card.offsetWidth + 24;
    const maxIndex = Math.max(barbers.length - visibleCount, 0);

    setIndex((current) => {
      const next = direction === 'next' ? Math.min(current + 1, maxIndex) : Math.max(current - 1, 0);
      container.scrollTo({ left: next * width, behavior: 'smooth' });
      return next;
    });
  };

  return (
    <section id="team" className="bg-cream py-20 text-navy-900 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal delay={0.05}>
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold-600">
                <span className="h-2 w-2 rounded-sm bg-gradient-to-br from-gold-300 to-gold-600" />
                OUR TEAM
              </p>
              <h2 className="font-display text-4xl uppercase leading-[0.96] tracking-[0.02em] text-navy-900 md:text-5xl">
                MEET THE BARBERS BEHIND THE CHAIR
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous barber"
                onClick={() => scrollBy('prev')}
                className="flex h-12 w-12 items-center justify-center rounded-md bg-gold-gradient text-navy-950 shadow-gold transition hover:brightness-110"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next barber"
                onClick={() => scrollBy('next')}
                className="flex h-12 w-12 items-center justify-center rounded-md border border-navy-900/30 bg-transparent text-navy-900 transition hover:border-gold-400 hover:bg-gold-400/10"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-x-visible"
          >
            {barbers.map((barber, cardIndex) => (
              <Reveal key={barber.name} delay={cardIndex * 0.08} className="min-w-0 flex-1 snap-start md:min-w-[calc(50%-0.75rem)] xl:min-w-[calc(25%-1.125rem)]">
                <article data-card className="group relative overflow-hidden rounded-xl">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                    <Image
                      src={barber.image}
                      alt={barber.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/30 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="rounded-lg bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-white">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <h3 className="font-display text-2xl uppercase leading-none tracking-[0.04em] text-navy-900 transition-colors duration-300 group-hover:text-white">
                              {barber.name}
                            </h3>
                            <p className="mt-1 text-[0.64rem] uppercase tracking-[0.22em] text-slate-500 transition-colors duration-300 group-hover:text-gold-300">
                              {barber.role}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold-gradient text-navy-950 transition-transform duration-300 group-hover:-translate-y-1">
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                        </div>

                        <div className="mt-3 flex translate-y-2 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-gold-300 transition hover:bg-gold-gradient hover:text-navy-950">
                            <Instagram className="h-3.5 w-3.5" />
                          </span>
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-gold-300 transition hover:bg-gold-gradient hover:text-navy-950">
                            <Facebook className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="gold">Meet our full team ↗</Button>
        </div>
      </div>
    </section>
  );
}
