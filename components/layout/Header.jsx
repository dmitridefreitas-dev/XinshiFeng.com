'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileText, Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';
import MagneticButton from '@/components/effects/MagneticButton';
import { socialLinks } from '@/data/constants';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { language, toggleLanguage, t, mounted: langMounted } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isBlue, setIsBlue] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkBlue = () => setIsBlue(document.documentElement.classList.contains('theme-blue'));
    checkBlue();
    
    // Add a simple listener for theme changes if needed, or just let the button handle it.
    // Since ClientShell.jsx uses keyboard shortcuts, we should listen for them.
    window.addEventListener('keydown', checkBlue);
    return () => window.removeEventListener('keydown', checkBlue);
  }, []);

  const toggleAccent = () => {
    const next = !isBlue;
    setIsBlue(next);
    if (next) {
      document.documentElement.classList.add('theme-blue');
    } else {
      document.documentElement.classList.remove('theme-blue');
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const NAV_LINKS = [
    { href: '/',        label: t('nav.home') },
    { href: '/about',   label: t('nav.about') },
    { href: '/projects', label: t('nav.research') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const MOBILE_NAV_LINKS = [
    ...NAV_LINKS,
    { href: 'https://drive.google.com/file/d/1K6AhFHorjonEPDpiJxP-X-GpC_9k4x67/view?usp=drive_link', label: t('nav.resume'), external: true }
  ];

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? 'bg-[var(--surface-overlay-strong)] backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ willChange: 'background-color' }}
    >
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between relative">

        {/* Logo — serif monogram */}
        <Link href="/" className="group flex items-center gap-2 relative z-10" data-cursor="expand">
          <motion.span
            className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200"
            whileHover={{ scale: 1.04 }}
          >
            X. Feng
          </motion.span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-mono text-xs md:text-sm uppercase tracking-[0.25em] transition-colors duration-200 hover:text-accent"
                style={{ color: isActive ? 'var(--accent-base)' : 'var(--muted)' }}
                data-cursor="expand"
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right side — social icons */}
        <div className="hidden md:flex items-center gap-4 relative z-10">
          <div className="flex items-center gap-2 mr-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2 py-1 rounded border border-border/50 hover:border-accent/40 transition-[border-color] group"
              aria-label="Toggle Language"
              data-cursor="expand"
            >
              <Languages className="h-3 w-3 text-muted group-hover:text-accent" />
              <span className="font-mono text-[10px] font-bold text-muted group-hover:text-accent uppercase tracking-wider">
                {language === 'en' ? 'EN' : 'CN'}
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center text-muted hover:text-accent transition-colors rounded-full hover:bg-accent/5"
              aria-label="Toggle Dark Mode"
              data-cursor="expand"
            >
              {mounted && resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
          <div className="w-px h-4 bg-border mx-1" />
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
            data-cursor="expand"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
            data-cursor="expand"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={socialLinks.arxiv}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="arXiv paper"
            data-cursor="expand"
          >
            <FileText className="h-4 w-4" />
          </a>
          <MagneticButton href="/contact" variant="ghost" className="text-sm px-4 py-1.5" data-cursor="expand">
            {t('hero.getInTouch')}
          </MagneticButton>
        </div>

        <div className="flex items-center gap-1 relative z-10 md:hidden">
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 flex items-center justify-center text-muted hover:text-accent transition-colors"
            aria-label="Toggle Language"
            data-cursor="expand"
            style={{ touchAction: 'manipulation' }}
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
              {language === 'en' ? 'EN' : 'CN'}
            </span>
          </button>
          <button
            onClick={toggleTheme}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-accent transition-colors"
            aria-label="Toggle Dark Mode"
            data-cursor="expand"
            style={{ touchAction: 'manipulation' }}
          >
            {mounted && resolvedTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Mobile menu toggle — min 44×44 touch target */}
          <button
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            data-cursor="expand"
            style={{ touchAction: 'manipulation' }}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ willChange: 'transform, opacity' }}
            className="md:hidden bg-[var(--surface-overlay-solid)] backdrop-blur-md border-b border-border px-6 py-8 flex flex-col gap-6"
          >
            {MOBILE_NAV_LINKS.map((link) => {
              const isActive = !link.external && (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)));
              return link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.3em] transition-colors py-2 min-h-[44px] flex items-center text-muted hover:text-accent"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-[0.3em] transition-colors py-2 min-h-[44px] flex items-center"
                  style={{ color: isActive ? 'var(--accent-base)' : 'inherit' }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-accent transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-accent transition-colors">
                  <Github className="h-4 w-4" />
                </a>
                <a href={socialLinks.arxiv} target="_blank" rel="noopener noreferrer" aria-label="arXiv paper" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-accent transition-colors">
                  <FileText className="h-4 w-4" />
                </a>
              </div>

              {/* Red / Blue Accent Switch */}
              <button
                onClick={toggleAccent}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 hover:border-accent/40 transition-[border-color] group"
                aria-label="Toggle Accent Color"
                style={{ touchAction: 'manipulation' }}
              >
                <div className={`w-3 h-3 rounded-full ${isBlue ? 'bg-[#0ea5e9]' : 'bg-[#DC2626]'}`} />
                <span className="font-mono text-[10px] font-bold text-muted group-hover:text-accent uppercase tracking-wider">
                  {isBlue ? 'Blue' : 'Red'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
