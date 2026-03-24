'use client';
import { motion } from 'framer-motion';
import CounterDisplay from '@/components/effects/CounterDisplay';
import { kpiMetrics } from '@/data/constants';
import { useLanguage } from '@/contexts/LanguageContext';

export default function KPIFullscreen() {
  const { language, t } = useLanguage();
  return (
    <section
      className="section-full"
      aria-label="Key Metrics"
    >
      <div className="container mx-auto px-6 lg:px-12 w-full">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-accent text-center mb-10"
        >
          {language === 'en' ? 'By The Numbers' : '数据统计'}
        </motion.p>

        {/* 2×2 metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 justify-items-center">
          {kpiMetrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <CounterDisplay value={metric.value} label={metric.label[language]} delay={i * 0.1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
