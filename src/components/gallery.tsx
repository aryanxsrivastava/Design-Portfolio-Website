"use client";

import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

type Design = {
  id: number;
  title: string;
  category: 'Illustration' | 'Web Design' | 'Logo';
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  aiHint: string;
};

const featuredDesigns: Design[] = [
  { id: 2, title: "E-commerce Homepage", category: "Web Design", imageUrl: "https://placehold.co/600x450.png", imageWidth: 600, imageHeight: 450, aiHint: "ecommerce homepage" },
  { id: 5, title: "Minimalist Portfolio", category: "Web Design", imageUrl: "https://placehold.co/600x400.png", imageWidth: 600, imageHeight: 400, aiHint: "minimalist portfolio" },
  { id: 8, title: "SaaS Dashboard", category: "Web Design", imageUrl: "https://placehold.co/800x500.png", imageWidth: 800, imageHeight: 500, aiHint: "saas dashboard" },
  { id: 1, title: "Cosmic Landscape", category: "Illustration", imageUrl: "https://placehold.co/600x800.png", imageWidth: 600, imageHeight: 800, aiHint: "cosmic landscape" },
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
    <section id="work" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 font-headline sm:text-4xl">Featured Work</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is a selection of my favorite projects. Feel free to explore and download any assets you find useful.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredDesigns.map((design, i) => (
             <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
             >
              <Card className="overflow-hidden group relative border-2 border-transparent hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl bg-card">
                <CardContent className="p-0">
                  <Image
                    src={design.imageUrl}
                    alt={design.title}
                    width={design.imageWidth}
                    height={design.imageHeight}
                    data-ai-hint={design.aiHint}
                    className="w-full h-auto object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-3">{design.title}</h3>
                    <p className="text-sm text-primary-foreground/80 mb-4">{design.category}</p>
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
