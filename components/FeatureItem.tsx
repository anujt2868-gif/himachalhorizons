interface FeatureItemProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureItem({
  title,
  description,
  icon
}: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
