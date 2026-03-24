/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './contexts/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--fg)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted)',
        },
        accent: {
          DEFAULT: 'var(--accent-base)',
          blue: 'var(--accent-base)',
          indigo: 'var(--accent-indigo)',
          violet: 'var(--accent-violet)',
          foreground: 'var(--bg)',
          glow: 'var(--accent-glow)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          hover: 'var(--surface-hover)',
        },
        border: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
        },
        destructive: {
          DEFAULT: 'var(--accent-base)',
          foreground: 'var(--surface)',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'Consolas', 'monospace'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display':    ['clamp(1.75rem,3.5vw,2.75rem)', { lineHeight: '1.0',  letterSpacing: '-0.03em' }],
        'headline':   ['clamp(1.2rem,2vw,1.75rem)',    { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'subhead':    ['clamp(0.95rem,1.5vw,1.2rem)',  { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'body-fluid': ['clamp(0.8rem,0.9vw,0.95rem)',  { lineHeight: '1.65' }],
      },
      keyframes: {
        'ticker-scroll': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow-subtle)' },
          '50%':      { boxShadow: '0 0 35px var(--accent-glow-strong), 0 0 70px var(--accent-glow)' },
        },
        'grid-breathe': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
        'aurora-shift': {
          '0%':   { transform: 'translateX(-50%) scale(1) rotate(0deg)' },
          '33%':  { transform: 'translateX(-48%) scale(1.05) rotate(1deg)' },
          '66%':  { transform: 'translateX(-52%) scale(0.97) rotate(-1deg)' },
          '100%': { transform: 'translateX(-50%) scale(1) rotate(0deg)' },
        },
        'blob-drift-light': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':      { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%':      { transform: 'translate(-15px, 15px) scale(0.97)' },
        },
      },
      animation: {
        'ticker-scroll':     'ticker-scroll 60s linear infinite',
        'pulse-glow':        'pulse-glow 2s ease-in-out infinite',
        'grid-breathe':      'grid-breathe 20s ease-in-out infinite',
        'aurora-shift':      'aurora-shift 25s ease-in-out infinite',
        'blob-drift-light':  'blob-drift-light 20s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
