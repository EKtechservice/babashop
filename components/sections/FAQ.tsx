'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
  {
    question: 'Do I Need To Book An Appointment?',
    answer:
      'Yes, booking ahead is recommended so we can reserve your preferred barber and time slot. Walk-ins are welcome when available, but appointments help us keep the service smooth and on schedule.',
  },
  {
    question: 'How Long Does A Haircut Take?',
    answer:
      'Most haircuts take between 30 and 45 minutes, depending on your style, hair length, and whether you add a beard trim or detailing service. We always aim to keep the experience efficient without cutting corners.',
  },
  {
    question: 'Do You Offer Beard Grooming?',
    answer:
      'Absolutely. We provide beard trims, shaping, line work, and finishing touches to keep your beard balanced, neat, and confident. Our team can also suggest a look that suits your face shape and routine.',
  },
  {
    question: 'Can I Request A Specific Barber?',
    answer:
      'Of course. If you have a preferred barber, we will do our best to match you with them based on availability. We also welcome first-time clients who want to try a new stylist for a fresh look.',
  },
  {
    question: 'Do You Offer Haircuts For Kids?',
    answer:
      'Yes, we offer child-friendly cuts and a relaxed, comfortable experience for younger clients. Our barbers keep sessions patient, efficient, and tailored to each child’s style and comfort level.',
  },
  {
    question: 'Can I Show My Barber A Reference Photo?',
    answer:
      'No problem. Our experienced barbers can recommend a style based on your hair type, face shape, lifestyle, and personal preferences. We can also tailor the cut to maintain a look that works for you long after the appointment.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const avatarStyles = ['from-[#0b1226] via-[#1a2547] to-[#d4a437]', 'from-[#d4a437] via-[#f0d58a] to-[#b8862b]', 'from-[#3b455a] via-[#111a33] to-[#0b1226]'];

function AvatarStack() {
  return (
    <div className="flex items-center">
      {['CJ', 'MN', 'AR'].map((initials, index) => (
        <div
          key={initials}
          className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${avatarStyles[index]} text-xs font-bold text-white shadow-[0_10px_20px_rgba(15,23,42,0.12)] ${
            index > 0 ? '-ml-3' : ''
          }`}
        >
          {initials}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(5);

  return (
    <section id="faq" className="relative overflow-hidden bg-cream py-20 text-navy-900 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="dot-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.5fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-navy-900/70">FAQ</p>
            <h2 className="mt-4 max-w-md font-display text-4xl uppercase leading-[0.96] tracking-[0.03em] text-navy-900 md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-slate-700">
              Everything you need to know before your next visit to PrimeCut Barbers.
            </p>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3">
                <AvatarStack />
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-bold text-navy-900">Still Have Any Question?</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We&apos;re ready to help you to answer any question.
                </p>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-between rounded-md bg-navy-900 px-4 py-3 text-left text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-navy-800"
              >
                <span>Book Your Appointment</span>
                <span className="text-base">↗</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.question}
                  layout
                  className={`overflow-hidden rounded-lg border transition-all duration-300 ${
                    isOpen
                      ? 'border-transparent bg-gold-gradient text-navy-900 shadow-[0_18px_35px_rgba(212,164,55,0.18)]'
                      : 'border-slate-200 bg-white text-navy-900 hover:border-gold-400/80'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-base font-semibold tracking-[0.01em] ${isOpen ? 'text-navy-900' : 'text-navy-900'}`}>
                      {item.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-navy-900 text-gold-300' : 'bg-[#f3efe6] text-navy-900'
                      }`}
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <p className="max-w-2xl text-sm leading-7 text-navy-900/80">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
