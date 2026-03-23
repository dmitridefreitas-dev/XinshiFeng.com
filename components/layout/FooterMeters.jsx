'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const METERS = [
  { label: 'Research Hours', baseVal: 74, unit: '%', color: '#DC2626' },
  { label: 'Coffee Consumed', baseVal: 88, unit: '%', color: '#991B1B' },
];

function SineWave() {
  const width = 120;
  const height = 24;
  const amplitude = 6;
  const frequency = 0.08;
  const points = Array.from({ length: 61 }, (_, i) => {
    const x = (i / 60) * width;
    const y = height / 2 - amplitude * Math.sin(frequency * Math.PI * i);
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className="overflow-visible"
      aria-hidden="true"
    >
      <motion.polyline
        points={points}
        stroke="rgba(220,38,38,0.55)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
      />
    </svg>
  );
}

export default function FooterMeters() {
  const [values, setValues] = useState(METERS.map((m) => m.baseVal));

  useEffect(() => {
    const id = setInterval(() => {
      setValues(METERS.map((m) => {
        const delta = Math.random() * 8 - 4;
        return Math.max(20, Math.min(98, m.baseVal + delta));
      }));
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-8">
      {METERS.map((meter, i) => (
        <div key={meter.label} className="flex flex-col gap-1.5 min-w-[120px]">
          <div className="flex justify-between items-baseline">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {meter.label}
            </span>
            <span className="font-mono text-xs text-muted">
              {Math.round(values[i])} {meter.unit}
            </span>
          </div>
          <div className="h-[2px] bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: meter.color, opacity: 0.5 }}
              animate={{ width: `${values[i]}%` }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>
        </div>
      ))}
      <div className="flex items-center gap-3 ml-auto">
        <SineWave />
        <span className="font-mono text-xs tracking-[0.2em] text-muted" style={{ fontStyle: 'italic' }}>
          f(x) = sin(x)
        </span>
      </div>
    </div>
  );
}
