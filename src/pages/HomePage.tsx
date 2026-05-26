import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  HOME_HERO,
  HOME_INTRO_SECTION,
  HOME_PRODUCT_SECTION,
  HOME_MARQUEE_ITEMS,
  HOME_INGREDIENTS_GRID,
  HOME_STATS_SECTION,
  HOME_HOW_IT_WORKS,
  HOME_TESTIMONIALS,
} from '../data/mockData';


interface HomePageProps {
  readonly className?: string;
}

export const HomePage: React.FC<HomePageProps> = ({ className = '' }) => {
  const marqueeItems = [...HOME_MARQUEE_ITEMS, ...HOME_MARQUEE_ITEMS];

  return (
    <main className={className}>

      {/* ── Hero — full-bleed model + giant watermark ──────────────────────── */}
      <section className="relative w-full min-h-[100vh] overflow-hidden">
        {/* Model image */}
        <img
          src={HOME_HERO.imageSrc}
          alt={HOME_HERO.imageAlt}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Subtle top fade so nav is readable */}
        <div className="absolute top-0 left-0 right-0 h-[160px] bg-gradient-to-b from-[#F5EAE0]/50 to-transparent" />
        {/* Bottom fade into page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#F5EAE0]/70 via-[#F5EAE0]/15 to-transparent" />

        {/* Giant PATINA watermark — sits at the bottom, spans full width */}
        <div className="absolute bottom-[-0.5rem] left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center">
          <span
            className="font-['Cormorant_Garamond'] font-300 leading-[0.82] tracking-[0.12em] text-[#F5EAE0] whitespace-nowrap"
            style={{ fontSize: 'clamp(100px, 22vw, 320px)' }}
          >
            PATINA
          </span>
        </div>
      </section>

      {/* ── Manifesto strip ───────────────────────────────────────────────── */}
      <section className="w-full py-[80px] px-6 md:px-10 border-b border-[#D4C9BE] flex flex-col items-center justify-center text-center">
        <ScrollReveal variant="fade-up">
          <p className="font-['Inter'] text-[11px] font-medium tracking-[0.22em] uppercase text-[#2A4E3C] mb-6">
            Our philosophy
          </p>
          <h2 className="font-['Cormorant_Garamond'] font-300 italic text-[52px] md:text-[72px] leading-[1.05] tracking-[0.01em] text-[#1A2B23]">
            One product. Done right.
          </h2>
        </ScrollReveal>
      </section>

      {/* ── Intro — text left, model image right ──────────────────────────── */}
      <section className="pt-[100px] pb-[80px] px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left: text */}
          <ScrollReveal variant="fade-right">
            <div className="flex flex-col gap-5 max-w-[480px]">
              <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C]">
                {HOME_INTRO_SECTION.label}
              </span>
              <div>
                <h1 className="font-['Cormorant_Garamond'] font-300 text-[48px] md:text-[58px] leading-[1.05] tracking-[0.01em] text-[#1A2B23]">
                  {HOME_INTRO_SECTION.headline}
                </h1>
                <h1 className="font-['Cormorant_Garamond'] font-300 italic text-[48px] md:text-[58px] leading-[1.05] tracking-[0.01em] text-[#1A2B23]">
                  {HOME_INTRO_SECTION.headlineItalic}
                </h1>
              </div>
              <p className="font-['Inter'] text-[15px] leading-[1.8] text-[#4A5D55]">
                {HOME_INTRO_SECTION.body1}
              </p>
              <p className="font-['Inter'] text-[15px] leading-[1.8] text-[#4A5D55]">
                {HOME_INTRO_SECTION.body2}
              </p>
              <Link
                to={HOME_INTRO_SECTION.cta.href}
                className="inline-block w-fit mt-3 font-['Inter'] text-[11px] font-medium tracking-[0.16em] uppercase border border-[#1A2B23] text-[#1A2B23] py-3.5 px-8 hover:bg-[#1A2B23] hover:text-[#F5EAE0] transition-colors duration-300"
              >
                {HOME_INTRO_SECTION.cta.label} →
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: model photo */}
          <ScrollReveal variant="fade-left" delay={100}>
            <div className="w-full overflow-hidden">
              <img
                src={HOME_HERO.imageSrc}
                alt="Patina eye recovery patch on model"
                className="w-full h-[480px] md:h-[560px] object-cover object-top"
              />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── Product — image grid left, text right ─────────────────────────── */}
      <section className="pb-[100px] px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left: 2×2 image grid */}
          <ScrollReveal variant="fade-right">
            <div className="grid grid-cols-2 gap-3">
              {/* Large top image — spans full width */}
              <div className="col-span-2">
                <img
                  src={HOME_HERO.imageSrc}
                  alt="Patina patch model — close-up"
                  className="w-full h-[340px] object-cover object-top"
                />
              </div>
              {/* Bottom left: second model shot */}
              <div>
                <img
                  src={HOME_HERO.imageSrc}
                  alt="Patina patch model"
                  className="w-full h-[200px] object-cover object-[50%_20%]"
                />
              </div>
              {/* Bottom right: dark green badge box */}
              <div className="bg-[#1A2B23] flex flex-col items-center justify-center h-[200px] gap-1">
                <span className="font-['Cormorant_Garamond'] font-300 text-[22px] leading-[1] text-[#F5EAE0]">N°</span>
                <span className="font-['Cormorant_Garamond'] font-300 text-[52px] leading-[0.9] text-[#F5EAE0]">002</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: text */}
          <ScrollReveal variant="fade-left" delay={100}>
            <div className="flex flex-col gap-5 max-w-[420px]">
              <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C]">
                {HOME_PRODUCT_SECTION.label}
              </span>
              <h2 className="font-['Cormorant_Garamond'] font-300 text-[44px] md:text-[52px] leading-[1.1] tracking-[0.01em] text-[#1A2B23]">
                {HOME_PRODUCT_SECTION.headline}
              </h2>
              <p className="font-['Inter'] text-[15px] leading-[1.8] text-[#4A5D55]">
                {HOME_PRODUCT_SECTION.body1}
              </p>
              <p className="font-['Inter'] text-[15px] leading-[1.8] text-[#4A5D55]">
                {HOME_PRODUCT_SECTION.body2}
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── Marquee ticker ────────────────────────────────────────────────── */}
      <div className="w-full overflow-hidden border-t border-b border-[#D4C9BE] py-3.5">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-['Inter'] text-[10px] font-medium tracking-[0.22em] uppercase text-[#2A4E3C] px-7">
                {item}
              </span>
              <span className="text-[#2A4E3C] text-[8px]">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Ingredients — centered headline + 4 cards ─────────────────────── */}
      <section className="py-[100px] px-6 md:px-10 max-w-[1440px] mx-auto">

        <ScrollReveal variant="fade-up">
          <div className="text-center mb-14">
            <span className="font-['Inter'] text-[11px] font-medium tracking-[0.2em] uppercase text-[#2A4E3C] block mb-7">
              {HOME_INGREDIENTS_GRID.label}
            </span>
            <h2 className="font-['Cormorant_Garamond'] font-300 text-[52px] md:text-[68px] leading-[1.05] tracking-[0.01em] text-[#1A2B23] block">
              {HOME_INGREDIENTS_GRID.headline}
            </h2>
            <h2 className="font-['Cormorant_Garamond'] font-300 italic text-[52px] md:text-[68px] leading-[1.05] tracking-[0.01em] text-[#1A2B23] block">
              {HOME_INGREDIENTS_GRID.headlineItalic}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {HOME_INGREDIENTS_GRID.items.map((item, i) => (
            <ScrollReveal key={item.name} variant="fade-up" delay={i * 80}>
              <div className="bg-[#EDE5D8] rounded-[14px] p-7 flex flex-col gap-4 h-full">
                <span className="font-['Inter'] text-[20px] font-300 text-[#4A5D55] leading-[1]">—</span>
                <h3 className="font-['Inter'] text-[16px] font-medium text-[#1A2B23] leading-[1.3]">
                  {item.name}
                </h3>
                <p className="font-['Inter'] text-[13px] leading-[1.75] text-[#4A5D55]">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </section>

      {/* ── Stats — dark green full-width ─────────────────────────────────── */}
      <section className="w-full bg-[#1A2B23] py-[80px] px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3">
          {HOME_STATS_SECTION.map((stat, i) => (
            <ScrollReveal key={stat.value} variant="fade-up" delay={i * 100}>
              <div className={`text-center py-8 md:py-6 ${i < HOME_STATS_SECTION.length - 1 ? 'md:border-r border-white/10' : ''}`}>
                <p className="font-['Cormorant_Garamond'] font-300 text-[80px] md:text-[96px] leading-[1.0] tracking-[-0.02em] text-white mb-3">
                  {stat.value}
                </p>
                <p className="font-['Inter'] text-[13px] leading-[1.65] text-white/55 max-w-[180px] mx-auto">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── How to use ────────────────────────────────────────────────────── */}
      <section className="py-[100px] px-6 md:px-10 max-w-[1440px] mx-auto">

        <ScrollReveal variant="fade-up">
          <div className="mb-[60px]">
            <span className="font-['Inter'] text-[11px] font-medium tracking-[0.2em] uppercase text-[#2A4E3C] block mb-5">
              Ritual
            </span>
            <h2 className="font-['Cormorant_Garamond'] font-300 text-[52px] md:text-[64px] leading-[1.05] tracking-[0.01em] text-[#1A2B23]">
              {HOME_HOW_IT_WORKS.headline}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#D4C9BE]">
          {HOME_HOW_IT_WORKS.steps.map((step, i) => (
            <ScrollReveal key={step.number} variant="fade-up" delay={i * 100}>
              <div className={`pt-10 pb-10 md:pr-10 ${i < HOME_HOW_IT_WORKS.steps.length - 1 ? 'md:border-r border-[#D4C9BE]' : ''}`}>
                <span className="font-['Cormorant_Garamond'] font-300 text-[80px] leading-[0.85] text-[#D4C9BE] block mb-4">
                  {step.number}
                </span>
                <h3 className="font-['Cormorant_Garamond'] font-300 text-[36px] leading-[1.1] text-[#1A2B23] mb-3">
                  {step.title}
                </h3>
                <p className="font-['Inter'] text-[14px] leading-[1.8] text-[#4A5D55]">
                  {step.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Product image + CTA below steps */}
        <ScrollReveal variant="fade-up" delay={150}>
          <div className="mt-[60px] border-t border-[#D4C9BE] pt-[60px] flex flex-col md:flex-row items-center justify-between gap-8">
            <img
              src="/assets/patch-blush.png"
              alt="Patina Luminous Patch"
              className="w-full max-w-[260px]"
            />
            <div className="text-center md:text-right">
              <p className="font-['Cormorant_Garamond'] font-300 italic text-[28px] leading-[1.3] text-[#1A2B23] mb-6">
                {HOME_HOW_IT_WORKS.subheadline}
              </p>
              <Link
                to="/product"
                className="inline-block font-['Inter'] text-[11px] font-medium tracking-[0.16em] uppercase border border-[#1A2B23] text-[#1A2B23] py-3.5 px-8 hover:bg-[#1A2B23] hover:text-[#F5EAE0] transition-colors duration-300"
              >
                Shop the Patch →
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="pb-[100px] px-6 md:px-10 max-w-[900px] mx-auto">
        <div className="flex flex-col gap-0 border-t border-[#D4C9BE]">
          {HOME_TESTIMONIALS.map((t, i) => (
            <React.Fragment key={t.attribution}>
              <ScrollReveal variant="fade-up">
                <blockquote className="py-14 text-center">
                  <p className="font-['Cormorant_Garamond'] font-300 text-[30px] leading-[1.45] tracking-[0.01em] text-[#1A2B23] italic mb-5">
                    "{t.quote}"
                  </p>
                  <footer className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#7A8D86]">
                    — {t.attribution}
                  </footer>
                </blockquote>
              </ScrollReveal>
              {i < HOME_TESTIMONIALS.length - 1 && (
                <div className="w-full h-[1px] bg-[#D4C9BE]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

    </main>
  );
};

export default HomePage;
