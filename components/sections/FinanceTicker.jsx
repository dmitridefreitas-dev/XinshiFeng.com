'use client';
import { tickerTerms } from '@/data/constants';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AcademicTicker() {
  const { language } = useLanguage();
  const tripled = [...tickerTerms, ...tickerTerms, ...tickerTerms];

  return (
    <div className="relative overflow-hidden py-3 border-y border-border bg-[var(--surface-hover)] scroll-fade-edges">
      <div className="flex animate-ticker-scroll whitespace-nowrap">
        {tripled.map((term, i) => (
          <span
            key={i}
            className="inline-flex items-center text-xs font-mono uppercase tracking-[0.2em] text-muted mx-6"
          >
            <span className="w-1 h-1 rounded-full bg-accent/30 mr-4 flex-shrink-0" />
            {term[language]}
          </span>
        ))}
      </div>
    </div>
  );
}
