interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      {subtitle && (
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
