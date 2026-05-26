import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { PRODUCT, PRODUCT_BENEFITS } from '../data/mockData';

interface ProductPageProps {
  readonly className?: string;
}

export const ProductPage: React.FC<ProductPageProps> = ({ className = '' }) => {
  return (
    <main className={`py-[120px] px-6 md:px-20 max-w-[1280px] mx-auto ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Product imagery — sachet + patches */}
        <ScrollReveal variant="fade-right">
          <div className="flex flex-col gap-6">
            {/* Sachet — main hero */}
            <div className="bg-[#E8E5DF] flex items-center justify-center py-16 px-8">
              <img
                src="/assets/sachet.png"
                alt="Patina eye recovery patches — hydrogel sachet"
                className="w-full max-w-[340px] mx-auto"
              />
            </div>
            {/* Patches — secondary */}
            <div className="bg-[#EDD4CF]/25 flex items-center justify-center py-12 px-8">
              <img
                src="/assets/patch-blush.png"
                alt="Patina blush under-eye patches"
                className="w-full max-w-[300px] mx-auto"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Product info */}
        <ScrollReveal variant="fade-left" delay={120}>
          <div className="flex flex-col gap-8 md:sticky md:top-24">

            <div className="flex items-center gap-3">
              <span className="font-['Inter'] text-[11px] font-medium tracking-[0.18em] uppercase text-[#2A4E3C]">
                {PRODUCT.label}
              </span>
              <span className="font-['Inter'] text-[11px] tracking-[0.1em] text-[#7A8D86]">
                N° 002
              </span>
            </div>

            <div>
              <h1 className="font-['Cormorant_Garamond'] font-300 text-[52px] leading-[1.1] tracking-[0.02em] text-[#1A2B23] mb-2">
                {PRODUCT.name}
              </h1>
              <p className="font-['Cormorant_Garamond'] text-[20px] italic font-300 leading-[1.4] text-[#4A5D55]">
                {PRODUCT.tagline}
              </p>
            </div>

            {/* Price */}
            <p className="font-['Cormorant_Garamond'] font-400 text-[36px] leading-[1.2] text-[#1A2B23]">
              {PRODUCT.price}
            </p>

            {/* Description */}
            <p className="font-['Inter'] text-[15px] leading-[1.7] text-[#4A5D55]">
              {PRODUCT.description}
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-4">
              {PRODUCT_BENEFITS.map((b) => (
                <div key={b.label} className="border-t border-[#D0CEC8] pt-4">
                  <p className="font-['Inter'] text-[11px] font-medium tracking-[0.12em] uppercase text-[#2A4E3C] mb-1">
                    {b.label}
                  </p>
                  <p className="font-['Inter'] text-[13px] leading-[1.5] text-[#4A5D55]">
                    {b.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="border-t border-[#D0CEC8] pt-8">
              <button className="w-full bg-[#2A4E3C] font-['Inter'] text-[11px] font-medium tracking-[0.16em] uppercase text-white py-4 px-8 hover:bg-[#3D6654] transition-colors duration-300">
                Add to Cart
              </button>
              <p className="font-['Inter'] text-[11px] text-[#7A8D86] tracking-[0.06em] text-center mt-3">
                Free shipping on orders over $60
              </p>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default ProductPage;
