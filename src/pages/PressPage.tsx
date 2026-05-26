import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { PRESS_QUOTES, PRESS_LOGOS } from '../data/mockData';

interface PressPageProps {
  readonly className?: string;
}

export const PressPage: React.FC<PressPageProps> = ({ className = '' }) => {
  return (
    <main className={className}>
      <section className="py-[120px] px-6 md:px-20 flex flex-col items-center text-center max-w-3xl mx-auto">
        <ScrollReveal variant="fade-up">
          <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C] mb-6 block">AS SEEN IN</span>
          <h1 className="font-['Cormorant_Garamond'] font-300 text-[56px] leading-[1.1] tracking-[0.01em] text-[#1A2B23]">The press have spoken.</h1>
        </ScrollReveal>
      </section>

      <section className="pb-[80px] px-6 md:px-20 max-w-[1280px] mx-auto">
        <ScrollReveal variant="fade-in">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-b border-[#D0CEC8] py-12">
            {PRESS_LOGOS.map((logo) => (
              <span key={logo} className="font-['Cormorant_Garamond'] font-300 text-[22px] italic text-[#4A5D55]">{logo}</span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-4xl mx-auto">
        <div className="flex flex-col gap-0">
          {PRESS_QUOTES.map((item, i) => (
            <React.Fragment key={item.publication}>
              <ScrollReveal variant="fade-up">
                <div className="py-16">
                  <span className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C] block mb-6">
                    {item.publication} — {item.issue}
                  </span>
                  <blockquote className="font-['Cormorant_Garamond'] font-300 text-[36px] leading-[1.3] tracking-[0.01em] text-[#1A2B23] italic">
                    "{item.quote}"
                  </blockquote>
                </div>
              </ScrollReveal>
              {i < PRESS_QUOTES.length - 1 && <div className="w-full h-[1px] bg-[#D0CEC8]" />}
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PressPage;
