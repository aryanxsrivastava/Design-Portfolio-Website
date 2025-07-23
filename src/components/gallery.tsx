"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

type Design = {
  id: number;
  title: string;
  category: 'Illustration' | 'Web Design' | 'Logo';
  date: string;
  popularity: number;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  aiHint: string;
};

const initialDesigns: Design[] = [
  { id: 1, title: "Cosmic Landscape", category: "Illustration", date: "2024-07-15", popularity: 85, imageUrl: "https://placehold.co/600x800.png", imageWidth: 600, imageHeight: 800, aiHint: "cosmic landscape" },
  { id: 2, title: "E-commerce Homepage", category: "Web Design", date: "2024-06-20", popularity: 95, imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "ecommerce homepage" },
  { id: 3, title: "Nature's Emblem", category: "Logo", date: "2024-07-01", popularity: 90, imageUrl: "https://placehold.co/600x600.png", imageWidth: 600, imageHeight: 600, aiHint: "nature logo" },
  { id: 4, title: "City at Dusk", category: "Illustration", date: "2024-05-10", popularity: 88, imageUrl: "https://placehold.co/600x750.png", imageWidth: 600, imageHeight: 750, aiHint: "city dusk" },
  { id: 5, title: "Minimalist Portfolio", category: "Web Design", date: "2024-04-25", popularity: 98, imageUrl: "https://placehold.co/600x400.png", imageWidth: 600, imageHeight: 400, aiHint: "minimalist portfolio" },
  { id: 6, title: "Tech Startup Icon", category: "Logo", date: "2024-06-05", popularity: 93, imageUrl: "https://placehold.co/600x600.png", imageWidth: 600, imageHeight: 600, aiHint: "tech logo" },
  { id: 7, title: "Fantasy World Map", category: "Illustration", date: "2024-03-18", popularity: 82, imageUrl: "https://placehold.co/800x600.png", imageWidth: 800, imageHeight: 600, aiHint: "fantasy map" },
  { id: 8, title: "SaaS Dashboard", category: "Web Design", date: "2024-07-10", popularity: 96, imageUrl: "https://placehold.co/800x500.png", imageWidth: 800, imageHeight: 500, aiHint: "saas dashboard" },
  { id: 9, title: "Abstract Geometry", category: "Logo", date: "2024-02-22", popularity: 89, imageUrl: "https://placehold.co/600x600.png", imageWidth: 600, imageHeight: 600, aiHint: "abstract logo" },
];

const categories = ['All', 'Illustration', 'Web Design', 'Logo'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('popularity');

  const filteredAndSortedDesigns = useMemo(() => {
    return initialDesigns
      .filter(design => filter === 'All' || design.category === filter)
      .sort((a, b) => {
        if (sort === 'popularity') {
          return b.popularity - a.popularity;
        }
        if (sort === 'date') {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return 0;
      });
  }, [filter, sort]);
  
  // No FOUC for framer-motion
  const [hasMounted, setHasMounted] = useState(false);
  
  useMemo(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 font-headline sm:text-4xl">Design Gallery</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore a curated collection of my work, from intricate illustrations to sleek web designs and memorable logos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Filter by:</span>
            <div className="flex items-center gap-2 rounded-lg bg-card p-1 border">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={filter === category ? 'secondary' : 'ghost'}
                  onClick={() => setFilter(category)}
                  size="sm"
                  className={`capitalize transition-colors duration-200 ${filter === category ? 'bg-primary/10 text-primary' : ''}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Sort by:</span>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[180px] bg-card">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="date">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredAndSortedDesigns.map((design, i) => (
             <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="break-inside-avoid"
             >
              <Card className="overflow-hidden group relative border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl">
                <CardContent className="p-0">
                  <Image
                    src={design.imageUrl}
                    alt={design.title}
                    width={design.imageWidth}
                    height={design.imageHeight}
                    data-ai-hint={design.aiHint}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-lg font-bold text-white mb-2">{design.title}</h3>
                    <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
