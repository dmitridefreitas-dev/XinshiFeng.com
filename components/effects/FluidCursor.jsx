'use client';
import { useEffect, useRef } from 'react';

/**
 * Zero-React-rerender cursor.
 * All updates go through requestAnimationFrame → direct DOM style mutation.
 * No Framer Motion springs = no JS overhead on every mouse move.
 */
export default function FluidCursor() {
  const dotRef = useRef(null);
  const stateRef = useRef({
    mouseX: 0, mouseY: 0,
    curX: 0, curY: 0,
    size: 12,
    targetSize: 12,
    cursorState: 'default',
    visible: false,
    rafId: null,
  });

  useEffect(() => {
    // Hide on touch devices
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;
    const s = stateRef.current;

    const onMove = (e) => {
      s.mouseX = e.clientX;
      s.mouseY = e.clientY;
      if (!s.visible) {
        s.visible = true;
        dot.style.opacity = '1';
      }

      const el = e.target.closest('[data-cursor]');
      s.cursorState = el ? (el.dataset.cursor || 'default') : 'default';
      s.targetSize = s.cursorState === 'view' ? 72 : s.cursorState === 'expand' ? 44 : 12;
    };

    const onLeave = () => {
      s.visible = false;
      dot.style.opacity = '0';
    };
    const onEnter = () => {
      s.visible = true;
      dot.style.opacity = '1';
    };

    const LERP = 0.18;
    const SIZE_LERP = 0.12;

    const loop = () => {
      s.curX += (s.mouseX - s.curX) * LERP;
      s.curY += (s.mouseY - s.curY) * LERP;
      s.size += (s.targetSize - s.size) * SIZE_LERP;

      dot.style.transform = `translate(${s.curX - s.size / 2}px, ${s.curY - s.size / 2}px)`;
      dot.style.width = `${s.size}px`;
      dot.style.height = `${s.size}px`;

      if (s.cursorState === 'view') {
        dot.style.background = 'rgba(37,99,235,0.88)';
        dot.querySelector('.cursor-label').style.opacity = '1';
      } else if (s.cursorState === 'expand') {
        dot.style.background = 'rgba(26,26,46,0.12)';
        dot.style.border = '1.5px solid rgba(37,99,235,0.5)';
        dot.querySelector('.cursor-label').style.opacity = '0';
      } else {
        dot.style.background = 'rgba(26,26,46,0.75)';
        dot.style.border = 'none';
        dot.querySelector('.cursor-label').style.opacity = '0';
      }

      s.rafId = requestAnimationFrame(loop);
    };

    s.rafId = requestAnimationFrame(loop);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(s.rafId);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'rgba(26,26,46,0.75)',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        mixBlendMode: 'multiply',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s',
        willChange: 'transform, width, height',
      }}
    >
      <span
        className="cursor-label"
        style={{
          opacity: 0,
          fontSize: 9,
          fontFamily: 'var(--font-jetbrains, monospace)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#FFFFFF',
          fontWeight: 700,
          pointerEvents: 'none',
          transition: 'opacity 0.15s',
          whiteSpace: 'nowrap',
        }}
      >
        View
      </span>
    </div>
  );
}
