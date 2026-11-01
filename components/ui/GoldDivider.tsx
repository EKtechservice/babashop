export function GoldDivider() {
  return (
    <div aria-hidden="true" className="relative h-10 w-full overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div className="absolute inset-x-6 top-1/2 h-8 -translate-y-1/2 bg-navy-900/95 [clip-path:polygon(0_50%,4%_0,96%_0,100%_50%,96%_100%,4%_100%)]" />
      <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gold-400" />
    </div>
  );
}
