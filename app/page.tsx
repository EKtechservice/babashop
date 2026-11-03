import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import Gallery from '@/components/sections/Gallery';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Services from '@/components/sections/Services';
import SpecialOffer from '@/components/sections/SpecialOffer';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import PageLoader from '@/components/ui/PageLoader';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

function MobileQuickActions() {
  return (
    <>
      <a
        href="tel:+11236346544"
        aria-label="Call now"
        className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-4 z-40 inline-flex items-center justify-center rounded-full border border-gold-400/80 bg-gold-gradient px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-navy-950 shadow-[0_14px_35px_rgba(212,164,55,0.25)] md:hidden"
      >
        Call Now
      </a>
      <a
        href="#contact"
        aria-label="Book an appointment"
        className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex items-center justify-center rounded-full border border-gold-400/80 bg-navy-900 px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold-300 shadow-[0_14px_35px_rgba(15,23,42,0.34)] md:hidden"
      >
        Book
      </a>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <main className="min-h-screen bg-navy-950 text-cream">
        <Header />
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <HowItWorks />
        <Team />
        <Gallery />
        <Testimonials />
        <SpecialOffer />
        <FAQ />
        <Blog />
        <CTA />
        <Footer />
      </main>
      <MobileQuickActions />
    </>
  );
}
