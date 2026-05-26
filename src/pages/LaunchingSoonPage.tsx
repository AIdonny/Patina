import React, { useState } from 'react';
import { useForm } from '@formspree/react';

interface LaunchingSoonPageProps {
  readonly className?: string;
}

export const LaunchingSoonPage: React.FC<LaunchingSoonPageProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [formState, handleFormspreeSubmit] = useForm('mojbkyrj');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormspreeSubmit(e as any);
  };

  return (
    <div
      className={`h-[100dvh] bg-[#EDE9E1] flex flex-col overflow-hidden relative ${className}`}
    >

      {/* ── Coffee grounds — full-page background ──────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: 'translateY(-8%)' }}
      >
        <img
          src="/assets/coffee-grounds.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
          style={{
            mixBlendMode: 'multiply',
            animation: 'fadeUp 1.1s cubic-bezier(0.22,1,0.36,1) 0.1s both',
          }}
        />
      </div>

      {/* Edge fades — dissolve image into bg on all sides */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#EDE9E1] via-[#EDE9E1]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#EDE9E1] via-[#EDE9E1]/90 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-[#EDE9E1] via-[#EDE9E1]/60 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-[25%] bg-gradient-to-l from-[#EDE9E1] via-[#EDE9E1]/60 to-transparent pointer-events-none z-10" />

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="relative z-20 flex-shrink-0 flex items-center justify-center px-5 h-[50px]">
        <span className="font-['Marcellus_SC'] text-[20px] tracking-[0.28em] text-[#2A4E3C]">
          patina
        </span>
      </header>

      {/* Spacer — pushes content to bottom */}
      <div className="flex-1" />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div
        className="relative z-20 flex-shrink-0 px-6 pb-[max(36px,env(safe-area-inset-bottom))]"
        style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both' }}
      >
        {/* Label */}
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#4A5D55] mb-5 text-center">
          Premium Under-Eye Patches
        </p>

        {/* Headline */}
        <h1 className="font-['Cormorant_Garamond'] font-300 text-[54px] leading-[1.0] text-[#1A2B23] mb-7 text-center">
          Rest as a Ritual.
        </h1>

        {/* Email form */}
        {!formState.succeeded ? (
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#4A5D55] mb-5 text-center">
              Be the first to know
            </p>
            <form
              onSubmit={handleSubmit}
              className={`flex items-center border-b transition-colors duration-300 pb-3 ${
                focused ? 'border-[#1A2B23]' : 'border-[#1A2B23]/40'
              }`}
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                required
                className="flex-1 bg-transparent font-mono text-[14px] text-[#1A2B23] placeholder-[#1A2B23]/30 focus:outline-none"
              />
              <button
                type="submit"
                disabled={formState.submitting}
                className="ml-3 text-[#1A2B23] hover:text-[#2A4E3C] transition-colors duration-200 text-[24px] leading-none disabled:opacity-40"
                aria-label="Submit"
              >
                →
              </button>
            </form>
            {formState.errors && formState.errors.getAllFieldErrors().length > 0 && (
              <p className="font-mono text-[10px] text-red-500 mt-2 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        ) : (
          <div style={{ animation: 'fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both' }}>
            <p className="font-['Cormorant_Garamond'] font-300 italic text-[28px] text-[#1A2B23] text-center">
              You're on the list.
            </p>
          </div>
        )}

      </div>

    </div>
  );
};

export default LaunchingSoonPage;
