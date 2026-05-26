import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { GIFT_SETS } from '../data/mockData';

interface GiftingPageProps {
  readonly className?: string;
}

export const GiftingPage: React.FC<GiftingPageProps> = ({ className = '' }) => {
  return (
    <main className={className}>
      <section className="py-[120px] px-6 md:px-20 flex flex-col items-center text-center max-w-3xl mx-auto">
        <ScrollReveal variant="fade-up">
          <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C] mb-6 block">GIFTING</span>
          <h1 className="font-['Cormorant_Garamond'] font-300 text-[56px] leading-[1.1] tracking-[0.01em] text-[#1A2B23] mb-8">The gift of good skin.</h1>
          <p className="font-['Inter'] text-[16px] leading-[1.7] text-[#4A5D55]">Presented in our signature packaging, every Patina gift set is designed to feel as considered as it looks.</p>
        </ScrollReveal>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {GIFT_SETS.map((set, i) => (
            <ScrollReveal key={set.name} variant="fade-up" delay={i * 120}>
              <div className="flex flex-col gap-6">
                <div className="bg-[#E8E5DF] flex items-center justify-center py-16 px-8">
                  <img src="/assets/sachet.png" alt={set.name} className="w-full max-w-[280px] mx-auto" />
                </div>
                <div className="border-t border-[#D0CEC8] pt-6 flex flex-col gap-4">
                  <div className="flex justify-between items-baseline">
                    <h2 className="font-['Cormorant_Garamond'] font-300 text-[36px] leading-[1.2] tracking-[0.01em] text-[#1A2B23]">{set.name}</h2>
                    <span className="font-['Cormorant_Garamond'] font-400 text-[28px] text-[#1A2B23]">{set.price}</span>
                  </div>
                  <p className="font-['Inter'] text-[15px] leading-[1.7] text-[#4A5D55]">{set.description}</p>
                  <ul className="flex flex-col gap-1">
                    {set.contents.map((item) => (
                      <li key={item} className="font-['Inter'] text-[13px] leading-[1.6] text-[#4A5D55] flex items-center gap-2">
                        <span className="text-[#2A4E3C]">—</span>{item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#2A4E3C] font-['Inter'] text-[11px] font-medium tracking-[0.16em] uppercase text-white py-4 px-8 hover:bg-[#3D6654] transition-colors duration-300 mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GiftingPage;
