import { Check } from 'lucide-react';
import Image from 'next/image';

interface PackageCardProps {
  name: string;
  duration: string;
  price: string;
  highlights: string[];
  image: string;
}

export function PackageCard({
  name,
  duration,
  price,
  highlights,
  image
}: PackageCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:border-primary hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-accent font-semibold mb-4">📅 {duration}</p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{highlight}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded-lg hover:bg-primary/90 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
