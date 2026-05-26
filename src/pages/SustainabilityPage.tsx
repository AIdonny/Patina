import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SUSTAINABILITY } from '../data/mockData';

interface SustainabilityPageProps {
  readonly className?: string;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ className = '' }) => {
  return (
    <main className={className}>
      <section className="py-[120px] px-6 md:px-20 flex flex-col items-center text-center max-w-3xl mx-auto">
        <ScrollReveal variant="fade-up">
          <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C] mb-6 block">{SUSTAINABILITY.label}</span>
          <h1 className="font-['Cormorant_Garamond'] font-300 text-[56px] leading-[1.1] tracking-[0.01em] text-[#1A2B23] mb-4">{SUSTAINABILITY.headline}</h1>
          <p className="font-['Inter'] text-[16px] leading-[1.7] text-[#4A5D55]">{SUSTAINABILITY.subtext}</p>
        </ScrollReveal>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SUSTAINABILITY.claims.map((claim, i) => (
            <ScrollReveal key={claim.label} variant="fade-up" delay={i * 100}>
              <div className="border-t border-[#D0CEC8] pt-6">
                <h3 className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C] mb-4">{claim.label}</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.7] text-[#4A5D55]">{claim.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-[1280px] mx-auto">
        {SUSTAINABILITY.materials.map((material, i) => (
          <ScrollReveal key={material.name} variant="fade-up">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 py-[80px] ${i < SUSTAINABILITY.materials.length - 1 ? 'border-b border-[#D0CEC8]' : ''}`}>
              <div className="border-t border-[#D0CEC8] pt-6">
                <h2 className="font-['Cormorant_Garamond'] font-300 text-[38px] leading-[1.2] tracking-[0.01em] text-[#1A2B23] mb-4">{material.name}</h2>
                <p className="font-['Inter'] text-[16px] leading-[1.7] text-[#4A5D55] mb-6">{material.body}</p>
                <span className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C]">{material.stat}</span>
              </div>
              <div className="hidden md:block" />
            </div>
          </ScrollReveal>
        ))}
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-2xl mx-auto text-center">
        <ScrollReveal variant="fade-up">
          <div className="border-t border-[#D0CEC8] pt-16">
            <p className="font-['Cormorant_Garamond'] font-300 text-[36px] leading-[1.3] tracking-[0.01em] text-[#1A2B23] italic mb-8">"{SUSTAINABILITY.pledge}"</p>
            <p className="font-['Inter'] text-[15px] leading-[1.7] text-[#4A5D55]">{SUSTAINABILITY.pledgeBody}</p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default SustainabilityPage;
