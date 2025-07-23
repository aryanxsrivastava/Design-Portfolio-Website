
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Download } from 'lucide-react';
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
  { id: 1, title: "Surreal Dreamscape", category: "Photo Manipulation", imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "surreal dreamscape" },
  { id: 2, title: "Vintage Movie Poster", category: "Graphic Design", imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "vintage poster" },
  { id: 3, title: "Fantasy Character", category: "Digital Painting", imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "fantasy character" },
  { id: 4, title: "Sci-Fi Concept Art", category: "Concept Art", imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "scifi concept" },
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
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            A selection of projects that showcase my passion for creating elegant and effective designs.
          </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredDesigns.map((design, i) => (
             <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
             >
              <div className="group relative bg-card p-4 rounded-lg border border-border shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50">
                <div className="overflow-hidden rounded-md mb-4 aspect-video">
                  <Image
                    src={design.imageUrl}
                    alt={design.title}
                    width={design.imageWidth}
                    height={design.imageHeight}
                    data-ai-hint={design.aiHint}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{design.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{design.category}</p>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
}
