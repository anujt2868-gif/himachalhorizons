import { temples } from '@/lib/data';
import { TempleCard } from './TempleCard';
import { SectionHeader } from './SectionHeader';

export function TemplesSection() {
  // Display first 12 temples in the grid
  const displayedTemples = temples.slice(0, 12);

  return (
    <section id="temples" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Spiritual"
          title="Ancient Temples & Monasteries"
          description="Journey through centuries of spiritual history and architecture in sacred places"
        />

        {/* Temples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedTemples.map((temple) => (
            <TempleCard
              key={temple.id}
              name={temple.name}
              location={temple.location}
              description={temple.description}
              image={temple.image}
              type={temple.type}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            Explore All Temples
          </button>
        </div>
      </div>
    </section>
  );
}
