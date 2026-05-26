import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { INGREDIENTS } from '../data/mockData';

interface IngredientsPageProps {
  readonly className?: string;
}

export const IngredientsPage: React.FC<IngredientsPageProps> = ({ className = '' }) => {
  return (
    <main className={className}>
      <section className="py-[120px] px-6 md:px-20 flex flex-col items-center text-center max-w-3xl mx-auto">
        <ScrollReveal variant="fade-up">
          <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C] mb-6 block">
            WHAT'S INSIDE
          </span>
          <h1 className="font-['Cormorant_Garamond'] font-300 text-[56px] leading-[1.1] tracking-[0.01em] text-[#1A2B23] mb-8">
            Every ingredient, explained.
          </h1>
          <p className="font-['Inter'] text-[16px] leading-[1.7] text-[#4A5D55]">
            No filler. No mystery. Every component of the Luminous Patch is here because it earns its place — clinically validated, purposefully dosed.
          </p>
        </ScrollReveal>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-0">
          {INGREDIENTS.map((ingredient, i) => (
            <ScrollReveal key={ingredient.name} variant="fade-up">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-[80px] ${i < INGREDIENTS.length - 1 ? 'border-b border-[#D0CEC8]' : ''}`}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <img src={ingredient.imageSrc} alt={ingredient.name} className="w-full h-[400px] object-cover" />
                </div>
                <div className={`flex flex-col gap-4 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C]">
                    {ingredient.type}
                  </span>
                  <h2 className="font-['Cormorant_Garamond'] font-300 text-[38px] leading-[1.2] tracking-[0.01em] text-[#1A2B23]">
                    {ingredient.name}
                  </h2>
                  <p className="font-['Inter'] text-[16px] leading-[1.7] text-[#4A5D55]">
                    {ingredient.body}
                  </p>
                  <div className="border-t border-[#D0CEC8] pt-4 mt-2">
                    <span className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C]">
                      {ingredient.stat}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default IngredientsPage;
