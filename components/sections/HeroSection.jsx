'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from '@/components/effects/TextReveal';
import MagneticButton from '@/components/effects/MagneticButton';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { contactInfo } from '@/data/constants';

// Math symbols — faint, academic, slow-drifting
const MATH_SHAPES = [
  {
    label: '∂',
    className: 'float-geo-slow font-serif select-none pointer-events-none absolute',
    style: { fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', top: '16%', left: '5%', color: 'var(--muted)', opacity: 0.15, animationDuration: '11s' },
  },
  {
    label: '∑',
    className: 'float-geo font-serif select-none pointer-events-none absolute',
    style: { fontSize: 'clamp(1.25rem, 2.5vw, 2.25rem)', top: '20%', right: '6%', color: 'var(--accent-base)', opacity: 0.055, animationDelay: '1.5s', animationDuration: '9s' },
  },
  {
    label: '∇',
    className: 'float-geo-reverse font-serif select-none pointer-events-none absolute',
    style: { fontSize: 'clamp(1.1rem, 2.2vw, 1.9rem)', bottom: '28%', left: '4%', color: 'var(--accent-indigo)', opacity: 0.05, animationDelay: '0.8s', animationDuration: '12s' },
  },
  {
    label: 'ℝ',
    className: 'float-geo font-serif select-none pointer-events-none absolute',
    style: { fontSize: 'clamp(1rem, 1.8vw, 1.6rem)', bottom: '22%', right: '5%', color: 'var(--muted)', opacity: 0.1, animationDelay: '2s', animationDuration: '8s' },
  },
  {
    label: '∫',
    className: 'float-geo-slow font-serif select-none pointer-events-none absolute',
    style: { fontSize: 'clamp(1.2rem, 2.2vw, 2rem)', top: '52%', right: '9%', color: 'var(--accent-light)', opacity: 0.05, animationDelay: '3s', animationDuration: '13s' },
  },
  {
    label: '∈',
    className: 'float-geo-reverse font-serif select-none pointer-events-none absolute',
    style: { fontSize: 'clamp(0.85rem, 1.4vw, 1.35rem)', top: '62%', left: '8%', color: 'var(--accent-base)', opacity: 0.04, animationDelay: '1.2s', animationDuration: '10s' },
  },
  {
    label: '⊂',
    className: 'float-geo font-serif select-none pointer-events-none absolute',
    style: { fontSize: 'clamp(0.75rem, 1.2vw, 1.2rem)', top: '35%', left: '3%', color: 'var(--muted)', opacity: 0.1, animationDelay: '4s', animationDuration: '14s' },
  },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const { language, t } = useLanguage();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const geoOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const geoY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Soft blue aurora at top — academic blue instead of purple */}
      <div
        className="absolute pointer-events-none animate-aurora-shift"
        style={{
          top: '-25%',
          left: '50%',
          width: '140%',
          height: '80%',
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, var(--accent-glow-subtle) 0%, var(--accent-glow) 40%, transparent 85%)',
          transformOrigin: 'center top',
        }}
        aria-hidden="true"
      />

      {/* Floating math symbols */}
      <motion.div
        style={{ opacity: geoOpacity, y: geoY }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        {MATH_SHAPES.map((shape, i) => (
          <motion.span
            key={i}
            className={shape.className}
            style={shape.style}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 + i * 0.18, duration: 1.2 }}
          >
            {shape.label}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 flex flex-col items-center text-center px-6 gpu"
      >
        {/* Label — mono eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs uppercase tracking-[0.45em] text-accent mb-5"
        >
          {t('hero.available')}
        </motion.p>

        {/* Name — Playfair serif with glow */}
        <h1
          className="font-serif font-bold text-display text-foreground text-balance will-change-transform"
          style={{ animation: 'glow-text-pulse 5s ease-in-out infinite', lineHeight: '1.2' }}
        >
          <TextReveal key={language} splitBy="word" delay={0.4} staggerDelay={0.1} className="pb-4">
            {language === 'en' ? 'Xinshi Feng' : '冯信实'}
          </TextReveal>
        </h1>

        {/* Elegant thin red line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.95, ease: 'easeOut' }}
          className="w-32 my-6 origin-center"
          style={{
            height: '1px',
            background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.8) 0%, transparent 70%)',
          }}
        />

        {/* Subtitle — blue gradient shift */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="font-mono text-xs uppercase tracking-[0.3em] max-w-sm"
          style={{
            background: 'linear-gradient(90deg, #DC2626, #EF4444, #991B1B, #DC2626)',
            backgroundSize: '300% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift-subtitle 6s ease infinite',
          }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Institution */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted mt-3"
        >
          {contactInfo.location[language]}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.45 }}
          className="mt-7 flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <MagneticButton href="/projects" data-cursor="expand">
              {t('hero.viewResearch')}
            </MagneticButton>
            <MagneticButton href="/contact" variant="ghost" data-cursor="expand">
              {t('hero.getInTouch')}
            </MagneticButton>
          </div>
          <MagneticButton href="https://drive.google.com/file/d/1K6AhFHorjonEPDpiJxP-X-GpC_9k4x67/view?usp=drive_link" variant="ghost" external={true} data-cursor="expand">
            {t('nav.resume')}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — min 44×44 touch target */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-2 text-muted hover:text-accent transition-colors"
        aria-label="Scroll down"
        data-cursor="expand"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
        <span className="font-mono text-xs uppercase tracking-[0.3em]">{t('hero.scroll')}</span>
      </motion.button>
    </section>
  );
}
