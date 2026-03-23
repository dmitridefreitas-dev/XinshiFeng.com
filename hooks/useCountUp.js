'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

export function useCountUp(endValue, duration = 1.5) {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const parseValue = useCallback((val) => {
    const str = String(val);
    const match = str.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if (!match) return { prefix: '', number: 0, suffix: str, hasComma: false };
    return {
      prefix: match[1],
      number: parseFloat(match[2].replace(/,/g, '')),
      suffix: match[3],
      hasComma: match[2].includes(','),
    };
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const { prefix, number, suffix, hasComma } = parseValue(endValue);

          if (number === 0) {
            setDisplay(String(endValue));
            return;
          }

          const startTime = performance.now();
          const durationMs = duration * 1000;

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.round(eased * number);
            const formatted = hasComma ? current.toLocaleString() : String(current);
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [endValue, duration, parseValue]);

  return { ref, display };
}
