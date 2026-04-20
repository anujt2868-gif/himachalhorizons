import { testimonials } from '@/lib/data';
import { TestimonialCard } from './TestimonialCard';
import { SectionHeader } from './SectionHeader';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Reviews"
          title="What Our Travelers Say"
          description="Real experiences from people who have discovered the magic of Himachal with us"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              text={testimonial.text}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
