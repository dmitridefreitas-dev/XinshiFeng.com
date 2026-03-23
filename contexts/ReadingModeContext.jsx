'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ReadingModeContext = createContext();

export function ReadingModeProvider({ children }) {
  const [isTechnicalMode, setIsTechnicalMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('readingMode');
    if (stored === 'technical') setIsTechnicalMode(true);
  }, []);

  const toggleReadingMode = () => {
    setIsTechnicalMode((prev) => {
      const next = !prev;
      localStorage.setItem('readingMode', next ? 'technical' : 'simple');
      return next;
    });
  };

  return (
    <ReadingModeContext.Provider value={{ isTechnicalMode, toggleReadingMode }}>
      {children}
    </ReadingModeContext.Provider>
  );
}

export function useReadingMode() {
  const context = useContext(ReadingModeContext);
  if (!context) throw new Error('useReadingMode must be used within ReadingModeProvider');
  return context;
}
