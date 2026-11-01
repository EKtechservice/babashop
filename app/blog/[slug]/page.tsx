export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-cream px-6 py-20 text-navy-900">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_18px_35px_rgba(15,23,42,0.06)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">PrimeCut Journal</p>
        <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.04em] text-navy-900">
          {params.slug.replace(/-/g, ' ')}
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-700">
          This is a placeholder blog post page for the PrimeCut Journal. Content for this article will be added here in a future step.
        </p>
      </div>
    </main>
  );
}
