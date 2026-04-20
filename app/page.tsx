import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { DestinationsSection } from '@/components/DestinationsSection';
import { TemplesSection } from '@/components/TemplesSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { PackagesSection } from '@/components/PackagesSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DestinationsSection />
      <TemplesSection />
      <ActivitiesSection />
      <PackagesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
