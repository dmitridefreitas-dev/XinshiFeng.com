'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SkillDetailModal from '@/components/modals/SkillDetailModal';
import { skillsData } from '@/data/skills';

function SkillCard({ skill, onClick, className = '' }) {
  return (
    <div
      className={`flex-shrink-0 w-[75vw] md:w-[44vw] lg:w-[28vw] h-full flex flex-col justify-center items-center text-center px-8 md:px-10 border-r border-border cursor-pointer group bg-[var(--surface-overlay)] hover:bg-[var(--surface-overlay-solid)] transition-colors duration-200 ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent mb-2">
        {skill.category}
      </p>
      <h3 className="font-serif font-bold text-base md:text-lg text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
        {skill.name}
      </h3>
      <p className="text-[11px] text-muted max-w-[240px] leading-relaxed">
        {skill.description}
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {(skill.keyFeatures || []).slice(0, 3).map((f, i) => (
          <span
            key={i}
            className="font-mono text-[9px] uppercase tracking-widest text-muted/60 border-b border-muted/10 pb-0.5"
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

const ROW_1 = skillsData.slice(0, 5);
const ROW_2 = skillsData.slice(5, 10);
const ROW_3 = skillsData.slice(10);

const CARD_VW = 28;

function InfiniteRow({ skills, direction = 'left', duration = 120, onCardClick }) {
  const tripled = [...skills, ...skills, ...skills];
  const setWidthVw = skills.length * CARD_VW;

  return (
    <div className="flex-1 overflow-hidden border-b border-border last:border-b-0 contain-strict">
      <div
        className="flex h-full never-pause"
        style={{
          width: `${setWidthVw * 3}vw`,
          animation: `scroll-${direction} ${duration}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {tripled.map((skill, i) => (
          <SkillCard
            key={`${skill.name}-${i}`}
            skill={skill}
            onClick={() => onCardClick(skill)}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsHorizontal() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const allSkillsTripled = [...skillsData, ...skillsData, ...skillsData];
  const mobileSetWidth = skillsData.length * 75;

  return (
    <section aria-label="Skills" className="overflow-hidden bg-background">
      {/* ── Desktop: 3 auto-scrolling infinite rows (Slow & Smooth) ────────── */}
      <div className="hidden lg:flex flex-col" style={{ height: '88vh' }}>
        <div className="flex items-center px-12 border-b border-border flex-shrink-0" style={{ height: '3.5rem' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted/70"
          >
            Tools & Languages
          </motion.p>
        </div>

        <InfiniteRow skills={ROW_1} direction="left"  duration={110} onCardClick={setSelectedSkill} />
        <InfiniteRow skills={ROW_2} direction="right" duration={140} onCardClick={setSelectedSkill} />
        <InfiniteRow skills={ROW_3} direction="left"  duration={125} onCardClick={setSelectedSkill} />
      </div>

      {/* ── Mobile/Tablet: single auto-scrolling row (Never Stops) ────────── */}
      <div className="lg:hidden relative">
        <div className="pt-10 pb-4 flex items-end px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted/70">
            Tools & Languages
          </p>
        </div>

        <div className="overflow-hidden contain-strict" style={{ height: '48vh' }}>
          <div
            className="flex h-full never-pause"
            style={{
              width: `${mobileSetWidth * 2}vw`,
              animation: 'scroll-left-mobile 100s linear infinite',
              willChange: 'transform',
            }}
          >
            {[...skillsData, ...skillsData].map((skill, i) => (
              <SkillCard
                key={`mob-${i}`}
                skill={skill}
                className="!h-full !w-[75vw] !px-8 border-border"
                onClick={() => setSelectedSkill(skill)}
              />
            ))}
          </div>
        </div>

        {/* Mobile marquee text (Secondary) */}
        <div className="mt-6 overflow-hidden whitespace-nowrap border-y border-border py-6 scroll-fade-edges contain-paint">
          <div
            className="flex gap-10 items-center never-pause opacity-20 pointer-events-none"
            style={{
              width: 'max-content',
              animation: 'scroll-left-mobile 45s linear infinite',
              willChange: 'transform',
            }}
          >
            {[...skillsData, ...skillsData].map((skill, i) => (
              <span
                key={i}
                className="font-serif font-bold text-4xl uppercase tracking-tighter text-foreground"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop marquee strip ─────────────────────────────────────────── */}
      <div className="hidden lg:block overflow-hidden border-y border-border py-4 scroll-fade-edges contain-paint">
        <div
          className="flex gap-16 items-center whitespace-nowrap never-pause"
          style={{
            width: 'max-content',
            animation: 'scroll-left-mobile 55s linear infinite',
            willChange: 'transform',
          }}
        >
          {allSkillsTripled.map((skill, i) => (
              <span
                key={`marquee-${i}`}
                className="inline-flex items-center font-mono text-[9px] uppercase tracking-[0.4em] text-muted/60 hover:text-accent transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedSkill(skill)}
              >
                <span className="w-1 h-1 rounded-full bg-accent/20 mr-4 flex-shrink-0" />
                {skill.name}
              </span>
          ))}
        </div>
      </div>

      {selectedSkill && (
        <SkillDetailModal
          skill={selectedSkill}
          isOpen={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </section>
  );
}
