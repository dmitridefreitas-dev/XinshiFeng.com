'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '@/components/effects/TextReveal';
import ProjectDetailModal from '@/components/modals/ProjectDetailModal';
import { allProjects, projectCategories } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight, FileText, ExternalLink } from 'lucide-react';

function ProjectRow({ project, index, onOpen }) {
  const { language, t } = useLanguage();
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border border-border py-5 cursor-pointer hover:bg-[var(--surface-hover)] hover:border-accent/40 transition-all rounded-lg px-4 -mx-4"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
      data-cursor="expand"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">

        {/* Index + category */}
        <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:w-24 flex-shrink-0">
          <span
            className="font-serif font-bold text-3xl leading-none group-hover:text-accent transition-colors"
            style={{ color: 'var(--accent-base)', opacity: 0.2 }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {project.category[language]}
          </span>
          {project.isPaper && (
            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white bg-accent px-1.5 py-0.5 rounded">
              {t('research.published')}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-bold text-lg md:text-xl text-foreground group-hover:text-accent transition-colors leading-snug mb-2">
            {project.title[language]}
          </h3>
          {project.journal && (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">
              {project.journal}
            </p>
          )}
          <p className="text-sm text-muted leading-relaxed max-w-2xl">
            {project.shortDescription[language]}
          </p>

          {/* Tech stack tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted border border-border rounded px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links & action */}
        <div className="flex md:flex-col items-center gap-3 md:gap-2 flex-shrink-0">
          {project.reportLink && project.reportLink !== '#' && (
            <a
              href={project.reportLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-accent hover:text-accent/80 transition-colors"
              aria-label={t('research.paper')}
            >
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t('research.paper')}</span>
            </a>
          )}
          <span className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-muted group-hover:text-accent transition-colors">
            {t('research.details')} <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsContent() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = useMemo(
    () => activeCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category.en === activeCategory),
    [activeCategory]
  );

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="section-full flex-col text-center px-6 overflow-hidden pt-28"
        aria-label="Research hero"
      >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-accent mb-6 relative z-10"
        >
          {t('research.subtitle')}
        </motion.p>

        <h1 className="font-serif font-bold text-display text-foreground text-balance will-change-transform relative z-10">
          <TextReveal key={language} splitBy="word" delay={0.4} staggerDelay={0.1}>
            {t('research.title')}
          </TextReveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted mt-6 relative z-10"
        >
          {t('research.projectsCount')}
        </motion.p>

        {/* Published paper highlight */}
        <motion.a
          href="https://arxiv.org/abs/2502.07537"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="relative z-10 mt-5 inline-flex items-center gap-3 academic-card shimmer-card px-5 py-3 rounded-xl hover:border-accent/40 transition-all group"
          data-cursor="expand"
        >
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent dot-pulse" />
          <div className="text-left">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Published · Physical Review E 112, 054309 (2025)</p>
            <p className="font-serif font-bold text-sm text-foreground group-hover:text-accent transition-colors">
              {language === 'en' 
                ? 'Evolution of Cooperation in a Bimodal Mixture of Conditional Cooperators'
                : '双峰条件合作者混合物中的合作演化'}
            </p>
          </div>
          <ExternalLink className="h-3.5 w-3.5 text-muted group-hover:text-accent transition-colors flex-shrink-0" />
        </motion.a>
      </section>

      {/* ── Project List ── */}
      <section className="px-6 lg:px-16 py-16" aria-label="All research">
        <div className="max-w-5xl mx-auto">

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {projectCategories.map((cat) => (
              <motion.button
                key={cat.en}
                onClick={() => setActiveCategory(cat.en)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="font-mono text-xs uppercase tracking-[0.25em] px-4 py-2 rounded-lg border transition-all"
                style={{
                  background: activeCategory === cat.en ? 'var(--accent-base)' : 'transparent',
                  color: activeCategory === cat.en ? 'var(--surface)' : 'var(--muted)',
                  borderColor: activeCategory === cat.en ? 'var(--accent-base)' : 'var(--border)',
                }}
                data-cursor="expand"
              >
                {cat[language]}
              </motion.button>
            ))}
          </div>

          {/* Project rows */}
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory}>
              {filtered.map((project, i) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  index={i}
                  onOpen={setSelectedProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
