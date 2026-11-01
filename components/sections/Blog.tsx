'use client';

import { CalendarDays } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

const posts: BlogPost[] = [
  {
    slug: 'maintain-your-fade-between-barber-visits',
    title: 'HOW TO MAINTAIN YOUR FADE BETWEEN BARBER VISITS',
    date: 'Sep 6, 2026',
    excerpt:
      'A fresh fade power over. Learn simple ways to keep your haircut looking sharp and fresh between appointments.',
    image:
      'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'choosing-the-right-haircut-for-your-face-shape',
    title: 'CHOOSING THE RIGHT HAIRCUT FOR YOUR FACE SHAPE',
    date: 'Sep 5, 2026',
    excerpt:
      'Learn how different haircut styles can complement your natural features and help you look your best.',
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'why-professional-barbering-makes-a-difference',
    title: 'WHY PROFESSIONAL BARBERING MAKES A DIFFERENCE',
    date: 'Aug 28, 2026',
    excerpt:
      'Discover how professional techniques, quality products, and attention to detail can improve your overall grooming.',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden bg-cream py-20 text-navy-900 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="dot-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-navy-900/70">OUR BLOG</p>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[0.96] tracking-[0.03em] text-navy-900 md:text-5xl">
            THE PRIMECUT JOURNAL
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
            Stay sharp with expert grooming advice, hairstyle inspiration, beard-care tips, and professional barbering insights.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_18px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(212,164,55,0.12)]"
            >
              <div className="relative overflow-hidden">
                <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-navy-900 shadow-sm">
                  <CalendarDays className="h-3.5 w-3.5 text-navy-900" />
                  {post.date}
                </div>

                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-[1.55rem] uppercase leading-tight tracking-[0.02em] text-navy-900">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold-600 transition-colors hover:text-gold-500"
                >
                  <span className="relative inline-block pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gold-500 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    Read More
                  </span>
                  <span className="text-base">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
