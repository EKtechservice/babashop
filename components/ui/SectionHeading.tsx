type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
}: SectionHeadingProps) {
  const isDark = theme === 'dark';
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignClass}`}>
      <p
        className={`mb-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] ${
          isDark ? 'text-gold-300' : 'text-gold-600'
        }`}
      >
        <span className="h-2 w-2 rounded-sm bg-gradient-to-br from-gold-300 to-gold-600" />
        {eyebrow}
      </p>

      <h2
        className={`font-display text-4xl uppercase leading-none tracking-[0.02em] md:text-5xl ${
          isDark ? 'text-cream' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
