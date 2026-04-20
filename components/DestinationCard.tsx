import { Star } from 'lucide-react';
import Image from 'next/image';

interface DestinationCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
}

export function DestinationCard({
  name,
  category,
  description,
  image,
  rating,
  reviews
}: DestinationCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:border-accent">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
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
        <div className="mb-2 flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wide">{category}</p>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
          </div>
        </div>

        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 pt-3 border-t border-border">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold text-foreground">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
}
