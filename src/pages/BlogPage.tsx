import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { BLOG_POSTS } from '../data/mockData';

interface BlogPageProps {
  readonly className?: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ className = '' }) => {
  return (
    <main className={className}>
      <section className="py-[120px] px-6 md:px-20 flex flex-col items-center text-center max-w-3xl mx-auto">
        <ScrollReveal variant="fade-up">
          <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C] mb-6 block">JOURNAL</span>
          <h1 className="font-['Cormorant_Garamond'] font-300 text-[56px] leading-[1.1] tracking-[0.01em] text-[#1A2B23]">Skin, science, and ritual.</h1>
        </ScrollReveal>
      </section>

      <section className="pb-[120px] px-6 md:px-20 max-w-[1280px] mx-auto">
        <ScrollReveal variant="fade-up">
          <div className="border-t border-[#D0CEC8] pb-[80px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-[80px]">
              <img src={BLOG_POSTS[0].imageSrc} alt={BLOG_POSTS[0].title} className="w-full h-[480px] object-cover" />
              <div className="flex flex-col justify-center gap-4">
                <div className="flex gap-4 items-center">
                  <span className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C]">{BLOG_POSTS[0].category}</span>
                  <span className="font-['Inter'] text-[11px] text-[#7A8D86]">{BLOG_POSTS[0].date}</span>
                </div>
                <h2 className="font-['Cormorant_Garamond'] font-300 text-[36px] leading-[1.2] tracking-[0.01em] text-[#1A2B23]">{BLOG_POSTS[0].title}</h2>
                <p className="font-['Inter'] text-[16px] leading-[1.7] text-[#4A5D55]">{BLOG_POSTS[0].excerpt}</p>
                <a href="#" className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C] pb-1 border-b border-[#2A4E3C] hover:text-[#3D6654] transition-colors duration-300 w-fit mt-2">Read Article →</a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#D0CEC8] pt-[80px]">
          {BLOG_POSTS.slice(1).map((post, i) => (
            <ScrollReveal key={post.title} variant="fade-up" delay={i * 100}>
              <div className="flex flex-col gap-4">
                <img src={post.imageSrc} alt={post.title} className="w-full h-[320px] object-cover" />
                <div className="flex gap-4 items-center mt-2">
                  <span className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C]">{post.category}</span>
                  <span className="font-['Inter'] text-[11px] text-[#7A8D86]">{post.date}</span>
                </div>
                <h3 className="font-['Cormorant_Garamond'] font-300 text-[28px] leading-[1.2] tracking-[0.01em] text-[#1A2B23]">{post.title}</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.7] text-[#4A5D55]">{post.excerpt}</p>
                <a href="#" className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#2A4E3C] pb-1 border-b border-[#2A4E3C] hover:text-[#3D6654] transition-colors duration-300 w-fit">Read Article →</a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
