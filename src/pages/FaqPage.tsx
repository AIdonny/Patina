import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { FAQ_SECTIONS } from '../data/mockData';

interface FaqPageProps {
  readonly className?: string;
}

export const FaqPage: React.FC<FaqPageProps> = ({ className = '' }) => {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (key: string) => setOpen((prev) => (prev === key ? null : key));

  return (
    <main className={className}>
      <section className="py-[120px] px-6 md:px-20 flex flex-col items-center text-center max-w-3xl mx-auto">
        <ScrollReveal variant="fade-up">
          <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C] mb-6 block">
            QUESTIONS
          </span>
          <h1 className="font-['Cormorant_Garamond'] font-300 text-[56px] leading-[1.1] tracking-[0.01em] text-[#1A2B23]">
            Everything you need to know.
          </h1>
        </ScrollReveal>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-3xl mx-auto">
        <div className="flex flex-col gap-16">
          {FAQ_SECTIONS.map((section, si) => (
            <ScrollReveal key={section.section} variant="fade-up" delay={si * 60}>
              <div>
                <h2 className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C] mb-8">
                  {section.section}
                </h2>
                <div className="flex flex-col">
                  {section.questions.map((item) => {
                    const key = `${section.section}-${item.q}`;
                    const isOpen = open === key;
                    return (
                      <div key={item.q} className="border-t border-[#D0CEC8]">
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex justify-between items-start py-6 text-left gap-4"
                        >
                          <span className="font-['Cormorant_Garamond'] font-400 text-[22px] leading-[1.3] text-[#1A2B23]">
                            {item.q}
                          </span>
                          <span className="font-['Inter'] text-[20px] text-[#4A5D55] flex-shrink-0 mt-0.5">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="pb-6">
                            <p className="font-['Inter'] text-[15px] leading-[1.7] text-[#4A5D55]">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FaqPage;
