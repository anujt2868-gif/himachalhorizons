import Image from 'next/image';

interface TempleCardProps {
  name: string;
  location: string;
  description: string;
  image: string;
  type: string;
}

export function TempleCard({
  name,
  location,
  description,
  image,
  type
}: TempleCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:border-primary">
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden bg-muted">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">{type}</p>
          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
