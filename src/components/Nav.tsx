import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MAIN_LINKS = [
  { label: 'About', href: '/why-patina' },
  { label: 'The Product', href: '/product' },
  { label: 'Ingredients', href: '/ingredients' },
  { label: 'Reviews', href: '/reviews' },
] as const;

interface NavProps {
  readonly className?: string;
}

export const Nav: React.FC<NavProps> = ({ className = '' }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-[background-color,backdrop-filter,box-shadow] duration-500
        ${scrolled
          ? 'bg-[#F5EAE0]/95 backdrop-blur-sm shadow-[0_1px_0_0_#D4C9BE]'
          : 'bg-[#F5EAE0]'}
        ${className}
      `}
    >
      <nav className="relative flex items-center justify-between h-[64px] px-6 md:px-10 max-w-[1440px] mx-auto">

        {/* Left — wordmark */}
        <Link
          to="/"
          className="font-['Cormorant_Garamond'] font-400 text-[18px] tracking-[0.22em] uppercase text-[#1A2B23] hover:text-[#2A4E3C] transition-colors duration-300 flex-shrink-0 z-10"
        >
          PATINA
        </Link>

        {/* Center — nav links (desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {MAIN_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`
                font-['Inter'] text-[11px] font-medium tracking-[0.13em] uppercase
                transition-colors duration-300
                ${location.pathname === link.href
                  ? 'text-[#1A2B23]'
                  : 'text-[#6A7D75] hover:text-[#1A2B23]'}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — SHOP NOW */}
        <Link
          to="/product"
          className="flex-shrink-0 z-10 font-['Inter'] text-[11px] font-medium tracking-[0.13em] uppercase border border-[#1A2B23] text-[#1A2B23] py-2.5 px-6 hover:bg-[#1A2B23] hover:text-[#F5EAE0] transition-colors duration-300"
        >
          Shop Now
        </Link>

      </nav>
    </header>
  );
};

export default Nav;
