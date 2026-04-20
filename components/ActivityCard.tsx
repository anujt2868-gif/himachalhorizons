import Image from 'next/image';

interface ActivityCardProps {
  name: string;
  description: string;
  image: string;
  difficulty: string;
  bestFor: string;
}

export function ActivityCard({
  name,
  description,
  image,
  difficulty,
  bestFor
}: ActivityCardProps) {
  const getDifficultyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'easy':
        return 'text-green-600 bg-green-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'hard':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

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
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-2 py-1 rounded ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
          <span className="text-xs font-semibold px-2 py-1 rounded bg-muted text-foreground">
            {bestFor}
          </span>
        </div>
      </div>
    </div>
  );
}
