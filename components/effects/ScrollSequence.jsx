'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

/**
 * Creates a scroll-pinned sequence.
 * The section is sticky for `pages` scroll-lengths, then releases.
 * Children receive `progress` (0-1) as a prop if they are functions.
 */
export default function ScrollSequence({ children, pages = 2, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={ref}
      style={{ height: `${pages * 100}vh` }}
      className={`relative ${className}`}
    >
      <div className="sticky top-0 h-screen overflow-hidden contain-paint">
        {typeof children === 'function' ? children(scrollYProgress) : children}
      </div>
    </div>
  );
}
