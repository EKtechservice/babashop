'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

import { Reveal } from '@/components/ui/Reveal';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const reviews: Testimonial[] = [
  {
    name: 'Marcus L.',
    role: 'Creative Director',
    quote:
      'The fade was sharp, the finish was clean, and the whole experience felt premium from start to finish. It is the best barber shop in town for me.',
  },
  {
    name: 'Daniel R.',
    role: 'Consultant',
    quote:
      'I came in for a beard trim and stayed for a full style refresh. The attention to detail and the relaxed atmosphere made it an easy decision to return.',
  },
  {
    name: 'Ethan M.',
    role: 'Photographer',
    quote:
      'PrimeCut nails the balance between classic barbering and modern style. My cut holds shape beautifully and always looks polished.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-cream py-20 text-navy-900 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="dot-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-navy-900/70">TESTIMONIALS</p>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[0.96] tracking-[0.03em] text-navy-900 md:text-5xl">
            CLIENTS WHO KEEP COMING BACK
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.08} className="h-full">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-[0_20px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-500">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-gold-400/80" />
                </div>

                <p className="mt-6 text-base leading-8 text-slate-700">“{review.quote}”</p>

                <div className="mt-7 border-t border-slate-200 pt-5">
                  <div className="font-display text-2xl uppercase tracking-[0.08em] text-navy-900">
                    {review.name}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{review.role}</div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
