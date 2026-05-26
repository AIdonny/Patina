import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { REVIEWS_STATS, REVIEWS } from '../data/mockData';

interface ReviewsPageProps {
  readonly className?: string;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ className = '' }) => {
  return (
    <main className={className}>
      <section className="py-[120px] px-6 md:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-b border-[#D0CEC8] pb-[120px]">
          {REVIEWS_STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="fade-up" delay={i * 100}>
              <div>
                <p className="font-['Cormorant_Garamond'] font-300 text-[72px] leading-[1.0] tracking-[0.01em] text-[#1A2B23] mb-3">
                  {stat.value}
                </p>
                <p className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#7A8D86]">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-4xl mx-auto">
        <div className="flex flex-col gap-0">
          {REVIEWS.map((review, i) => (
            <React.Fragment key={review.name}>
              <ScrollReveal variant="fade-up">
                <blockquote className="py-16 text-center">
                  <p className="font-['Cormorant_Garamond'] font-300 text-[32px] leading-[1.4] tracking-[0.01em] text-[#1A2B23] italic mb-6">
                    "{review.quote}"
                  </p>
                  <footer className="flex flex-col items-center gap-1">
                    <span className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C]">
                      {review.name}
                    </span>
                    <span className="font-['Inter'] text-[11px] tracking-[0.08em] text-[#7A8D86]">
                      {review.title}{review.verified && ' · Verified'}
                    </span>
                  </footer>
                </blockquote>
              </ScrollReveal>
              {i < REVIEWS.length - 1 && <div className="w-full h-[1px] bg-[#D0CEC8]" />}
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ReviewsPage;
