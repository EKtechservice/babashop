'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export default function About() {
  const ref = useRef<HTMLElement | null>(null);
  const [count, setCount] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting) return;

        let start = 0;
        const target = 27;
        const duration = 1200;
        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          start = Math.round(progress * target);
          setCount(start);

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="bg-cream py-24 text-navy-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 lg:order-1" delay={0.08}>
          <div className="max-w-xl">
            <p className="mb-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold-600">
              <span className="h-2 w-2 rounded-sm bg-gradient-to-br from-gold-300 to-gold-600" />
              ABOUT US
            </p>

            <h2 className="font-display text-4xl uppercase leading-[0.98] tracking-[0.02em] text-navy-900 md:text-5xl">
              MORE THAN A HAIRCUT. IT&apos;S YOUR SIGNATURE STYLE.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>
                At PrimeCut Barbers, we believe a great haircut is more than just a fresh look —
                it&apos;s about confidence, personality, and feeling your best. Our barbers combine
                classic barbering traditions with modern techniques to deliver sharp, personalized
                results for every client.
              </p>
              <p>
                From clean fades and timeless cuts to detailed beard shaping and relaxing hot towel
                shaves, we take pride in every detail. We take the time to understand your
                preferences and make sure you leave the chair looking and feeling your best.
              </p>
              <p>
                Whether you&apos;re getting ready for a big occasion or simply keeping your everyday
                style fresh, PrimeCut Barbers is your place for quality grooming, expert
                recommendations, and a welcoming barbershop experience.
              </p>
            </div>

            <div className="mt-10">
              <Button variant="gold">Meet our barbers ↗</Button>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.12}>
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -left-6 top-8 h-full w-full rounded-xl border-[2px] border-gold-500/90" />

            <motion.div style={{ y: imageY }} className="relative overflow-hidden rounded-xl shadow-[0_30px_80px_rgba(11,18,38,0.18)]">
              <div className="relative h-[560px] w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80"
                  alt="Barber styling a client in a stylish shop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div className="absolute -left-4 top-4 rounded-xl border border-gold-500/80 bg-navy-900 px-5 py-4 text-left shadow-[0_20px_40px_rgba(7,11,23,0.25)]">
              <div className="font-display text-4xl font-bold uppercase leading-none tracking-[0.04em] text-gold-400">
                {count}+
              </div>
              <div className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-slate-200">
                Years of Experience
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
