import { destinations } from '@/lib/data';
import { DestinationCard } from './DestinationCard';
import { SectionHeader } from './SectionHeader';

export function DestinationsSection() {
  // Display first 12 destinations in the grid
  const displayedDestinations = destinations.slice(0, 12);

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Explore"
          title="Top Destinations in Himachal"
          description="Discover the most enchanting places in Himachal Pradesh, from mountain peaks to hidden valleys"
        />

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              name={destination.name}
              category={destination.category}
              description={destination.description}
              image={destination.image}
              rating={destination.rating}
              reviews={destination.reviews}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
