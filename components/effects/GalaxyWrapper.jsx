'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const GalaxyBackground = dynamic(() => import('./GalaxyBackground'), { ssr: false });

export default function GalaxyWrapper() {
  const [isPurple, setIsPurple] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsPurple(document.documentElement.classList.contains('theme-purple'));

    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return <GalaxyBackground active={isPurple} />;
}
