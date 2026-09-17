export default function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="reveal grid md:grid-cols-[180px_1fr] gap-7 items-start">
      <div className="flex items-center gap-3 pt-3">
        <span className="w-2 h-2 rounded-full bg-gold" />
        <span className="text-[11px] tracking-[.2em] uppercase text-muted">
          {eyebrow}
        </span>
      </div>
      <div>
        <h2 className="serif text-4xl md:text-6xl leading-[.98] tracking-[-.035em]">
          {title}
        </h2>
        {children && (
          <p className="mt-5 max-w-2xl text-muted leading-7">{children}</p>
        )}
      </div>
    </div>
  );
}
