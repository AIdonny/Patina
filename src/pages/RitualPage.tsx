import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { RITUAL_STEPS } from '../data/mockData';

interface RitualPageProps {
  readonly className?: string;
}

export const RitualPage: React.FC<RitualPageProps> = ({ className = '' }) => {
  const morningSteps = RITUAL_STEPS.filter((s) => s.time === 'MORNING');
  const eveningSteps = RITUAL_STEPS.filter((s) => s.time === 'EVENING');

  return (
    <main className={className}>
      <section className="py-[120px] px-6 md:px-20 flex flex-col items-center text-center max-w-3xl mx-auto">
        <ScrollReveal variant="fade-up">
          <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C] mb-6 block">THE RITUAL</span>
          <h1 className="font-['Cormorant_Garamond'] font-300 text-[56px] leading-[1.1] tracking-[0.01em] text-[#1A2B23] mb-8">A routine worth keeping.</h1>
          <p className="font-['Inter'] text-[16px] leading-[1.7] text-[#4A5D55]">Skincare works best when it becomes ritual. Here is how the Luminous Patch fits into morning and evening routines — simply, effectively.</p>
        </ScrollReveal>
      </section>

      {[{ label: 'Morning', steps: morningSteps }, { label: 'Evening', steps: eveningSteps }].map(({ label, steps }) => (
        <section key={label} className="pb-[120px] px-6 md:px-20 max-w-[1280px] mx-auto">
          <ScrollReveal variant="fade-in">
            <h2 className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C] mb-12">{label}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} variant="fade-up" delay={i * 120}>
                <div className="border-t border-[#D0CEC8] pt-6">
                  <span className="font-['Cormorant_Garamond'] font-300 text-[72px] leading-[1.0] text-[#EDD4CF] block mb-4">{step.step}</span>
                  <h3 className="font-['Cormorant_Garamond'] font-400 text-[26px] leading-[1.3] text-[#1A2B23] mb-4">{step.title}</h3>
                  <p className="font-['Inter'] text-[15px] leading-[1.7] text-[#4A5D55]">{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default RitualPage;
