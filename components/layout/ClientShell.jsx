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
export default function ClientShell({ children }) {
  useEffect(() => {
    // Set default accent to blue if not already set (e.g., from local storage or server render)
    if (!document.documentElement.classList.contains('theme-blue') &&
        !document.documentElement.classList.contains('theme-purple')) {
      document.documentElement.classList.add('theme-blue');
    }

    const handleKeyDown = (e) => {
      if (e.shiftKey) {
        if (e.key.toLowerCase() === 'b') {
          document.documentElement.classList.remove('theme-purple'); // Ensure purple is off
          document.documentElement.classList.add('theme-blue');
        } else if (e.key.toLowerCase() === 'r') {
          document.documentElement.classList.remove('theme-blue'); // Ensure blue is off
          document.documentElement.classList.remove('theme-purple'); // Ensure purple is off
        } else if (e.key.toLowerCase() === 'p') {
          document.documentElement.classList.remove('theme-blue'); // Ensure blue is off
          document.documentElement.classList.add('theme-purple');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ScrollParallaxProvider>
      <ParallaxScene>
        {children}
      </ParallaxScene>
    </ScrollParallaxProvider>
  );
}
