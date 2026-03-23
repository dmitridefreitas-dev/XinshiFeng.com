'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function HorizontalScroll({ children, className = '', pages = 1.5 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66%']);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);

  return (
    <div
      ref={ref}
      style={{ height: `${pages * 100}vh` }}
      className={`relative ${className}`}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full items-center will-change-transform"
          style={{ x }}
        >
          {children}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 h-px bg-accent/40"
          style={{ width: progressWidth }}
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-px bg-white/5" />
      </div>
    </div>
  );
}
