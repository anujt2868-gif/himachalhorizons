import Image from 'next/image';
import { SectionHeader } from './SectionHeader';

const galleryImages = [
  { id: 1, title: 'Mountain Peaks', category: 'Landscape', image: '/gallery/mountain_peaks.jpg', span: 'md:col-span-1 md:row-span-2 h-96' },
  { id: 2, title: 'Temple Architecture', category: 'Cultural', image: '/gallery/temple_architecture.jpg', span: 'h-48' },
  { id: 3, title: 'Adventure Activities', category: 'Action', image: '/gallery/trekking_adventure.jpg', span: 'h-48' },
  { id: 4, title: 'Forest Paths', category: 'Nature', image: '/gallery/forest_paths.jpg', span: 'h-48' },
  { id: 5, title: 'Local Villages', category: 'Culture', image: '/gallery/village_culture.jpg', span: 'md:col-span-1 md:row-span-2 h-96' },
  { id: 6, title: 'Sunset Views', category: 'Landscape', image: '/gallery/sunset_views.jpg', span: 'h-48' },
];

export function GallerySection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Gallery"
          title="Visual Journey Through Himachal"
          description="Stunning moments captured from our travelers' adventures"
        />

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105 ${item.span}`}
            >
              {/* Image */}
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
