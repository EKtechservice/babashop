import { ArrowUpRight } from 'lucide-react';
import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'gold' | 'outline' | 'dark';
};

const variants = {
  gold:
    'bg-gold-gradient text-navy-950 shadow-gold hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_40px_rgba(212,164,55,0.35)]',
  outline:
    'border border-gold-400/80 bg-transparent text-gold-300 hover:-translate-y-0.5 hover:border-gold-300 hover:bg-gold-500/5',
  dark:
    'border border-white/10 bg-navy-900 text-cream hover:-translate-y-0.5 hover:border-gold-400/70 hover:text-gold-300',
};

export function Button({
  children,
  className = '',
  variant = 'gold',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`group inline-flex items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </button>
  );
}
