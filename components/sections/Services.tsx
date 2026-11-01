'use client';

import { Scissors, Sparkles, Wand2, Zap } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Service = {
  title: string;
  description: string;
  icon: typeof Scissors;
  featured?: boolean;
};

const services: Service[] = [
  {
    title: 'Classic Haircuts',
    description: 'Timeless cuts tailored to your face shape, personal style, and everyday needs.',
    icon: Scissors,
  },
  {
    title: 'Skin Fades',
    description: 'Clean seamless fades; precise blending & sharp finishing for a modern look.',
    icon: Sparkles,
    featured: true,
  },
  {
    title: 'Beard Trim & Shape',
    description: 'Keep your beard looking clean, balanced, and professionally shaped.',
    icon: Wand2,
  },
  {
    title: 'Hot Towel Shave',
    description: 'Enjoy a traditional straight-razor shave with warm towels and a smooth, refreshing finish.',
    icon: Zap,
  },
  {
    title: 'Hair & Beard Combo',
    description: 'The complete groom: expert cutting plus a precision beard trim with professional beard.',
    icon: Scissors,
  },
  {
    title: 'Kids Haircuts',
    description: 'Comfortable, stylish haircuts for younger clients from experienced and patient barbers.',
    icon: Sparkles,
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const featured = Boolean(service.featured);

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article
        className={`group relative h-full rounded-xl border p-8 text-center shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_35px_rgba(212,164,55,0.15)] ${
          featured
            ? 'border-transparent bg-gold-gradient text-navy-950 shadow-[0_18px_35px_rgba(212,164,55,0.22)]'
            : 'border-slate-200 bg-white text-navy-900 hover:border-transparent hover:bg-gold-gradient hover:text-navy-950'
        }`}
      >
        <div className="mb-6 flex justify-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
              featured
                ? 'border-navy-900/20 bg-navy-900/10 text-navy-900'
                : 'border-navy-900/10 bg-navy-900/5 text-navy-900 group-hover:border-navy-900/20 group-hover:bg-navy-900/10'
            }`}
          >
            <Icon className="h-7 w-7" />
          </div>
        </div>

        <h3 className="font-display text-2xl uppercase tracking-[0.04em] leading-tight">
          {service.title}
        </h3>
        <p
          className={`mt-4 text-sm leading-7 ${
            featured ? 'text-navy-900/80' : 'text-slate-600'
          }`}
        >
          {service.description}
        </p>

        <div className="mt-8">
          <span
            className={`inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] ${
              featured ? 'text-navy-900' : 'text-navy-900'
            }`}
          >
            Read more <span className="text-base">↗</span>
          </span>
        </div>
      </article>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-cream py-20 text-navy-900 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="dot-grid absolute inset-0" />
        <div className="absolute -left-8 top-12 h-64 w-64 rounded-full border border-navy-900/10" />
        <div className="absolute -right-10 bottom-8 h-72 w-72 rounded-full border border-navy-900/10" />
        <div className="absolute left-10 top-16 h-32 w-32 rotate-12 rounded-[28%] border border-navy-900/10" />
        <div className="absolute bottom-10 right-16 h-36 w-36 rotate-45 rounded-[26%] border border-navy-900/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="OUR BARBER SERVICES"
          title="PROFESSIONAL GROOMING, DONE RIGHT"
          subtitle="Discover a complete range of haircut and grooming services designed to keep you looking sharp."
          align="center"
          theme="light"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="gold">View all services ↗</Button>
        </div>
      </div>
    </section>
  );
}
