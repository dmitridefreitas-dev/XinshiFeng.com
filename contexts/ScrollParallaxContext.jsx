'use client';
import { createContext, useContext } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const ScrollParallaxContext = createContext(null);

export function useScrollParallax() {
  return useContext(ScrollParallaxContext);
}

export function ScrollParallaxProvider({ children }) {
  const { scrollYProgress } = useScroll();

  // Background star layer — moves slowest
  const starsY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  // Mid atmosphere (blobs/nebula) — medium speed
  const blobsY = useTransform(scrollYProgress, [0, 1], ['0%', '-16%']);
  // Subtle 3D tilt — peaks at 1.5° then eases back, stays modest
  const rotateX = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1.5, -0.8, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, -0.6, 0]);

  return (
    <ScrollParallaxContext.Provider value={{ scrollYProgress, starsY, blobsY, rotateX, rotateY }}>
      {children}
    </ScrollParallaxContext.Provider>
  );
}
