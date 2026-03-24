'use client';
import Link from 'next/link';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';
import { socialLinks, contactInfo } from '@/data/constants';
import FooterMeters from './FooterMeters';

export default function Footer() {
  const year = new Date().getFullYear();

  const NAV_LINKS = [
    { href: '/',        label: "HOME" },
    { href: '/about',   label: "ABOUT" },
    { href: '/projects', label: "RESEARCH" },
    { href: '/contact', label: "CONTACT" },
    { href: 'https://drive.google.com/file/d/1K6AhFHorjonEPDpiJxP-X-GpC_9k4x67/view?usp=drive_link', label: "RESUME", external: true },
  ];

  return (
    <footer className="relative border-t border-border bg-[var(--surface-overlay)] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">

          {/* Branding */}
          <div>
            <p className="font-serif text-lg font-bold text-foreground">
              Xinshi Feng
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted mt-1">
              PHD CANDIDATE IN MATH & CS
            </p>
          </div>

          {/* Nav — py-2 for adequate touch height */}
          <nav className="flex-1 grid grid-cols-2 gap-x-12 gap-y-2 justify-items-start w-fit mx-auto" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-muted hover:text-accent transition-colors py-2 min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-muted hover:text-accent transition-colors py-2 min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Social icons — min 44×44 touch targets */}
          <div className="flex items-center gap-1">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-accent transition-colors"
              data-cursor="expand"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-accent transition-colors"
              data-cursor="expand"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.arxiv}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Published paper on arXiv"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-accent transition-colors"
              data-cursor="expand"
            >
              <FileText className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-accent transition-colors"
              data-cursor="expand"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Footer meters */}
        <FooterMeters />

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-muted">
            © {year} Xinshi Feng · ST. LOUIS, MO
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.05em] sm:tracking-[0.2em] text-muted text-center sm:text-right max-w-xs sm:max-w-none">
            AVAILABLE FOR MATH PHD PROGRAMS & RESEARCH INTERNSHIPS, FALL 2027
          </p>
        </div>
      </div>
    </footer>
  );
}
