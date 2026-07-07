import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';

interface LaunchingSoonPageProps {
  readonly className?: string;
}

const CHECKER_EASE = 'cubic-bezier(0.22,1,0.36,1)';

export const LaunchingSoonPage: React.FC<LaunchingSoonPageProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [formState, handleFormspreeSubmit] = useForm('mojbkyrj');

  // Fire Meta Pixel Lead event when email is successfully submitted
  useEffect(() => {
    if (formState.succeeded) {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }
    }
  }, [formState.succeeded]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormspreeSubmit(e as any);
  };

  return (
    <div className={`h-[100dvh] bg-[#FAFAFA] flex flex-col overflow-hidden ${className}`}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header
        className="flex-shrink-0 flex items-center justify-between px-5 md:px-10 h-[64px] border-b border-[#141414]"
        style={{ animation: `fadeUp 0.6s ${CHECKER_EASE} both` }}
      >
        <span className="font-['Cormorant_Infant'] text-[26px] leading-none text-[#141414]">
          patina<span className="text-[#E8341A]">.</span>
        </span>
        <span className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.18em] uppercase text-[#141414]">
          Launching Soon
        </span>
      </header>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col justify-center px-5 md:px-0 md:items-center md:text-center"
        style={{ animation: `fadeUp 0.8s ${CHECKER_EASE} 0.1s both` }}
      >
        <div className="w-full md:max-w-[920px]">

          {/* Pink descriptor block */}
          <span className="inline-block bg-[#F272A8] px-3 py-[5px] mb-6">
            <span className="font-['Barlow_Condensed'] font-bold text-[15px] tracking-[0.14em] uppercase text-white">
              The Anti-Screen Patch
            </span>
          </span>

          {/* Headline — loud voice */}
          <h1 className="font-['Barlow_Condensed'] font-extrabold uppercase text-[54px] md:text-[92px] leading-[0.94] tracking-[-0.01em] text-[#141414] mb-7">
            Dark circles aren't from bad sleep.
            <br />
            <span className="text-[#E8341A]">They're from good work.</span>
          </h1>

          {/* Squiggle — pink brand device */}
          <svg
            className="w-[88px] h-[14px] md:mx-auto mb-9"
            viewBox="0 0 88 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 7 Q9 1 16 7 T30 7 T44 7 T58 7 T72 7 T86 7"
              stroke="#F272A8"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {/* Email form */}
          {!formState.succeeded ? (
            <div className="w-full md:max-w-[640px] md:mx-auto">
              <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.18em] uppercase text-[#141414] mb-4 md:text-center">
                First batch limited
              </p>
              <form
                onSubmit={handleSubmit}
                className={`flex items-center border-2 transition-colors duration-300 ${
                  focused ? 'border-[#E8341A]' : 'border-[#141414]'
                }`}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  required
                  className="flex-1 bg-transparent font-['IBM_Plex_Mono'] text-[13px] text-[#141414] placeholder-[#141414]/40 focus:outline-none px-4 py-3"
                />
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="font-['Barlow_Condensed'] font-bold uppercase tracking-[0.1em] text-[15px] bg-[#141414] text-[#FAFAFA] px-6 self-stretch transition-colors duration-200 hover:bg-[#E8341A] focus-visible:bg-[#E8341A] active:bg-[#E8341A] disabled:opacity-40"
                >
                  Join
                </button>
              </form>
              {formState.errors && formState.errors.getAllFieldErrors().length > 0 && (
                <p className="font-['IBM_Plex_Mono'] text-[10px] text-[#E8341A] mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          ) : (
            <div style={{ animation: `fadeUp 0.5s ${CHECKER_EASE} both` }}>
              <p className="font-['Barlow_Condensed'] font-bold uppercase text-[24px] tracking-[0.04em] text-[#141414]">
                You're in. <span className="text-[#E8341A]">You'll get it first.</span>
              </p>
            </div>
          )}

        </div>
      </div>

      {/* ── Red edge — bottom close ─────────────────────────────────────────── */}
      <div className="flex-shrink-0 h-[8px] bg-[#E8341A]" aria-hidden="true" />

    </div>
  );
};

export default LaunchingSoonPage;
