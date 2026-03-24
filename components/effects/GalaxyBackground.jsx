'use client';
import { useEffect, useRef, useState } from 'react';

function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Generate stars with random positions, sizes and twinkle phases
    const NUM_STARS = 280;
    const stars = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.003 + Math.random() * 0.006,
      // Some stars are slightly blue/purple tinted
      hue: Math.random() > 0.75 ? `rgba(220,200,255,` : `rgba(255,255,255,`,
    }));

    // Milky way band — scattered bright cluster in the center diagonal
    const CLUSTER_STARS = 180;
    const clusterStars = Array.from({ length: CLUSTER_STARS }, () => {
      const t = Math.random();
      const bandX = W * 0.15 + t * W * 0.7 + (Math.random() - 0.5) * W * 0.35;
      const bandY = H * 0.65 - t * H * 0.5 + (Math.random() - 0.5) * H * 0.25;
      return {
        x: bandX,
        y: bandY,
        r: Math.random() * 0.9 + 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.004,
        hue: `rgba(210,180,255,`,
      };
    });

    const allStars = [...stars, ...clusterStars];
    let animId;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw milky way soft band glow
      const bandGrad = ctx.createLinearGradient(W * 0.1, H * 0.8, W * 0.9, H * 0.1);
      bandGrad.addColorStop(0, 'rgba(100,60,180,0)');
      bandGrad.addColorStop(0.3, 'rgba(120,60,200,0.06)');
      bandGrad.addColorStop(0.5, 'rgba(160,80,255,0.09)');
      bandGrad.addColorStop(0.7, 'rgba(120,60,200,0.06)');
      bandGrad.addColorStop(1, 'rgba(100,60,180,0)');
      ctx.fillStyle = bandGrad;
      ctx.fillRect(0, 0, W, H);

      // Draw all stars
      allStars.forEach((s) => {
        const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(s.phase + frame * s.speed));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${s.hue}${twinkle})`;
        ctx.fill();

        // Glow for brighter stars
        if (s.r > 1.0) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
          glow.addColorStop(0, `${s.hue}${twinkle * 0.4})`);
          glow.addColorStop(1, `${s.hue}0)`);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }
      });

      frame++;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}

const ORBITS = [
  {
    width: '420px', height: '180px',
    top: '18%', left: '60%',
    duration: '32s', delay: '0s',
    borderColor: 'rgba(167,139,250,0.13)',
    planetSize: 7, planetColor: 'rgba(196,181,253,0.85)',
    planetGlow: 'rgba(139,92,246,0.7)',
  },
  {
    width: '280px', height: '110px',
    top: '55%', left: '8%',
    duration: '22s', delay: '-8s',
    borderColor: 'rgba(139,92,246,0.10)',
    planetSize: 5, planetColor: 'rgba(167,139,250,0.9)',
    planetGlow: 'rgba(109,40,217,0.6)',
  },
  {
    width: '600px', height: '240px',
    top: '65%', left: '25%',
    duration: '48s', delay: '-14s',
    borderColor: 'rgba(167,139,250,0.07)',
    planetSize: 9, planetColor: 'rgba(221,214,254,0.8)',
    planetGlow: 'rgba(139,92,246,0.5)',
  },
  {
    width: '190px', height: '80px',
    top: '12%', left: '15%',
    duration: '18s', delay: '-4s',
    borderColor: 'rgba(139,92,246,0.09)',
    planetSize: 4, planetColor: 'rgba(196,181,253,0.95)',
    planetGlow: 'rgba(139,92,246,0.8)',
  },
];

function OrbitRings() {
  return (
    <>
      {/* Inject orbit keyframe animation */}
      <style>{`
        @keyframes galaxy-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes planet-counter {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>

      {ORBITS.map((o, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: 'fixed',
            width: o.width,
            height: o.height,
            top: o.top,
            left: o.left,
            borderRadius: '50%',
            border: `1px solid ${o.borderColor}`,
            transform: `translate(-50%, -50%) rotate(-20deg)`,
            animation: `galaxy-orbit ${o.duration} linear infinite`,
            animationDelay: o.delay,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {/* Planet dot — counter-rotates to stay upright */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '100%',
              transform: 'translate(-50%, -50%)',
              width: `${o.planetSize}px`,
              height: `${o.planetSize}px`,
              borderRadius: '50%',
              background: o.planetColor,
              boxShadow: `0 0 ${o.planetSize * 3}px ${o.planetSize}px ${o.planetGlow}`,
              animation: `planet-counter ${o.duration} linear infinite`,
              animationDelay: o.delay,
            }}
          />
        </div>
      ))}
    </>
  );
}

function NebulaPulse() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-10%', left: '30%',
          width: '70vw', height: '70vw',
          background: 'radial-gradient(ellipse at center, rgba(109,40,217,0.18) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'galaxy-orbit 55s ease-in-out infinite alternate',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          bottom: '-15%', right: '-10%',
          width: '60vw', height: '60vw',
          background: 'radial-gradient(ellipse at center, rgba(76,29,149,0.22) 0%, rgba(139,92,246,0.1) 45%, transparent 70%)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'galaxy-orbit 70s ease-in-out infinite alternate-reverse',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '40%', left: '-5%',
          width: '40vw', height: '40vw',
          background: 'radial-gradient(ellipse at center, rgba(167,139,250,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'galaxy-orbit 42s ease-in-out infinite alternate',
        }}
      />
    </>
  );
}

export default function GalaxyBackground({ active }) {
  if (!active) return null;
  return (
    <>
      <StarField />
      <NebulaPulse />
      <OrbitRings />
    </>
  );
}
