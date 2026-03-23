'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.06,
  as: Tag = 'p',
  splitBy = 'word', // 'word' | 'char' | 'line'
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [cinematic, setCinematic] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setCinematic(!reduced);
  }, []);

  const text = typeof children === 'string' ? children : '';

  let units = [];
  if (splitBy === 'word') units = text.split(' ');
  else if (splitBy === 'char') units = text.split('');
  else units = text.split('\n');

  // Initial state: cinematic adds scale + blur snap
  const initialState = cinematic
    ? { opacity: 0, y: '60%', scale: 0.88, filter: 'blur(6px)' }
    : { opacity: 0, y: '100%' };

  const animatedState = cinematic
    ? { opacity: 1, y: '0%', scale: 1, filter: 'blur(0px)' }
    : { opacity: 1, y: '0%' };

  if (!text) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={cinematic ? { opacity: 0, y: 20, scale: 0.96, filter: 'blur(4px)' } : { opacity: 0, y: 30 }}
        animate={isInView
          ? cinematic ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : { opacity: 1, y: 0 }
          : {}}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="flex flex-wrap">
        {units.map((unit, i) => (
          <motion.span
            key={i}
            className="inline-block will-change-transform"
            style={{ marginRight: splitBy === 'word' ? '0.25em' : '0' }}
            initial={initialState}
            animate={isInView ? animatedState : {}}
            transition={{
              duration: cinematic ? 0.75 : 0.7,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {unit}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
