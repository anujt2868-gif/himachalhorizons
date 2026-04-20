import { activities } from '@/lib/data';
import { ActivityCard } from './ActivityCard';
import { SectionHeader } from './SectionHeader';

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Adventure"
          title="Thrilling Activities & Experiences"
          description="From trekking to paragliding, discover adrenaline-pumping adventures for all levels"
        />

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              name={activity.name}
              description={activity.description}
              image={activity.image}
              difficulty={activity.difficulty}
              bestFor={activity.bestFor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
