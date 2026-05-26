import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { WHY_PATINA } from '../data/mockData';

interface WhyPatinaPageProps {
  readonly className?: string;
}

export const WhyPatinaPage: React.FC<WhyPatinaPageProps> = ({ className = '' }) => {
  return (
    <main className={className}>
      <section className="py-[120px] px-6 md:px-20 flex flex-col items-center text-center max-w-3xl mx-auto">
        <ScrollReveal variant="fade-up">
          <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C] mb-6 block">
            {WHY_PATINA.label}
          </span>
          <h1 className="font-['Cormorant_Garamond'] font-300 text-[56px] leading-[1.1] tracking-[0.01em] text-[#1A2B23] mb-8">
            {WHY_PATINA.headline}
          </h1>
          <p className="font-['Inter'] text-[16px] leading-[1.7] text-[#4A5D55]">
            {WHY_PATINA.intro}
          </p>
        </ScrollReveal>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-[120px]">
          {WHY_PATINA.sections.map((s, i) => (
            <ScrollReveal key={s.heading} variant={i % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="border-t border-[#D0CEC8] pt-8">
                  <span className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C] mb-4 block">
                    {s.stat}
                  </span>
                  <h2 className="font-['Cormorant_Garamond'] font-300 text-[38px] leading-[1.2] tracking-[0.01em] text-[#1A2B23] mb-6">
                    {s.heading}
                  </h2>
                  <p className="font-['Inter'] text-[16px] leading-[1.7] text-[#4A5D55]">
                    {s.body}
                  </p>
                </div>
                <div className="hidden md:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WhyPatinaPage;
