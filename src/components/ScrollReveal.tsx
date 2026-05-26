import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type AnimationVariant = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';

interface ScrollRevealProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly variant?: AnimationVariant;
  readonly delay?: number;
  readonly duration?: number;
  readonly threshold?: number;
}

const INITIAL: Record<AnimationVariant, string> = {
  'fade-up':    'opacity-0 translate-y-8',
  'fade-in':    'opacity-0',
  'fade-left':  'opacity-0 translate-x-6',
  'fade-right': 'opacity-0 -translate-x-6',
};

const VISIBLE = 'opacity-100 translate-y-0 translate-x-0';

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  duration = 700,
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.12 });

  const durationClass =
    duration === 500 ? 'duration-500'
    : duration === 600 ? 'duration-600'
    : duration === 800 ? 'duration-800'
    : duration === 1000 ? 'duration-1000'
    : 'duration-700';

  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      style={delayStyle}
      className={`
        transition-[opacity,transform]
        ${durationClass}
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isVisible ? VISIBLE : INITIAL[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
