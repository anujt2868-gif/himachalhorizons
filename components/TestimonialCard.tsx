import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export function TestimonialCard({
  name,
  location,
  text,
  rating,
  image
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col p-6 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow italic">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author Info */}
      <div className="pt-4 border-t border-border">
        <p className="font-semibold text-foreground text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{location}</p>
      </div>
    </div>
  );
}
