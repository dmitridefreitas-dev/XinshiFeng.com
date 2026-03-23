'use client';
import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function HorizontalScroll({ children, className = '', pages = 1.5 }) {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const [endX, setEndX] = useState('-50%');

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const vw = window.innerWidth;
      const excess = trackWidth - vw;
      setEndX(excess > 0 ? `-${((excess / trackWidth) * 100).toFixed(2)}%` : '0%');
    };
    const t = setTimeout(measure, 60);
    window.addEventListener('resize', measure);
    return () => { clearTimeout(t); window.removeEventListener('resize', measure); };
  }, [children]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', endX]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);

  return (
    <div
      ref={ref}
      style={{ height: `${pages * 100}vh` }}
      className={`relative ${className}`}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          ref={trackRef}
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
