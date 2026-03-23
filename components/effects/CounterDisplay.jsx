'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

export default function CounterDisplay({ value, label, delay = 0 }) {
  const { ref, display } = useCountUp(value, 2);
  const [done, setDone] = useState(false);
  const [ringVisible, setRingVisible] = useState(false);
  const timerRef = useRef(null);

  // Watch for count completion — when display matches value, trigger burst
  useEffect(() => {
    if (display === value && !done) {
      setDone(true);
      setRingVisible(true);
      timerRef.current = setTimeout(() => setRingVisible(false), 900);
    }
    return () => clearTimeout(timerRef.current);
  }, [display, value, done]);

  return (
    <div className="flex flex-col items-center gap-3 relative">
      {/* Pulse ring that fires on completion */}
      {ringVisible && (
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: '1px solid rgba(37,99,235,0.5)',
            animation: 'pulse-ring-anim 0.9s ease-out forwards',
          }}
          aria-hidden="true"
        />
      )}

      {/* Ambient glow disc behind number */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '120%',
          height: '120%',
          top: '-10%',
          left: '-10%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
          animation: 'headshot-glow-anim 4s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      <motion.span
        ref={ref}
        className="font-sans font-semibold text-display gpu relative"
        style={{
          color: '#1A1A2E',
          animation: 'glow-text-pulse 4s ease-in-out infinite',
        }}
        animate={done ? { scale: [1, 1.06, 1] } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {display}
      </motion.span>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted text-center max-w-[12ch]">
        {label}
      </span>
    </div>
  );
}
