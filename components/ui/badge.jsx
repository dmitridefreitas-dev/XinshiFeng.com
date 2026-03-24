import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default: 'bg-[var(--accent-glow-subtle)] text-accent border border-[var(--accent-glow-strong)]',
        secondary: 'bg-surface-hover text-muted border border-border',
        outline: 'border border-border text-muted',
        destructive: 'bg-[var(--accent-glow-subtle)] text-destructive border border-[var(--accent-glow-strong)]',
        award: 'bg-[var(--accent-glow-subtle)] text-[var(--accent-indigo)] border border-[var(--accent-glow-strong)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
