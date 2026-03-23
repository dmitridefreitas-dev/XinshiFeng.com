'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollParallax } from '@/contexts/ScrollParallaxContext';

/**
 * Wraps the page content with a subtle 3D "camera" tilt driven by scroll.
 * Only activates on non-coarse-pointer, non-reduced-motion devices.
 */
export default function ParallaxScene({ children }) {
  const { rotateX, rotateY } = useScrollParallax();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setActive(!coarse && !reduced);
  }, []);

  if (!active) return <>{children}</>;

  return (
    <motion.div
      style={{
        perspective: '1200px',
        rotateX,
        rotateY,
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
}
