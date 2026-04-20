'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="pt-20 pb-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Discover Your Mountain Paradise
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Himachal <span className="text-primary">Horizons</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Experience the breathtaking beauty of Himachal Pradesh. From ancient temples to thrilling adventures, explore the hidden gems of the Himalayas with expert guides and unforgettable memories.
            </p>

            {/* Search Bar */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                Search
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Explore Destinations
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground">Destinations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Travelers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4.8★</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
              <Image 
                src="/hero.jpg" 
                alt="Majestic Himalayan Mountains" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg max-w-xs">
              <p className="font-semibold text-foreground text-sm mb-1">Popular Right Now</p>
              <p className="text-muted-foreground text-xs">Spiti Valley Trek - 4.9★ (156 reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
