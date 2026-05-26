import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../data/mockData';

interface FooterProps {
  readonly className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-[#F2F0ED] border-t border-[#D0CEC8] ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-20 py-8 max-w-[1280px] mx-auto gap-6 md:gap-0">

        {/* Wordmark */}
        <Link
          to="/"
          className="font-['Cormorant_Garamond'] text-[18px] tracking-[0.22em] uppercase font-400 text-[#2A4E3C]"
        >
          PATINA
        </Link>

        {/* Legal */}
        <p className="font-['Inter'] text-[11px] tracking-[0.06em] text-[#7A8D86] order-last md:order-none text-center">
          © 2024 Patina. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex gap-8 items-center">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-['Inter'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#4A5D55] hover:text-[#2A4E3C] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
