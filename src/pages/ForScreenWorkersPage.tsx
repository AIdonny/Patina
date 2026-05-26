import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { SCREEN_WORKERS } from '../data/mockData';

interface ForScreenWorkersPageProps {
  readonly className?: string;
}

export const ForScreenWorkersPage: React.FC<ForScreenWorkersPageProps> = ({ className = '' }) => {
  return (
    <main className={className}>
      <section className="py-[120px] px-6 md:px-20 flex flex-col items-center text-center max-w-3xl mx-auto">
        <ScrollReveal variant="fade-up">
          <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C] mb-6 block">{SCREEN_WORKERS.label}</span>
          <h1 className="font-['Cormorant_Garamond'] font-300 text-[56px] leading-[1.1] tracking-[0.01em] text-[#1A2B23] mb-8">{SCREEN_WORKERS.headline}</h1>
          <p className="font-['Inter'] text-[16px] leading-[1.7] text-[#4A5D55]">{SCREEN_WORKERS.body}</p>
        </ScrollReveal>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-[#D0CEC8] py-16">
          {SCREEN_WORKERS.stats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="fade-up" delay={i * 100}>
              <div className="text-center">
                <p className="font-['Cormorant_Garamond'] font-300 text-[72px] leading-[1.0] text-[#1A2B23] mb-2">{stat.value}</p>
                <p className="font-['Inter'] text-[13px] leading-[1.6] text-[#4A5D55]">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SCREEN_WORKERS.benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.label} variant="fade-up" delay={i * 100}>
              <div className="border-t border-[#D0CEC8] pt-6">
                <h3 className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C] mb-4">{benefit.label}</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.7] text-[#4A5D55]">{benefit.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="pb-[120px] px-6 md:px-20 flex justify-center">
        <ScrollReveal variant="fade-up">
          <Link to="/product" className="inline-block bg-[#2A4E3C] font-['Inter'] text-[11px] font-medium tracking-[0.16em] uppercase text-white py-4 px-12 hover:bg-[#3D6654] transition-colors duration-300">
            Shop the Patch →
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default ForScreenWorkersPage;
