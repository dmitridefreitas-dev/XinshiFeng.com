'use client';
import { motion } from 'framer-motion';
import TiltCard from '@/components/effects/TiltCard';
import { competencies } from '@/data/constants';

export default function CompetenciesSticky() {
  return (
    <section
      className="section-full flex-col px-6 lg:px-12"
      aria-label="Core Competencies"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.4em] text-muted text-center mb-10"
      >
        CORE COMPETENCIES
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto w-full">
        {competencies.map((comp, i) => {
          const Icon = comp.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard
                className="shimmer-card academic-card flex flex-col items-center text-center md:items-start md:text-left p-6 rounded-xl h-full"
              >
                {/* Icon with rotating glow aura */}
                <div className="relative w-10 h-10 flex items-center justify-center rounded-full mb-5">
                  {/* Rotating ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 60%, var(--accent-glow-strong) 80%, transparent 100%)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    aria-hidden="true"
                  />
                  {/* Inner glow */}
                  <div
                    className="absolute inset-1 rounded-full"
                    style={{ background: 'radial-gradient(circle, var(--accent-glow-subtle) 0%, transparent 70%)' }}
                    aria-hidden="true"
                  />
                  <Icon className="w-5 h-5 text-accent relative z-10" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif font-bold text-subhead text-foreground mb-3 will-change-transform">
                  {comp.title.en}
                </h3>

                <p className="text-body-fluid text-muted max-w-xs leading-relaxed">
                  {comp.description.en}
                </p>

                {/* Animated accent underline */}
                <motion.div
                  className="mt-5 h-px origin-left"
                  style={{ background: 'linear-gradient(90deg, var(--accent-glow-strong), transparent)' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
