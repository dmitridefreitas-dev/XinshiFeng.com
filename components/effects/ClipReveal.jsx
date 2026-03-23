'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

/**
 * Scroll-linked clip-path reveal.
 * As the user scrolls the section into view, the child image
 * unmasks from the center outward using clip-path: inset().
 */
export default function ClipReveal({ children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // From fully clipped (50% inset on all sides) to fully open (0% inset)
  const inset = useTransform(scrollYProgress, [0.1, 0.5], [48, 0]);
  const clipPath = useTransform(inset, (v) => `inset(${v}%)`);

  return (
    <motion.div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{ clipPath }}
    >
      {children}
    </motion.div>
  );
}
