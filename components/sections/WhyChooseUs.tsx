'use client';

import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import { useMemo } from 'react';

import { GoldDivider } from '@/components/ui/GoldDivider';
import { Reveal } from '@/components/ui/Reveal';

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: 'Experienced Barbers',
    description: 'Our skilled barbers understand both classic barbering and modern styles, delivering precision with every cut.',
  },
  {
    title: 'Precision Every Time',
    description: 'From clean fades to sharp lines, we focus on even the small details that make a big difference.',
  },
  {
    title: 'Personalized Style',
    description: 'We take the time to understand your preferences and create a look that suits your face, hair, and personality.',
  },
  {
    title: 'Premium Grooming Experience',
    description: 'Enjoy a clean, comfortable, and welcoming environment where every appointment is designed around you.',
  },
  {
    title: 'Quality Products',
    description: 'We use professional-grade grooming products to help achieve a polished finish while keeping your hair and beard looking their best.',
  },
  {
    title: 'Consistent Results',
    description: 'Whether you&apos;re visiting for a regular trim or a complete style change, you can count on a dependable, professional finish.',
  },
];

export default function WhyChooseUs() {
  const featureList = useMemo(() => features, []);

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-cream md:py-28">
      <GoldDivider />

      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(240, 213, 138, 0.25) 0%, rgba(240, 213, 138, 0.25) 8%, transparent 8%, transparent 50%, rgba(240, 213, 138, 0.15) 50%, rgba(240, 213, 138, 0.15) 58%, transparent 58%, transparent 100%)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal delay={0.04} className="order-2 lg:order-1">
          <div className="relative max-w-[560px]">
            <div className="relative overflow-hidden rounded-xl shadow-[0_28px_60px_rgba(7,11,23,0.35)]">
              <div className="relative h-[640px] w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80"
                  alt="Barber trimming a client's beard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-7 left-0">
              <button className="inline-flex items-center gap-3 rounded-md bg-gold-gradient px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy-950 shadow-gold transition hover:brightness-110">
                Book your next cut
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="absolute -bottom-7 right-4 h-20 w-20 rounded-md border border-dashed border-gold-400/60 bg-transparent" />
            <div className="absolute -bottom-3 right-10 grid grid-cols-6 gap-1 opacity-80">
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} className="h-2.5 w-2.5 rounded-full border border-gold-300/80" />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="order-1 lg:order-2">
          <div className="max-w-xl">
            <p className="mb-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold-300">
              <span className="h-2 w-2 rounded-sm bg-gradient-to-br from-gold-300 to-gold-600" />
              WHY CHOOSE US
            </p>

            <h2 className="font-display text-4xl uppercase leading-[0.96] tracking-[0.02em] text-white md:text-5xl">
              WHY CLIENTS CHOOSE PRIMECUT
            </h2>

            <p className="mt-6 text-base leading-8 text-white/70">
              At PrimeCut Barbers, we combine skilled craftsmanship, personalized service, &amp; a
              premium barbershop atmosphere to give you a grooming experience you&apos;ll love.
            </p>

            <div className="mt-8 space-y-4">
              {featureList.map((feature, index) => (
                <Reveal key={feature.title} delay={0.12 + index * 0.06} className="block">
                  <div className="group flex items-start gap-4 rounded-lg border border-white/8 bg-navy-800/70 p-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-gold-400/70 hover:shadow-[0_0_22px_rgba(212,164,55,0.18)] hover:translate-x-1.5">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-md bg-navy-900 text-gold-400 transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-navy-950">
                      <Check className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg uppercase tracking-[0.12em] text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">{feature.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
