'use client';
import { useEffect } from 'react';
import { ScrollParallaxProvider, useScrollParallax } from '@/contexts/ScrollParallaxContext';
import ParallaxScene from '@/components/effects/ParallaxScene';
import { motion } from 'framer-motion';

/**
 * Parallax-driven star background wrapper.
 * Reads from ScrollParallaxContext and applies translateY to the
 * star-layer and blob containers without touching their z-index stacks.
 */
function ParallaxBackgroundLayers() {
  const { starsY, blobsY } = useScrollParallax();

  return (
    <>
      {/* Offset the star wrapper with scroll parallax */}
      <motion.div
        className="parallax-stars-wrapper"
        style={{ translateY: starsY }}
        aria-hidden="true"
      />
      {/* Offset the blob wrapper — mid-layer speed */}
      <motion.div
        className="parallax-blobs-wrapper"
        style={{ translateY: blobsY }}
        aria-hidden="true"
      />
    </>
  );
}

/**
 * Client shell — wraps children in:
 *   ScrollParallaxProvider (provides scroll progress)
 *   ParallaxScene (applies 3D tilt to page content)
 */
function applyAccent(accent) {
  const html = document.documentElement;
  html.classList.remove('theme-blue', 'theme-purple');
  if (accent === 'blue') html.classList.add('theme-blue');
  else if (accent === 'purple') html.classList.add('theme-purple');
}

export default function ClientShell({ children }) {
  useEffect(() => {
    // Restore accent from localStorage; default to blue
    const stored = localStorage.getItem('accent');
    applyAccent(stored ?? 'blue');
  }, []);

  return (
    <ScrollParallaxProvider>
      <ParallaxScene>
        {children}
      </ParallaxScene>
    </ScrollParallaxProvider>
  );
}
