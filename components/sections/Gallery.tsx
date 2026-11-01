'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

type GalleryItem = {
  src: string;
  alt: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80',
    alt: 'Barber trimming a client',
  },
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Close-up of barber cutting hair',
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
    alt: 'Man getting beard trim',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    alt: 'Barber at work in shop',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80',
    alt: 'Barber shop interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80',
    alt: 'Straight razor shave',
  },
];

const layout = [
  { span: 'md:col-span-5', height: 'h-[380px]' },
  { span: 'md:col-span-7', height: 'h-[380px]' },
  { span: 'md:col-span-3', height: 'h-[260px]' },
  { span: 'md:col-span-3', height: 'h-[260px]' },
  { span: 'md:col-span-3', height: 'h-[260px]' },
  { span: 'md:col-span-3', height: 'h-[260px]' },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeItem = useMemo(
    () => (selectedIndex === null ? null : galleryItems[selectedIndex]),
    [selectedIndex],
  );

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => (current === null ? 0 : (current + 1) % galleryItems.length));
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => (current === null ? 0 : (current - 1 + galleryItems.length) % galleryItems.length));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((current) => (current === null ? 0 : (current - 1 + galleryItems.length) % galleryItems.length));
  const showNext = () => setSelectedIndex((current) => (current === null ? 0 : (current + 1) % galleryItems.length));

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    (handleTouchStart as any).startX = touch.clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const endTouch = event.changedTouches[0];
    const startX = (handleTouchStart as any).startX ?? endTouch.clientX;
    const delta = endTouch.clientX - startX;

    if (Math.abs(delta) > 50) {
      if (delta < 0) showNext();
      else showPrev();
    }
  };

  return (
    <section id="gallery" className="bg-cream py-20 text-navy-900 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="GALLERY"
          title="SEE THE PRIMECUT DIFFERENCE"
          subtitle="Explore our latest work and see the difference a professional cut, fade, and beard shape can make."
          align="center"
          theme="light"
        />

        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-12">
          {galleryItems.map((item, index) => (
            <Reveal key={item.alt} delay={index * 0.06} className={`${layout[index].span} ${layout[index].height}`}>
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative block h-full w-full overflow-hidden rounded-xl"
                aria-label={`Open gallery image ${index + 1}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='%23e2e8f0'/%3E%3C/svg%3E"
                />

                <div className="absolute inset-0 bg-navy-950/30 transition duration-300 group-hover:bg-navy-950/55" />
                <div className="absolute inset-4 rounded-lg border border-gold-400/0 transition duration-300 group-hover:border-gold-400/90" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/90 bg-navy-950/40 text-gold-300 shadow-[0_0_30px_rgba(212,164,55,0.45)]">
                    <Plus className="h-8 w-8" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/80 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-[min(92vw,1100px)]"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button
                type="button"
                aria-label="Close lightbox"
                onClick={closeLightbox}
                className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-navy-900 text-white shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-[0_30px_80px_rgba(2,6,23,0.6)]">
                <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={showPrev}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy-800/80 text-white transition hover:border-gold-400 hover:text-gold-300"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-4">
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={showNext}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy-800/80 text-white transition hover:border-gold-400 hover:text-gold-300"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="mt-4 text-center text-sm font-medium uppercase tracking-[0.28em] text-white/80">
                {selectedIndex !== null ? `${selectedIndex + 1} / ${galleryItems.length}` : ''}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
