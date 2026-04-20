import { features } from '@/lib/data';
import { FeatureItem } from './FeatureItem';
import { SectionHeader } from './SectionHeader';

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Why Choose Us"
          title="What Makes Us Different"
          description="Experience Himachal with a company that truly cares about authentic travel"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureItem
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
