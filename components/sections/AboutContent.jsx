'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TextReveal from '@/components/effects/TextReveal';
import MagneticButton from '@/components/effects/MagneticButton';
import ExperienceModal from '@/components/modals/ExperienceModal';
import ImageGrid from '@/components/sections/ImageCarousel';
import { education } from '@/data/education';
import { experiences } from '@/data/experiences';
import { skillCategories } from '@/data/skills';
import { socialLinks } from '@/data/constants';
import { ArrowUpRight, Github, Linkedin, FileText, BookOpen, Coffee, Dumbbell, Music } from 'lucide-react';

export default function AboutContent() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const researchExps = experiences.filter((e) => e.type === 'research');
  const teachingExps = experiences.filter((e) => e.type === 'teaching');

  const personalInterests = [
    {
      icon: BookOpen,
      title: "Mathematics & Research",
      description: "Deep dives into abstract algebra, topology, and differential geometry, with a focus on their applications in theoretical physics and machine learning.",
    },
    {
      icon: Coffee,
      title: "Coffee & Culture",
      description: "Exploring the nuances of coffee brewing, from pour-overs to espresso, and engaging with diverse cultural narratives through literature and film.",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Well-being",
      description: "Maintaining a balanced lifestyle through calisthenics, weightlifting, and mindful practices to enhance physical and mental resilience.",
    },
    {
      icon: Music,
      title: "Music & Composition",
      description: "Composing instrumental pieces that blend classical structures with modern electronic elements, exploring harmonic complexity and emotional depth.",
    },
  ];

  const storyParagraphs = [
    "I am a dedicated student at Washington University in St. Louis, pursuing a double major in Mathematics and Computer Science. My academic journey is driven by a profound curiosity for understanding complex systems and a passion for innovative problem-solving.",
    "My research experience spans theoretical mathematics, including de Rham cohomology and manifold theory, as well as applied fields like reinforcement learning and machine learning. I have contributed to published works in Physical Review E, demonstrating my ability to conduct rigorous research and disseminate findings.",
    "Beyond academics, I am actively involved in teaching and leadership roles, where I mentor peers and foster collaborative learning environments. These experiences have honed my communication and teamwork skills, preparing me for impactful contributions in both research and industry."
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-10"
        aria-label="About hero"
      >
        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative mb-6"
        >
          {/* Rotating gradient ring */}
          <div className="headshot-ring-outer" aria-hidden="true" />
          {/* Pulsing glow ring */}
          <div className="headshot-glow-pulse" aria-hidden="true" />
          {/* Image container */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-1 ring-border headshot-container"
            style={{ boxShadow: '0 0 5px var(--accent-glow-subtle)' }}
          >
            <Image
              src="/images/headshot.jpeg"
              alt="Xinshi Feng"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </motion.div>

        <h1 className="font-serif font-bold text-display text-foreground will-change-transform text-balance">
          <TextReveal key="en" splitBy="word" delay={0.3} staggerDelay={0.1}>
            Xinshi Feng
          </TextReveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.05em] sm:tracking-[0.3em] text-accent mt-4 max-w-xs sm:max-w-none text-center"
        >
          AVAILABLE FOR MATH PHD PROGRAMS & RESEARCH INTERNSHIPS, FALL 2027
        </motion.p>

        {/* IBM Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-4 flex flex-wrap justify-center gap-2"
        >
          {['Git & GitHub', 'HTML/CSS/JS', 'Cloud Computing', 'Software Engineering'].map((cert) => (
            <span
              key={cert}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted bg-[var(--surface-hover)] border border-border rounded px-2 py-1"
            >
              IBM · {cert}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── Static Image Grid ── */}
      <ImageGrid />

      {/* ── Content Grid ── */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16 lg:max-w-[1400px] lg:mx-auto px-6 lg:px-12 py-12 relative items-start">

        {/* ── Row 1: Background (Left) | Teaching & Leadership (Right) ── */}
        
        {/* Background */}
        <section className="flex flex-col mb-12 lg:mb-0" aria-label="Background">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-muted mb-6 self-start"
          >
            BACKGROUND
          </motion.p>

          <div className="flex flex-col gap-8">
            {storyParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="text-base text-muted leading-relaxed font-sans"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </section>

        {/* Teaching & Leadership */}
        <section className="mb-12 lg:mb-0" aria-label="Teaching & Leadership">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-muted mb-6"
          >
            TEACHING & LEADERSHIP
          </motion.p>

          <div className="relative border-l border-border pl-8 flex flex-col gap-0">
            {teachingExps.map((exp, i) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className="py-7 relative group cursor-pointer bg-transparent hover:bg-[var(--surface-hover)] transition-colors rounded-xl px-5 -mx-5"
                role="button"
                tabIndex={0}
                data-cursor="expand"
                onClick={() => setSelectedExperience(exp)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedExperience(exp)}
              >
                <div
                  className="absolute left-[-34px] top-9 w-2.5 h-2.5 rounded-full border-2 border-white group-hover:opacity-100 transition-all"
                  style={{ backgroundColor: 'var(--accent-glow-strong)' }}
                />
                <p className="font-mono text-xs uppercase tracking-[0.25em] mb-2" style={{ color: 'var(--accent-indigo)' }}>
                  {exp.date.en}
                </p>
                <h3 className="font-serif font-bold text-base md:text-lg text-foreground mb-1 group-hover:text-accent transition-colors leading-snug">
                  {exp.title.en}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-2">
                  {exp.organization.en}
                </p>
                <p className="text-[12px] text-muted leading-relaxed max-w-sm line-clamp-2">
                  {exp.shortDescription.en}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── Row 2: Education & Research (Left) | Proficiency (Right) ── */}

        <div className="flex flex-col mb-12 lg:mb-0">
          {/* Education */}
          <section aria-label="Education">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.4em] text-muted mb-6"
            >
              EDUCATION
            </motion.p>

            <div className="relative border-l border-border pl-8 flex flex-col gap-0">
              {education.map((edu, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="py-7 relative"
                >
                  <div className="absolute left-[-34px] top-9 w-2.5 h-2.5 rounded-full bg-accent/60 border-2 border-white" />
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-1.5">
                    {edu.years.en}
                  </p>
                  <h3 className="font-serif font-bold text-base md:text-lg text-foreground mb-1">
                    {edu.school.en}
                  </h3>
                  {edu.department && (
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-1">
                      {edu.department.en}
                    </p>
                  )}
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-3">
                    {edu.degree.en}
                  </p>
                  {edu.honors && edu.honors.length > 0 && (
                    <ul className="flex flex-col gap-1">
                      {edu.honors.map((h, hi) => (
                        <li key={hi} className="font-mono text-xs uppercase tracking-[0.15em] text-muted flex items-start gap-2">
                          <span className="text-accent/40 mt-0.5">·</span>
                          {h.en}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              ))}
            </div>
          </section>

          {/* Research (tightly follows Education) */}
          <section className="pt-0 lg:-mt-[1px]" aria-label="Research">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.4em] text-muted mb-6 hidden lg:block invisible"
            >
              {/* Spacer matching the label height */}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.4em] text-muted mb-6 mt-8 lg:hidden"
            >
              RESEARCH
            </motion.p>

            <div className="relative border-l border-border pl-8 flex flex-col gap-0">
              {researchExps.map((exp, i) => (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.07 }}
                  className="py-8 relative group cursor-pointer bg-transparent hover:bg-[var(--surface-hover)] transition-colors rounded-xl px-5 -mx-5"
                  role="button"
                  tabIndex={0}
                  data-cursor="expand"
                  onClick={() => setSelectedExperience(exp)}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedExperience(exp)}
                >
                  <div className="absolute left-[-34px] top-10 w-2.5 h-2.5 rounded-full bg-accent/50 border-2 border-white group-hover:bg-accent transition-colors" />
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-2">
                    {exp.date.en}
                  </p>
                  <h3 className="font-serif font-bold text-lg md:text-xl text-foreground mb-1 group-hover:text-accent transition-colors leading-snug">
                    {exp.title.en}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-3">
                    {exp.organization.en}
                  </p>
                  <p className="text-[13px] text-muted leading-relaxed max-w-md line-clamp-2">
                    {exp.shortDescription.en}
                  </p>
                  {exp.paperLink && (
                    <a
                      href={exp.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 mt-3 font-mono text-xs uppercase tracking-[0.2em] text-accent border border-accent/25 hover:border-accent/60 rounded px-2 py-1 transition-colors"
                    >
                      <FileText className="h-3 w-3" /> ARXIV PAPER
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          </section>
        </div>

        {/* Skills Proficiency */}
        <section aria-label="Skills Proficiency">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-muted mb-6"
          >
            SKILLS PROFICIENCY
          </motion.p>

          <div className="flex flex-col gap-7">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: ci * 0.06 }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-3">
                  {cat.title.en}
                </p>
                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill, si) => (
                    <div key={si}>
                      <div className="flex justify-between items-baseline mb-1.5">
                        <span className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/90">
                          {typeof skill.name === 'string' ? skill.name : skill.name.en}
                        </span>
                        <span className="font-mono text-xs text-accent/70">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-[2px] bg-surface-hover rounded">
                        <motion.div
                          className="h-full rounded"
                          style={{ background: 'linear-gradient(90deg, var(--accent-base), var(--accent-indigo))' }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: si * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Philosophy Quote ── */}
      <section
        className="section-full px-6"
        aria-label="Philosophy"
      >
        <blockquote className="max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif italic text-subhead text-foreground leading-relaxed"
          >
            &ldquo;Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.&rdquo;
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted mt-6"
          >
            — William Paul Thurston
          </motion.p>
        </blockquote>
      </section>

      {/* ── Personal Interests ── */}
      <section className="py-16 px-6 lg:px-12" aria-label="Personal Interests">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-muted mb-8 text-center"
          >
            OUTSIDE THE CLASSROOM
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {personalInterests.map((interest, i) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="academic-card p-7 rounded-xl flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent-glow-subtle)] flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-foreground mb-1.5">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section-full flex-col text-center px-6"
        aria-label="Connect"
      >
        <h2 className="font-serif font-bold text-headline text-foreground text-balance mb-7 will-change-transform">
          <TextReveal key="en" splitBy="word" staggerDelay={0.08}>
            LET'S CONNECT
          </TextReveal>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton href="/contact" size="lg" data-cursor="expand">
            Get In Touch
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            data-cursor="expand"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </MagneticButton>
          <MagneticButton
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="lg"
            data-cursor="expand"
          >
            <Github className="h-4 w-4" />
            GitHub
          </MagneticButton>
        </motion.div>
      </section>

      {/* Experience Modal */}
      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </>
  );
}
