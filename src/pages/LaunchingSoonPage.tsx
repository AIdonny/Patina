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
      className={`h-[100dvh] bg-[#EDE9E1] flex flex-col overflow-hidden ${className}`}
    >

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header
        className="flex-shrink-0 flex items-center justify-between px-5 h-[52px] border-b border-[#1B3A2D]/15"
        style={{ animation: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        <span className="font-['Marcellus_SC'] text-[18px] tracking-[0.22em] text-[#1B3A2D]">
          patina
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#1B3A2D]/60">
          Launching Soon
        </span>
      </header>

      {/* ── Main content — vertically centred ──────────────────────────────── */}
      <div
        className="flex-1 flex flex-col justify-center px-5"
        style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s both' }}
      >
        {/* Label */}
        <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#1B3A2D]/55 mb-5">
          Premium Under-Eye Patches
        </p>

        {/* Headline */}
        <h1 className="font-['Cormorant_Garamond'] font-300 text-[52px] leading-[1.05] text-[#1B3A2D] mb-6">
          Rest as a Ritual.
        </h1>

        {/* Divider */}
        <div className="w-8 h-[1px] bg-[#1B3A2D]/30 mb-5" />

        {/* Ingredients */}
        <p className="font-mono text-[10px] tracking-[0.14em] text-[#1B3A2D]/55">
          Peptides · Caffeine · Niacinamide
        </p>
      </div>

      {/* ── Email form — above bottom edge ─────────────────────────────────── */}
      <div
        className="flex-shrink-0 px-5 pb-[max(32px,env(safe-area-inset-bottom))]"
        style={{ animation: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both' }}
      >
        {!formState.succeeded ? (
          <>
            <form
              onSubmit={handleSubmit}
              className={`flex items-center border-b transition-colors duration-300 pb-3 ${
                focused ? 'border-[#1B3A2D]' : 'border-[#1B3A2D]/30'
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
                className="flex-1 bg-transparent font-mono text-[13px] text-[#1B3A2D] placeholder-[#1B3A2D]/35 focus:outline-none"
              />
              <button
                type="submit"
                disabled={formState.submitting}
                className="ml-3 text-[#1B3A2D] transition-opacity duration-200 text-[20px] leading-none disabled:opacity-40"
                aria-label="Submit"
              >
                →
              </button>
            </form>
            {formState.errors && formState.errors.getAllFieldErrors().length > 0 && (
              <p className="font-mono text-[9px] text-[#1B3A2D]/60 mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </>
        ) : (
          <div style={{ animation: 'fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both' }}>
            <p className="font-['Cormorant_Garamond'] font-300 italic text-[26px] text-[#1B3A2D]">
              You're on the list.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default LaunchingSoonPage;
