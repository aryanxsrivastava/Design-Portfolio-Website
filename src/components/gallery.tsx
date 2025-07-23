
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Design = {
  id: number;
  title: string;
  category: 'Photo Manipulation' | 'Graphic Design' | 'Digital Painting' | 'Concept Art';
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  aiHint: string;
};

const featuredDesigns: Design[] = [
  { id: 1, title: "Surreal Dreamscape", category: "Photo Manipulation", imageUrl: "https://placehold.co/600x800.png", imageWidth: 600, imageHeight: 800, aiHint: "surreal dreamscape" },
  { id: 2, title: "Vintage Movie Poster", category: "Graphic Design", imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "vintage poster" },
  { id: 3, title: "Fantasy Character", category: "Digital Painting", imageUrl: "https://placehold.co/600x400.png", imageWidth: 600, imageHeight: 400, aiHint: "fantasy character" },
  { id: 4, title: "Sci-Fi Concept Art", category: "Concept Art", imageUrl: "https://placehold.co/800x500.png", imageWidth: 800, imageHeight: 500, aiHint: "scifi concept" },
];

export default function Gallery() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section id="work" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold mb-4 sm:text-5xl text-primary">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my passion for creating elegant and effective designs.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredDesigns.map((design, i) => (
             <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
             >
              <div className="group">
                <div className="overflow-hidden rounded-lg shadow-xl mb-6">
                  <Image
                    src={design.imageUrl}
                    alt={design.title}
                    width={design.imageWidth}
                    height={design.imageHeight}
                    data-ai-hint={design.aiHint}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-2">{design.title}</h3>
                <p className="text-md text-muted-foreground mb-4">{design.category}</p>
                <Button variant="link" className="p-0 text-primary h-auto">
                  Download Asset
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
