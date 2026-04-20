import { packages } from '@/lib/data';
import { PackageCard } from './PackageCard';
import { SectionHeader } from './SectionHeader';

export function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Tours"
          title="Curated Tour Packages"
          description="Pre-planned itineraries designed to showcase the best of Himachal Pradesh"
        />

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              name={pkg.name}
              duration={pkg.duration}
              price={pkg.price}
              highlights={pkg.highlights}
              image={pkg.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
