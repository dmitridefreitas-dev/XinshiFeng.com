'use client';
import { useEffect, useRef } from 'react';

function MathBackground() {
  const svgRef = useRef(null);
  const animRef = useRef(null);
  let t = 0;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const W = window.innerWidth;
    const H = window.innerHeight;

    const sinePath = svg.querySelector('#sine-path');
    const cosinePath = svg.querySelector('#cosine-path');
    const integralPath = svg.querySelector('#integral-path');

    const buildSine = (offset) => {
      const pts = [];
      for (let x = 0; x <= W + 20; x += 6) {
        const y = H * 0.35 + Math.sin((x / W) * 2 * Math.PI * 2 + offset) * (H * 0.06);
        pts.push(`${x},${y}`);
      }
      return 'M ' + pts.join(' L ');
    };

    const buildCosine = (offset) => {
      const pts = [];
      for (let x = 0; x <= W + 20; x += 6) {
        const y = H * 0.65 + Math.cos((x / W) * 2 * Math.PI * 2 + offset) * (H * 0.05);
        pts.push(`${x},${y}`);
      }
      return 'M ' + pts.join(' L ');
    };

    const buildIntegral = (offset) => {
      const pts = [];
      for (let x = 0; x <= W + 20; x += 6) {
        const y = H * 0.5 + Math.sin((x / W) * Math.PI * 3 + offset) * (H * 0.04) +
                            Math.cos((x / W) * Math.PI * 1.5 + offset * 0.7) * (H * 0.025);
        pts.push(`${x},${y}`);
      }
      return 'M ' + pts.join(' L ');
    };

    const animate = () => {
      t += 0.003;
      if (sinePath) sinePath.setAttribute('d', buildSine(t));
      if (cosinePath) cosinePath.setAttribute('d', buildCosine(t * 0.8));
      if (integralPath) integralPath.setAttribute('d', buildIntegral(t * 0.6));
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        id="sine-path"
        stroke="var(--accent-glow-subtle)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        id="cosine-path"
        stroke="var(--accent-glow-subtle)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="6 4"
      />
      <path
        id="integral-path"
        stroke="var(--muted)"
        style={{ opacity: 0.15 }}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function GridBackground() {
  return (
    <>
      <div className="dot-grid-layer" aria-hidden="true" />
      <div className="dot-grid-layer-fine" aria-hidden="true" />
      <div className="paper-wash" aria-hidden="true" />
      <MathBackground />
    </>
  );
}
